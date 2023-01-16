import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-list-ingredient',
  templateUrl: './list-ingredient.component.html',
  styleUrls: ['./list-ingredient.component.css'],
})
export class ListIngredientComponent implements OnInit {
  list: any = [];
  ingredient = '';
  constructor(private route: ActivatedRoute, public http: HttpClient) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: any) => {
      const { params } = paramMap;
      this.http
        .get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${params.name}`,
          {
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Content-Type',
            },
          }
        )
        .subscribe((data) => {
          this.ingredient = params.name;
          //console.log(data);
          this.list = data.meals;
        });
    });
  }
}
