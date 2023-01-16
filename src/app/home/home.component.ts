import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  urlIngredients = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
  populares = [];

  constructor(public http: HttpClient) {}

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
        console.log(data);
      });
  }
}
