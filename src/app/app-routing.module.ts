import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListIngredientComponent } from './list-ingredient/list-ingredient.component';
import { HomeComponent } from './home/home.component';
import { FullMealComponent } from './full-meal/full-meal.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'listByIngredient/:name',
    component: ListIngredientComponent,
  },
  {
    path: 'fullMeal/:id',
    component: FullMealComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
