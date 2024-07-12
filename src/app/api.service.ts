import { HttpClient, HttpHeaders } from '@angular/common/http';

// eslint-disable-next-line sort-imports
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn:'root'})
export class ApiService {

  constructor(private http: HttpClient) {
  }

   fetchMovies(){
    const data=this.http.get('https://test-3f33f2087-pytho-4006aac8e-1718686080-urtjok3rza-wl.a.run.app/dashboard');
    console.log(data)
    return data;
   }

   confirmBooking(){
    
    const data=this.http.post('https://test-3f33f2087-pytho-4006aac8e-1718686080-urtjok3rza-wl.a.run.app/book',{
    user:"1",
    theater:"1",
    booked_seats:['C1','B4']
   });
   console.log(data);
   return data;
   }  

}
