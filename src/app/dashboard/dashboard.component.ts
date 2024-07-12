import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie';
import { Route, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  source:{[key:string]:string}=
  {
    "1":"../../assets/images/The Lost City.jpg",
    "2":"../../assets/images/The Lost City.jpg",
    "3":"../../assets/images/The Batman(2022).jpg",
    "4":"../../assets/images/Spiderman_ No Way Home.jpg",
    "5":"../../assets/images/Doctor strange in the multiverse of madness trailer.jpg",
     "6":"../../assets/images/The Northman.jpg",
    "7":"../../assets/images/Uncharted.jpg",
    "8":"../../assets/images/Sonic the Hedgehog 2.jpg",
    "9":"../../assets/images/The Lost City.jpg",
    "10":"../../assets/images/The Lost City.jpg"

  }
  movieCategories=new Set<string>();
  moviesDB:Movie[]=[];

  constructor(private router:Router,private apiService:ApiService) { }

  ngOnInit(): void {
     this.apiService.fetchMovies().subscribe((data:any)=>{   
     this.moviesDB =data["data"];
     console.log(this.moviesDB);
     for(let movie of this.moviesDB)
        {
          for(let category of movie.category){
             this.movieCategories.add(category);
          }
        }
     })
  }
  onBook(movie:any,image:any)
  {
         this.router.navigate(['/details'],{queryParams:{details:movie,url:image}});
  }
 
}
