import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-full-meal',
  templateUrl: './full-meal.component.html',
  styleUrls: ['./full-meal.component.css'],
})
export class FullMealComponent implements OnInit {
  //@Input() dataEntrante: any;
  img: string;
  strMeal: string;
  strArea: string;
  safeURL: string;
  constructor(private route: ActivatedRoute, public http: HttpClient) {}

  ngOnInit(): void {
    let modal = document.querySelector('.close-btn');
    if (modal != null) {
      modal.click();
    }

    this.route.paramMap.subscribe((paramMap: any) => {
      const { params } = paramMap;
      this.setData(params.id);
    });
  }

  setData(id: string) {
    let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    this.http
      .get(url, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      })
      .subscribe((data) => {
        this.strMeal = data.meals[0].strMeal;
        this.img = data.meals[0].strMealThumb;
        this.strArea = data.meals[0].strArea;
        //this.video = data.meals[0].strYoutube;
      });
  }
}
