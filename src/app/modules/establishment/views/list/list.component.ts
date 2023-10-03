import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { EstablishmentService } from 'src/app/core/services/establishment.service';

@Component({
  selector: 'app-list',
  standalone: true,
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  imports: [CommonModule, RouterModule]
})
export class ListComponent {
  public establishments$ = this.establishmentService.getAll();

  constructor(
    private establishmentService: EstablishmentService,
    private router: Router,
    public authService: AuthService
  ) {}

  public goToDetails(id?: string) {
    if(!id) return console.error('No id provided');

    this.router.navigate(['/establishment/details', id]);
  }
}
