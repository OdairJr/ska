import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { EstablishmentService } from 'src/app/core/services/establishment.service';
import { HeaderComponent } from 'src/app/modules/common/header/header.component';
import { HeaderConfiguration } from 'src/app/modules/common/header/header.model';

@Component({
  selector: 'app-list',
  standalone: true,
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  imports: [CommonModule, RouterModule, HeaderComponent]
})
export class ListComponent {
  public headerConfiguration: HeaderConfiguration = {
    title: 'Estabelecimentos',
    hasAddButton: true,
    hasBackButton: true,
    backButtonRoute: '/login',
  };

  public establishments$ = this.establishmentService.getAll();

  constructor(
    private establishmentService: EstablishmentService,
    private router: Router
  ) {}

  public goToDetails(id?: string) {
    if(!id) return console.error('No id provided');

    this.router.navigate(['/establishment/details', id]);
  }
}
