import { Component, OnInit, SimpleChanges} from '@angular/core';
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
imgCarrello: string = 'assets/immaginiCarrello/carrelloVuoto.jpg';
carte : any= []
cambioDimensione : number = 768;
dimensioneSchermo : any = window.screen.width;
maxAltezzaCard : string = '1000px';


constructor(public carteService : ServizioCarteService){}


ngOnInit(): any {
  this.carte = this.carteService.carte;
  if(this.dimensioneSchermo > this.cambioDimensione){
    this.maxAltezzaCard = '270px';
  }
}

aggiungiAlCarrello (){
        this.imgCarrello = 'assets/immaginiCarrello/carrello.jpg';
  };

}
