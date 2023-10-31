import { Observable } from 'rxjs';
import { Establishment } from '../../models/establishment.model';
import { InjectionToken } from '@angular/core';

export const ESTABLISHMENT_IMPL = new InjectionToken<IEstablishmentService>('IEstablishmentServiceImpl');

export interface IEstablishmentService {
  getAll(): Observable<Establishment[]>;
  create(establishment: Establishment): Observable<string>;
  update(establishment: Establishment): void;
  delete(objectId: string): Observable<void>;
}
