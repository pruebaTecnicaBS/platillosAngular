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
  public image: string;
  data: any;
  constructor(private route: ActivatedRoute, public http: HttpClient) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: any) => {
      const { params } = paramMap;
      this.http
        .get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`,
          {
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Content-Type',
            },
          }
        )
        .subscribe((data) => {
          this.data = data;
          console.log(data);
        });
    });
  }
}
