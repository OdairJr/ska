import { Injectable } from '@angular/core';
import { BehaviorSubject, timeout } from 'rxjs';

export interface AlertConfig {
  message?: string;
  type?: 'success' | 'danger' | 'warning',
  isOpned: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private readonly INITIAL_STATE = {
    isOpned: false
  };

  public alertConfiguration: BehaviorSubject<AlertConfig> = new BehaviorSubject<AlertConfig>(this.INITIAL_STATE);

  constructor() { }

  public showAlert(config: AlertConfig) {
    this.alertConfiguration.next(config);

    this.schedulestateReset();
  }

  private schedulestateReset() {
    setTimeout(() => {
      this.alertConfiguration.next(this.INITIAL_STATE);
    }, 5000);
  }
}
