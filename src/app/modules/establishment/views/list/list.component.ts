import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Observable, map, startWith } from 'rxjs';
import { Establishment } from 'src/app/core/models/establishment.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { EstablishmentService } from 'src/app/core/services/establishment.service';

@Component({
  selector: 'app-list',
  standalone: true,
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
})
export class ListComponent implements OnInit {
  public establishments?: Establishment[];
  public establishmentsFiltered$?: Observable<Establishment[]>;

  public searchControl = new FormControl();

  public tipos = ['Mecanica', 'Oficina', 'Funilaria', 'Autopeças'];

  constructor(
    private establishmentService: EstablishmentService,
    private router: Router,
    public authService: AuthService
  ) {}

  public ngOnInit(): void {
    this.establishmentService.getAll().subscribe({
      next: (resp) => {
        this.establishments = resp;
        this.initFilter();
      },
    });


  }

  private initFilter() {
    this.establishmentsFiltered$ = this.searchControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  private _filter(value: string) {
    const filterValue = value.toLowerCase();

    return this.establishments?.filter(
      (estab) =>
        estab.name.toLowerCase().includes(filterValue) ||
        estab.description.toLowerCase().includes(filterValue) ||
        estab.serviceType.toLowerCase().includes(filterValue)
    );
  }

  public goToDetails(id?: string) {
    if (!id) return console.error('No id provided');

    this.router.navigate(['/establishment/details', id]);
  }

  public applyFilterChange() {}
}
