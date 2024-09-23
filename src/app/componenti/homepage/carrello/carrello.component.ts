import { Component } from '@angular/core';
import { ServizioCarteService } from '../../../service/servizio-carte.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-carrello',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './carrello.component.html',
  styleUrl: './carrello.component.css'
})
export class CarrelloComponent {

  constructor(public carteService : ServizioCarteService){}

  cardsCase : any= document.getElementById('cardsCase');
  cards : any= [];
  displayNone : string ='block';
  displayNoneCard : string = 'block';
  cartaCliccata : number = 0;
  cartaEliminata : string = '';
  
  
  ngOnInit(): any {
      this.cards = this.carteService.carte;
    }

    deleteCards(){
      this.displayNone = 'none';
  }
eliminaCard(indexCarta: number) {
  this.cards.splice(indexCarta, 1);
  if (this.cards.length === 0) {
    this.displayNoneCard = 'none';
  }
}

}
