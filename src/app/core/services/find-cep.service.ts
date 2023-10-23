import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FindCEPService {
  public apiUrlCep = `${environment.buscaCepUrl}/ws`;
  constructor(private http: HttpClient) { }

  public getCep(cep: string): Observable<any> {
    return this.http.get(`${this.apiUrlCep}/${cep}/json`);
  }
}
