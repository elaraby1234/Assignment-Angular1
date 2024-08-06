import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  ishiden:boolean=true;
  modelimg:string="";
  imgs:string[]=[
    './assets/imgs/imads mealify1 (2).png',
    './assets/imgs/imads mealify2 (1).png',
    './assets/imgs/imads mealify3 (1).png',
    './assets/imgs/imads mealify1 (2).png',
    './assets/imgs/imads mealify2 (1).png',
    './assets/imgs/imads mealify3 (1).png',
  ]
}
