import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rapport } from 'app/Modele/RapportModele';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RapportService {
  constructor(private http:HttpClient) { }

  apiUrl= 'http://localhost:9090/rapport';
  rapport:Rapport;

  getAll() :Observable<any>{
    return this.http.get(`${this.apiUrl}/getallrapport`);
  }

  add(rapport:Rapport) :Observable<any> {
    return this.http.post(`${this.apiUrl}/addrapport`,rapport) ;
  } 

  put(id:Number,rapport:Rapport):Observable<any>{
    return this.http.put(`${this.apiUrl}/updaterapport/${id}`,rapport) ;
  }

  getOne(id:Number):Observable<any>{
    return this.http.get(`${this.apiUrl}/getrapport/${id}`) ;
  }

  delete(id:Number):Observable<any>{
    return this.http.delete(`${this.apiUrl}/deleterapport/${id}`);
  }
}
