import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Establishment } from 'src/app/core/models/establishment.model';
import { EstablishmentService } from 'src/app/core/services/establishment.service';
import { HeaderComponent } from 'src/app/modules/common/header/header.component';
import { HeaderConfiguration } from 'src/app/modules/common/header/header.model';

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
    HeaderComponent,
  ],
})
export class CreateEstablishmentComponent {
  public headerConfiguration: HeaderConfiguration = {
    title: 'Cadastrar estabelecimento',
    hasAddButton: false,
    hasBackButton: true,
    backButtonRoute: '/establishment',
  };

  public establishmentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private establishmentService: EstablishmentService,
    private router: Router
  ) {
    this.establishmentForm = this.fb.group({
      name: ['', [Validators.required]],
      cpfCnpj: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]],
      description: ['', [Validators.required]],
      street: ['', Validators.required],
      number: ['', Validators.required],
      complement: [''],
      neighborhood: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
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
      this.establishmentService.create(establishment);
      this.router.navigate(['/establishment']);
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
}
