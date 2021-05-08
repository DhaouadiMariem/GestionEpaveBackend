import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gestionnaire } from 'app/Modele/GestionnaireModele';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class GestionnaireService {

  constructor(private http: HttpClient) { }

  apiUrl= 'http://localhost:8080/gestionnaire';
  gestionnaire: Gestionnaire;
  
  getAll() :Observable<any>{
    return this.http.get(`${this.apiUrl}/getallgestionnaire`);
  }

  add(gestionnaire:Gestionnaire) :Observable<any> {
    return this.http.post(`${this.apiUrl}/addgestionnaire`,gestionnaire) ;
  } 

  put(id:Number,gestionnaire:Gestionnaire):Observable<any>{
    return this.http.put(`${this.apiUrl}/updategestionnaire/${id}`,gestionnaire) ;
  }

  getOne(id:Number):Observable<any>{
    return this.http.get(`${this.apiUrl}/getgestionnaire/${id}`) ;
  }

  delete(id:Number):Observable<any>{
    return this.http.delete(`${this.apiUrl}/deletegestionnaire/${id}`);
  }
}
