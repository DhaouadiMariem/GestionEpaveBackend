import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Compte } from 'app/Modele/CompteModele';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(private http:HttpClient) { }

  apiUrl= 'http://localhost:9090/compte';
   compte:Compte;

  getAll() :Observable<any>{
    return this.http.get(`${this.apiUrl}/getallcompte`);
  }

  add(compte:Compte) :Observable<any> {
    return this.http.post(`${this.apiUrl}/addcompte`,compte) ;
  } 

  put(id:Number,compte:Compte):Observable<any>{
    return this.http.put(`${this.apiUrl}/updatecompte/${id}`,compte) ;
  }

  getOne(id:Number):Observable<any>{
    return this.http.get(`${this.apiUrl}/getcompte/${id}`) ;
  }

  delete(id:Number):Observable<any>{
    return this.http.delete(`${this.apiUrl}/deletecompte/${id}`);
  }



}
