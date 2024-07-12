import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ticketDetails } from 'src/ticketDetails';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.scss']
})
export class PaymentPageComponent implements OnInit {

  ticketDetails:ticketDetails={
    movieName:'',
    theaterName:'',
    noOfTickets:'',
    tickets:'',
    ticketPrice:'',
    totalPay:'',
    movieId:'',
  }

  constructor(private router:Router,private cinemaService:ApiService) {
    this.movie_data=this.router.getCurrentNavigation()?.extras.queryParams
    this.ticketDetails.movieName=this.movie_data.name;
   }
  movie_data:any;
  ngOnInit(): void {
    
  }
  handleBackClick:Function=()=>
  {
      window.history.back();
  }
    
  handleBuyTicket:Function=()=>
      {
          this.cinemaService.confirmBooking().subscribe((data:any)=>{
          if(data.data == 'ok')
            {
              this.router.navigate(['paymentSuccess']);
            }
        });
      } 
}
