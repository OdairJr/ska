import { FindCEPService } from './../../../../core/services/find-cep.service';
import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  MaxLengthValidator,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CepMaskDirective } from 'src/app/core/directives/cep-mask.directive';
import { CpfCnpjMaskDirective } from 'src/app/core/directives/cpf-cnpj-mask.directive';
import { CpfCnpjValidatorDirective } from 'src/app/core/directives/cpf-cnpj-validator.directive';
import { PhoneMaskDirective } from 'src/app/core/directives/phone-mask.directive';
import { Establishment } from 'src/app/core/models/establishment.model';
import { Address } from 'src/app/core/models/address.model';
import { HttpClientModule } from '@angular/common/http';
import { CpfCnpjValidator } from 'src/app/core/validators/cpf-cnpj.validator';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';
import { ESTABLISHMENT_IMPL, IEstablishmentService } from 'src/app/core/interfaces/services';

@Component({
  selector: 'app-create-establishment',
  standalone: true,
  templateUrl: './create-establishment.component.html',
  styleUrls: ['./create-establishment.component.scss'],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CpfCnpjMaskDirective,
    CpfCnpjValidatorDirective,
    PhoneMaskDirective,
    CepMaskDirective,
  ],
})
export class CreateEstablishmentComponent {
  public establishmentForm: FormGroup;
  public imageName = 'Selecione uma foto';

  constructor(
    private fb: FormBuilder,
    @Inject(ESTABLISHMENT_IMPL) private establishmentService: IEstablishmentService,
    private router: Router,
    private findCEPService: FindCEPService,
    private storage: AngularFireStorage
  ) {
    this.establishmentForm = this.fb.group({
      name: ['', [Validators.required]],
      cpfCnpj: ['', [Validators.required, CpfCnpjValidator.validate]],
      description: ['', [Validators.required]],
      street: ['', Validators.required],
      number: ['', Validators.required],
      complement: [''],
      neighborhood: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: [
        '',
        [Validators.required, Validators.pattern(/^[0-9]{5}-[0-9]{3}$/)],
      ],
      phone: [
        '',
        [Validators.required, Validators.pattern(/^\(\d{2}\)\s\d{4,5}-\d{4}$/)],
      ],
      serviceType: ['', [Validators.required]],
      image: [''],
    });
  }

  public onSubmit() {
    if (this.establishmentForm?.valid) {
      const establishment = this.mapFormToEstablishment();
      this.establishmentService.create(establishment).subscribe({
        next: () => {
          this.router.navigate(['/establishment']);
        },
      });
    }
  }

  private mapFormToEstablishment(): Establishment {
    return {
      name: this.establishmentForm?.get('name')?.value,
      cpfCnpj: this.establishmentForm?.get('cpfCnpj')?.value,
      description: this.establishmentForm?.get('description')?.value,
      address: {
        street: this.establishmentForm?.get('street')?.value,
        number: this.establishmentForm?.get('number')?.value,
        complement: this.establishmentForm?.get('complement')?.value,
        neighborhood: this.establishmentForm?.get('neighborhood')?.value,
        city: this.establishmentForm?.get('city')?.value,
        state: this.establishmentForm?.get('state')?.value,
        zipCode: this.establishmentForm?.get('zipCode')?.value,
      },
      phone: this.establishmentForm?.get('phone')?.value,
      serviceType: this.establishmentForm?.get('serviceType')?.value,
      image: this.establishmentForm?.get('image')?.value,
    };
  }

  public searchCep() {
    const zipCode = this.establishmentForm?.get('zipCode')?.value;
    this.findCEPService.getCep(zipCode).subscribe((cepData) => {
      // Verifica se cepData não é nulo antes de definir os valores
      if (cepData) {
        this.populateAddressFields(cepData);
      }
    });
  }

  private populateAddressFields(cepData: Address) {
    this.establishmentForm.patchValue({
      street: cepData.logradouro,
      complement: cepData.complemento,
      neighborhood: cepData.bairro,
      city: cepData.localidade,
      state: cepData.uf,
      zipCode: cepData.cep,
    });
  }

  public uploadFile(event) {
    const file = event.target.files[0];
    const filePath = `uploads/${new Date().getTime()}_${file.name}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            this.imageName = file.name;

            this.establishmentForm.get('image').setValue(url);
          });
        })
      )
      .subscribe();
  }
}
