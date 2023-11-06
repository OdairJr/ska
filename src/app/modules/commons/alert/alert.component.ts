import { AlertService } from './../../../core/services/alert.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
  public alertConfiguration$ = this.alertService.alertConfiguration;

  constructor(private readonly alertService: AlertService) {}
}
