import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Establishment } from 'src/app/core/models/establishment.model';
import { IEstablishmentService } from 'src/app/core/interfaces/services/establishment.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EstablishmentService implements IEstablishmentService  {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Establishment[]> {
    return this.httpClient.get<Establishment[]>('/establishments');
  }

  create(establishment: Establishment): Observable<string> {
    throw new Error('Method not implemented.');
  }
  update(establishment: Establishment): void {
    throw new Error('Method not implemented.');
  }
  delete(objectId: string): Observable<void> {
    throw new Error('Method not implemented.');
  }
}
