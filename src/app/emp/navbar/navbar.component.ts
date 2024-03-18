import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isSlideOut = true;
  constructor(private router: Router){};

  toggleSlideOut(): void{
    this.isSlideOut =!this.isSlideOut;
    console.log('Slide-out status:', this.isSlideOut);
  }

  dash(){
    this.router.navigate(['/emp/dashboard']);
  }

  log(){
    this.router.navigate(['/emp/entry'])
  }

}
