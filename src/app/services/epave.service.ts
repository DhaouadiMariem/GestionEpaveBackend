import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Epave } from 'app/Modele/EpaveModele';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpaveService {
  constructor(private http:HttpClient) { }

  apiUrl= 'http://localhost:9090/epave';
  epave:Epave;

  getAll() :Observable<any>{
    return this.http.get(`${this.apiUrl}/getallepave`);
  }

  add(epave:Epave) :Observable<any> {
    return this.http.post(`${this.apiUrl}/addepave`,epave) ;
  } 

  put(id:Number,epave:Epave):Observable<any>{
    return this.http.put(`${this.apiUrl}/updateepave/${id}`,epave) ;
  }

  getOne(id:Number):Observable<any>{
    return this.http.get(`${this.apiUrl}/getepave/${id}`) ;
  }

  delete(id:Number):Observable<any>{
    return this.http.delete(`${this.apiUrl}/deleteepave/${id}`);
  }



}
