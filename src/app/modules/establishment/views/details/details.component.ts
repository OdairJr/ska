import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Establishment } from 'src/app/core/models/establishment.model';
import { EstablishmentService } from 'src/app/core/services/establishment.service';
import {} from 'googlemaps';
import { HeaderComponent } from 'src/app/modules/common/header/header.component';

@Component({
  selector: 'app-details',
  standalone: true,
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  imports: [CommonModule, RouterModule, HeaderComponent],
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

  @ViewChild('map') mapElement?: ElementRef;
  map?: google.maps.Map;

  constructor(
    private establishmentService: EstablishmentService,
    private route: ActivatedRoute
  ) {
    this.route.data.subscribe((data) => {
      this.establishmentId = data['establishmentId'];
    });
  }

  public ngOnInit(): void {
    let id = this.route.snapshot.params['id'];

    this.establishments$ = this.establishmentService
      .getAll()
      .pipe(
        map(
          (establishments) =>
            establishments.filter((establishment) => establishment.id === id)[0]
        )
      );
  }

  @ViewChild('minhaDiv') minhaDiv!: ElementRef;

  ngAfterViewInit() {
    const mapProperties = {
      center: new google.maps.LatLng(-23.6824262, -46.6910678),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    // create a google map with an marker in the center of the map

    if (this.mapElement) {
      this.map = new google.maps.Map(
        this.mapElement.nativeElement,
        mapProperties
      );

      let alo = new google.maps.Marker();
      alo.setPosition(new google.maps.LatLng(-23.6824262, -46.6910678));
      alo.setMap(this.map);
    }
  }
}
