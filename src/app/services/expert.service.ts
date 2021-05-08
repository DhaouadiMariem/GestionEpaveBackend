import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Expert } from 'app/Modele/ExpertModele';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpertService {

  constructor(private http:HttpClient) { }

  apiUrl= 'http://localhost:9090/expert';
  expert:Expert;

  getAll() :Observable<any>{
    return this.http.get(`${this.apiUrl}/getallexpert`);
  }

  add(expert:Expert) :Observable<any> {
    return this.http.post(`${this.apiUrl}/addexpert`,expert) ;
  } 

  put(id:Number,expert:Expert):Observable<any>{
    return this.http.put(`${this.apiUrl}/updateexpert/${id}`,expert) ;
  }

  getOne(id:Number):Observable<any>{
    return this.http.get(`${this.apiUrl}/getexpert/${id}`) ;
  }

  delete(id:Number):Observable<any>{
    return this.http.delete(`${this.apiUrl}/deleteexpert/${id}`);
  }





    

}
