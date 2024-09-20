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
imgCarrello: string = 'assets/immaginiCarrello/carrelloVuoto.jpg';
carte : any= []

constructor(public carteService : ServizioCarteService){}
  

ngOnInit(): any {
    this.carte = this.carteService.carte;
}

refLinkFunction(){
  this.switchEcommerce = 'visibili' ;
};

aggiungiAlCarrello (){
        this.imgCarrello = 'assets/immaginiCarrello/carrello.jpg';
  };



}
