import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from 'app/Modele/ClientModele';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService  {

  constructor(private http:HttpClient) { }

  apiUrl= 'http://localhost:9090/client';
   client:Client;

  getAll() :Observable<any>{
    return this.http.get(`${this.apiUrl}/getallclient`);
  }

  add(client:Client) :Observable<any> {
    return this.http.post(`${this.apiUrl}/addclient`,client) ;
  } 

  put(id:Number,client:Client):Observable<any>{
    return this.http.put(`${this.apiUrl}/updateclient/${id}`,client) ;
  }

  getOne(id:Number):Observable<any>{
    return this.http.get(`${this.apiUrl}/getclient/${id}`) ;
  }

  delete(id:Number):Observable<any>{
    return this.http.delete(`${this.apiUrl}/deleteclient/${id}`);
  }





    

  

}
