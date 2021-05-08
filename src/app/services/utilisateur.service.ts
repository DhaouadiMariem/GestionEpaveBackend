import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utilisateur } from 'app/Modele/UtilisateurModele';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient) { }

  apiUrl='';
  utilisateur: Utilisateur;
  
  getAll() :Observable<any>{
    return this.http.get(`${this.apiUrl}/getalluser`);
  }

  add(utilisateur:Utilisateur) :Observable<any> {
    return this.http.post(`${this.apiUrl}/adduser`,utilisateur) ;
  } 

  put(id:Number,utilisateur:Utilisateur):Observable<any>{
    return this.http.put(`${this.apiUrl}/updateuser/${id}`,utilisateur) ;
  }

  getOne(id:Number):Observable<any>{
    return this.http.get(`${this.apiUrl}/getuser/${id}`) ;
  }

  delete(id:Number):Observable<any>{
    return this.http.delete(`${this.apiUrl}/deleteuser/${id}`);
  }
}
