import { Component } from '@angular/core';
import { ServizioCarteService } from '../../../service/servizio-carte.service';

@Component({
  selector: 'app-carrello',
  standalone: true,
  imports: [],
  templateUrl: './carrello.component.html',
  styleUrl: './carrello.component.css'
})
export class CarrelloComponent {

  constructor(public carteService : ServizioCarteService){}
  
  carte : any= []
  
  ngOnInit(): any {
      this.carte = this.carteService.carte;
    }
}
