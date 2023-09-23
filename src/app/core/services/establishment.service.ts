import { Injectable } from '@angular/core';
import { FireBaseService } from './firebase.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Establishment } from '../models/establishment.model';

@Injectable({
  providedIn: 'root',
})
export class EstablishmentService extends FireBaseService<Establishment> {
  constructor(private readonly firestore: AngularFirestore) {
    super(firestore, 'establishments');
  }
}
