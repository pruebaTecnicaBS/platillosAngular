import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-card-ingre',
  templateUrl: './card-ingre.component.html',
  styleUrls: ['./card-ingre.component.css'],
})
export class CardIngreComponent implements OnInit {
  @Input() dataEntrante: any;
  public image: string;
  data: any;
  constructor(private route: ActivatedRoute, public http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.dataEntrante.idMeal}`,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type',
          },
        }
      )
      .subscribe((data) => {});
  }
}
