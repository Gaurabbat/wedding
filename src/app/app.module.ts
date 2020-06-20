import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CardsComponent } from './components/cards/cards.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { StorytellerComponent } from './components/storyteller/storyteller.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardsComponent,
    NavbarComponent,
    FooterComponent,
    StorytellerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
