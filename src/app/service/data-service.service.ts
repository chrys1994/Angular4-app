import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataServiceService {

  constructor(public http:Http) {
    console.log("data Service connected...");
   }

   getPosts(){
     //servizio che restituisce un Json
     return this.http.get('https://jsonplaceholder.typicode.com/posts')
     .map(res => res.json());
   }
   
}
