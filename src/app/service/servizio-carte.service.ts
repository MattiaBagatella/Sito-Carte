import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServizioCarteService {

  carte = [
    {img:'https://www.cardtrader.com/uploads/blueprints/image/82767/show_galaxy-eyes-photon-dragon-collector-s-tins-2011.jpg',nome: 'Drago Fotonico Occhi Galattici',prezzo: '10'},
    {img:'https://www.cardtrader.com/uploads/blueprints/image/265823/show_galaxy-eyes-afterglow-dragon-secret-rare-25th-anniversary-rarity-collection.jpg',nome: 'Drago Riverbero Occhi Galattici',prezzo: '2'},
    {img:'https://www.cardtrader.com/uploads/blueprints/image/81646/show_galaxy-eyes-cloudragon-world-superstars.jpg',nome: 'Drago Nuvola Occhi Galattici',prezzo: '1'},
    {img:'https://www.cardtrader.com/uploads/blueprints/image/63529/show_neo-galaxy-eyes-photon-dragon-ghost-rare-galactic-overlord.jpg',nome: 'Drago Fotonico Occhi Galattici',prezzo: '70'},
    {img:'https://www.cardtrader.com/uploads/blueprints/image/68750/show_galaxy-eyes-solflare-dragon-2019-gold-sarcophagus-tin-mega-pack.jpg',nome: 'Drago Vampatasolare Occhi Galattici',prezzo: '7'},
    {img:'https://www.cardtrader.com/uploads/blueprints/image/265845/show_galaxy-eyes-full-armor-photon-dragon-secret-rare-25th-anniversary-rarity-collection.jpg',nome: 'Drago Armatura Occhi Galattici',prezzo: '1'},
    {img:'https://www.cardtrader.com/uploads/blueprints/image/82767/show_galaxy-eyes-photon-dragon-collector-s-tins-2011.jpg',nome: 'Drago Fotonico Occhi Galattici',prezzo: '10'},
    {img:'https://www.cardtrader.com/uploads/blueprints/image/63529/show_neo-galaxy-eyes-photon-dragon-ghost-rare-galactic-overlord.jpg',nome: 'Neo Drago Fotonico Occhi Galattici',prezzo: '40'},
    {img:'https://www.cardtrader.com/uploads/blueprints/image/63530/show_neo-galaxy-eyes-photon-dragon-galactic-overlord-63530.jpg',nome: 'Neo Drago Fotonico Occhi Galattici',prezzo: '10'}
  ]
  

  constructor(){}

}
