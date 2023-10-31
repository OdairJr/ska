import { Injectable } from '@angular/core';
import { FireBaseService } from './firebase.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Establishment } from 'src/app/core/models/establishment.model';
import { IEstablishmentService } from 'src/app/core/interfaces/services/establishment.interface';

@Injectable({
  providedIn: 'root',
})
export class EstablishmentService extends FireBaseService<Establishment> implements IEstablishmentService  {
  constructor(private readonly firestore: AngularFirestore) {
    super(firestore, 'establishments');
  }
}
