import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {
readonly ROOT_URL
  constructor(private http:HttpClient) {
    this.ROOT_URL='http://localhost:8080'
  }
  post(url:string, valeur:object){
 return this.http.post(this.ROOT_URL+'/'+url,valeur)
  }
  get(url:string, valeur:object){
    return this.http.post(this.ROOT_URL+'/'+url,valeur)
     }
  avoir(url:string){
      return this.http.get(this.ROOT_URL+'/'+url)
       }
}
