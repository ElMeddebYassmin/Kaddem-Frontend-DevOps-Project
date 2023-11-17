import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Claim} from '../../models/Claim';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  constructor(private httpClient:HttpClient) { }
  private apiUrl = 'http://192.168.33.10:8089/Kaddem';

  /********************************Get Claims************************************/
  getAllClaims(): Observable<Claim[]>{

    return this.httpClient.get<Claim[]>(`${this.apiUrl}/departement/retrieve-all-departements`);
  }

}
