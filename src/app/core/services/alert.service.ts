import { Injectable } from '@angular/core';

export interface AlertConfig {
  message: string;
  type: 'success' | 'danger' | 'warning'
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  public showAlert(config: AlertConfig) {

  }
}
