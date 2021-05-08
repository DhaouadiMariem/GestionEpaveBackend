import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Enchere } from 'app/Modele/enchereModele';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnchereService {
  constructor(private http:HttpClient) { }

  apiUrl= 'http://localhost:9090/enchere';
   enchere:Enchere;

  getAll() :Observable<any>{
    return this.http.get(`${this.apiUrl}/getallenchere`);
  }

  add(enchere:Enchere) :Observable<any> {
    return this.http.post(`${this.apiUrl}/addenchere`,enchere) ;
  } 

  put(id:Number,enchere:Enchere):Observable<any>{
    return this.http.put(`${this.apiUrl}/updateenchere/${id}`,enchere) ;
  }

  getOne(id:Number):Observable<any>{
    return this.http.get(`${this.apiUrl}/getenchere/${id}`) ;
  }

  delete(id:Number):Observable<any>{
    return this.http.delete(`${this.apiUrl}/deleteenchere/${id}`);
  }




}
