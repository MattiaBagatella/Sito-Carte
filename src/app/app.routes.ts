import { Routes } from '@angular/router';
import { HomepageComponent } from './componenti/homepage/homepage.component';
import { CarrelloComponent } from './componenti/homepage/carrello/carrello.component';

export const routes: Routes = [
    {path: '',component: HomepageComponent },
    {path: 'carrello',component: CarrelloComponent},
];
