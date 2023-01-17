import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  urlIngredients = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
  populares = [];
  carrousel = [];
  modal = {};
  image = '/assets/images/1.jpg';

  constructor(
    public http: HttpClient,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    let ingrediPopulares = Array.apply(null, { length: 10 }).map((x) =>
      Math.round(Math.random() * 100)
    );
    this.http
      .get(this.urlIngredients, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      })
      .subscribe((data) => {
        this.populares = ingrediPopulares.map(function (item, index) {
          return data.meals[item];
        });
      });

    for (let i = 0; i < 5; i++) {
      this.http
        .get(`https://www.themealdb.com/api/json/v1/1/random.php`, {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type',
          },
        })
        .subscribe((data) => {
          this.carrousel.push({
            name: data.meals[0].strMeal,
            img: data.meals[0].strMealThumb,
            id: data.meals[0].idMeal,
          });
        });
    }

    this.http
      .get(`https://www.themealdb.com/api/json/v1/1/random.php`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      })
      .subscribe((data) => {
        this.dialog.open(DialogComponent, {
          data: {
            name: data.meals[0].strMeal,
            img: data.meals[0].strMealThumb,
            id: data.meals[0].idMeal,
          },
        });
      });
  }
}
