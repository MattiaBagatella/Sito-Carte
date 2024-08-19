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
  carte : any= []
  displayNone : string ='block'
  
  ngOnInit(): any {
      this.carte = this.carteService.carte;
    }

    deleteCards(){
      this.displayNone = 'none';
  }
  

}
