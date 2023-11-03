import { Inject, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { BaseModel } from '../models/base.model';
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FireBaseService<T extends BaseModel> {

  constructor(private _firestore: AngularFirestore,
     @Inject(String) private _collectionName: string,

     ) { }

  public getAll(): Observable<T[]> {
    return this._firestore.collection<T>(this._collectionName).snapshotChanges()
      .pipe(map((response) => {
        return response.reduce<Array<T>>((previous, current) => {
          previous.push({
            id: current.payload.doc.id,
            ...current.payload.doc.data()
          });
          return previous;
        }, []);
      }));
  }

  create(object: T): Observable<string> {
    const promise = this._firestore.collection<T>(this._collectionName).add(object);
    return from(promise).pipe(map((response) => response.id));
  }

  update(object: T) {
    delete object.id;
    this._firestore.doc(`${this._collectionName}/${object.id}`).update(object);
  }

  delete(objectId: string): Observable<void> {
    return from(this._firestore.doc(`${this._collectionName}/${objectId}`).delete());
  }


}
