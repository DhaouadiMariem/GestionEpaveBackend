import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicule } from 'app/Modele/VehiculeModele';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {
  constructor(private http:HttpClient) { }

  apiUrl= 'http://localhost:9090/vehicule';
  vehicule:Vehicule;

  getAll() :Observable<any>{
    return this.http.get(`${this.apiUrl}/getallvehicule`);
  }

  add(vehicule:Vehicule) :Observable<any> {
    return this.http.post(`${this.apiUrl}/addvehicule`,vehicule) ;
  } 

  put(id:Number,vehicule:Vehicule):Observable<any>{
    return this.http.put(`${this.apiUrl}/updatevehicule/${id}`,vehicule) ;
  }

  getOne(id:Number):Observable<any>{
    return this.http.get(`${this.apiUrl}/getvehicule/${id}`) ;
  }

  delete(id:Number):Observable<any>{
    return this.http.delete(`${this.apiUrl}/deletevehicule/${id}`);
  }



  

}
