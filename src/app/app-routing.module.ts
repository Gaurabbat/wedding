import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {CardsComponent} from './components/cards/cards.component';
import {StorytellerComponent} from './components/storyteller/storyteller.component';


const routes: Routes = [
  {  
    path: '',  
    component: DashboardComponent  
  },
  {
    path: 'cards/digital',
    component: CardsComponent
  },
  {
    path: 'cards/all',
    component: CardsComponent
  },
  {
    path: 'cards/digital/storyteller',
    component: StorytellerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
