import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Epaviste } from 'app/Modele/EpavisteModele';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class  EpavisteService {

  constructor(private http:HttpClient) { }

  apiUrl= 'http://localhost:8080/epaviste';
   epaviste:Epaviste;
   
  getAll() :Observable<any>{
    return this.http.get(`${this.apiUrl}/getallepaviste`);
  }

  add(epaviste:Epaviste) :Observable<any> {
    return this.http.post(`${this.apiUrl}/addepaviste`,epaviste) ;
  } 

  put(id:Number,epaviste:Epaviste):Observable<any>{
    return this.http.put(`${this.apiUrl}/updateepaviste/${id}`,epaviste) ;
  }

  getOne(id:Number):Observable<any>{
    return this.http.get(`${this.apiUrl}/getepaviste/${id}`) ;
  }

  delete(id:Number):Observable<any>{
    return this.http.delete(`${this.apiUrl}/deleteepaviste/${id}`);
  }



}
