import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  navpadding:boolean=true;
  @HostListener('window:scroll',['$event'])
  onscroll():void{
    const scrollposition=window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop||0; 
    if(scrollposition<=50){
      this.navpadding=true;
    }
    else{
      this.navpadding=false;
    }
  
  }
}
