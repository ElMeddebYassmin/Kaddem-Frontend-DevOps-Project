import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Claim} from '../../models/Claim';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  claims:Claim[]=[];
  //urlApi=environment.baseUrl+'/Claim';

  constructor(private httpClient:HttpClient) { }

  /********************************Get Claims************************************/
  getAllClaims(): Observable<Claim[]>{

    return this.httpClient.get<Claim[]>('/getAllClaims')
  }

}
