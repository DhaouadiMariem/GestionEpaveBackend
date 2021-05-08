import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Offre } from 'app/Modele/OffreModele';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffreService {
  constructor(private http:HttpClient) { }

  apiUrl= 'http://localhost:9090/offre';
  offre:Offre;

  getAll() :Observable<any>{
    return this.http.get(`${this.apiUrl}/getalloffre`);
  }

  add(offre:Offre) :Observable<any> {
    return this.http.post(`${this.apiUrl}/addoffre`,offre) ;
  } 

  put(id:Number,offre:Offre):Observable<any>{
    return this.http.put(`${this.apiUrl}/updateoffre/${id}`,offre) ;
  }

  getOne(id:Number):Observable<any>{
    return this.http.get(`${this.apiUrl}/getoffre/${id}`) ;
  }

  delete(id:Number):Observable<any>{
    return this.http.delete(`${this.apiUrl}/deleteoffre/${id}`);
  }



}
