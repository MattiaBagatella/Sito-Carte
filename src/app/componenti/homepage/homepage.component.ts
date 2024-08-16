import { Component, OnInit} from '@angular/core';
import { ServizioCarteService } from '../../service/servizio-carte.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit{
  switchEcommerce = 'nascosti';
  dispCM : any= document.getElementById('cardmarket');
  dispVI : any= document.getElementById('vinted');
 refLinkFunction(){
    this.switchEcommerce = 'visibili' ;
};

cartImg : any= document.getElementById ('imgCarrello');

carrelloOn (){
  if (this.cartImg.src.match){
      this.cartImg.src = 'assets/immaginiCarrello/carrello.jpg';
  }
  else{
      this.cartImg.src = 'assets/immaginiCarrello/carrelloVuoto.jpg';
  }
};
  

constructor(public carteService : ServizioCarteService){}
  
carte : any= []

ngOnInit(): any {
    this.carte = this.carteService.carte;
  }



}
