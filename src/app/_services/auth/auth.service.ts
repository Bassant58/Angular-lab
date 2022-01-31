import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { person } from 'src/app/_models/login';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  login(body:object):  Observable<{person: person , token: string}>{
    
   return this.httpClient.post<{person: person , token: string}>(`${environment.baseUrl}user/login` , body )
  }

  // login():  Observable<{person: person , token: string}>{
  //   const body = {
  //     email: "teesthamaada@hamada.com",
  //     password: '12345678'
  //   }
  //  return this.httpClient.post<{person: person , token: string}>(`${environment.baseUrl}user/login` , body )
  // }

  // login():  Observable<{
  //   person: {
  //     _id:string;
  //     email: string;
  //     password:string;
  //     __v: 0 ;
  //     id:string;
  //   }; 
  //   token: string ;
  // }>{
  //   const body = {
  //     email: 'teesthamaada@hamada.com',
  //     password: '12345678'
  //   }
  //  return this.httpClient.post<{
  //   person: {
  //     _id:string;
  //     email: string;
  //     password:string;
  //     __v: 0 ;
  //     id:string;
  //   }; 
  //   token: string ;
  // }>(environment.baseUrl+'user/login' , body )
  // }
}
