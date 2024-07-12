import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  name: string = "";
  phoneNumber: string = "";
  password: string = "";

  constructor(private http: HttpClient,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const userData = {
      name: this.name,
      phone_number: this.phoneNumber,
      password: this.password
    };
  console.log("this is my user data")
  console.log(userData)
    this.http.post('https://test-3f33f2087-pytho-4006aac8e-1718686080-urtjok3rza-wl.a.run.app/register', userData)
      .subscribe(response => {
        console.log(response);
        this.router.navigate(["/login"])
        
        // Handle successful response
      }, error => {
        console.error(error);
        // Handle error response
      });
  }
}