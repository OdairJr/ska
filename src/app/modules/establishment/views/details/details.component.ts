import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Inject,
} from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { ESTABLISHMENT_IMPL, IEstablishmentService } from 'src/app/core/interfaces/services';
import { Establishment } from 'src/app/core/models/establishment.model';
import { GoogleMapsService } from 'src/app/core/services/google-maps.service';

@Component({
  selector: 'app-details',
  standalone: true,
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  imports: [CommonModule, RouterModule],
})
export class DetailsComponent implements OnInit, AfterViewInit {
  public headerConfiguration = {
    title: 'Detalhes do estabelecimento',
    hasAddButton: false,
    hasBackButton: true,
    backButtonRoute: '/establishment',
  };

  public establishments$?: Observable<Establishment>;
  public establishmentId?: string;

  public tipos = ['Mecanica', 'Oficina', 'Funilaria', 'Autopeças'];

  @ViewChild('map') mapElement?: ElementRef;

  constructor(
    @Inject(ESTABLISHMENT_IMPL) private establishmentService: IEstablishmentService,
    private route: ActivatedRoute,
    private googleMapsService: GoogleMapsService
  ) {
    this.route.data.subscribe((data) => {
      this.establishmentId = data['establishmentId'];
    });
  }

  public ngOnInit(): void {
    let id = this.route.snapshot.params['id'];

    this.establishments$ = this.establishmentService.getAll().pipe(
      map(
        (establishments) =>
          establishments.filter((establishment) => establishment.id === id)[0]
      ),
      tap((establishment) => {
        if (establishment) {
          this.googleMapsService.addMarkerToMap(establishment);
        }
      })
    );
  }

  @ViewChild('minhaDiv') minhaDiv!: ElementRef;

  ngAfterViewInit() {
    if (this.mapElement) {
      this.googleMapsService.createMap(this.mapElement);
    }
  }
}
