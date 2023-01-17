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
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { CookieService } from 'ngx-cookie-service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { PlatillosDashboardComponent } from './platillos-dashboard/platillos-dashboard.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { MatSelectModule } from '@angular/material/select';
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
    LoginComponent,
    PlatillosDashboardComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([{ path: '', component: HomeComponent }]),
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatProgressBarModule,
    MatButtonModule,
    MatDividerModule,
    MatExpansionModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
  ],

  providers: [
    {
      provide: MatDialogRef,
      useValue: {},
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
