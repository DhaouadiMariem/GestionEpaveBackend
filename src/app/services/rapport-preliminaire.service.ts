import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { RapportPreliminaire } from 'app/Modele/RapportPreliminaireModele';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RapportPreliminaireService {
  constructor(private http:HttpClient) { }

  apiUrl= 'http://localhost:9090/rapportPreliminaire';
  rapportPreliminaire:RapportPreliminaire;

  getAll() :Observable<any>{
    return this.http.get(`${this.apiUrl}/getallrapportPreliminaire`);
  }

  add(rapportPreliminaire:RapportPreliminaire) :Observable<any> {
    return this.http.post(`${this.apiUrl}/addrapportPreliminaire`,rapportPreliminaire) ;
  } 

  put(id:Number,rapportPreliminaire:RapportPreliminaire):Observable<any>{
    return this.http.put(`${this.apiUrl}/updaterapportPreliminaire/${id}`,rapportPreliminaire) ;
  }

  getOne(id:Number):Observable<any>{
    return this.http.get(`${this.apiUrl}/getrapportPreliminaire/${id}`) ;
  }

  delete(id:Number):Observable<any>{
    return this.http.delete(`${this.apiUrl}/deleterapportPreliminaire/${id}`);
  }


}
