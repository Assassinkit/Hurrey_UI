import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  showNextPageAfterLogo = false;


  constructor(private router: Router) { }

  ngOnInit (): void {
     //Using setTimeout to navigate to the next page after mentioned time
     setTimeout(() => {
      this.router.navigate(['/profile']);
    }, 5100)
  }
}
