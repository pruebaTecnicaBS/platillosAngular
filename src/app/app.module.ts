import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipieDetailComponent } from './recipie-detail/recipie-detail.component';
import { ListIngredientComponent } from './list-ingredient/list-ingredient.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardIngreComponent } from './card-ingre/card-ingre.component';
import { FullMealComponent } from './full-meal/full-meal.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    CardComponent,
    RecipieDetailComponent,
    ListIngredientComponent,
    HomeComponent,
    CardIngreComponent,
    FullMealComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
