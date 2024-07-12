import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  phoneNumber: string = "";
  password: string = "";

  constructor(private router:Router,private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const payload = {
      phone_number: this.phoneNumber,
      password: this.password
    };
    // console.log("this is login details :")
    // console.log(payload);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
   
    this.http.post('https://test-3f33f2087-pytho-4006aac8e-1718686080-urtjok3rza-wl.a.run.app/login', payload, { headers: headers })
      .subscribe((response:any) => {
        console.log("this is resp:",response);
       
        localStorage.setItem('currentUser', response.data);
        console.log(localStorage.getItem('currentUser'));
        this.router.navigate(['/dashboard'])
      });
  }
}