import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private router:Router) { 
   this.movie_data=this.router.getCurrentNavigation()?.extras.queryParams
    
  }
  
  movie_data:any
  ngOnInit(): void {
  }
 
  handle()
  {
    // localStorage.setItem('movieName',this.movie_data.details.name);
    this.router.navigate(['/payment'],{queryParams:{name:this.movie_data.details.name}}); 
  }
}
