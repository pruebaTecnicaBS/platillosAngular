import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-platillos-dashboard',
  templateUrl: './platillos-dashboard.component.html',
  styleUrls: ['./platillos-dashboard.component.css'],
})
export class PlatillosDashboardComponent implements OnInit {
  busqueda = 'Seafood';
  list = [];
  disableSelect = new FormControl(false);
  categories = [];
  areas = [];

  constructor(public http: HttpClient) {}

  ngOnInit(): void {
    let numRandom = Array.apply(null, { length: 10 }).map((x) =>
      Math.round(Math.random() * 100)
    );

    this.sendRequestList(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.busqueda}`,
      (data) => {
        this.list = data;
      }
    );
    this.sendRequestList(
      `https://www.themealdb.com/api/json/v1/1/list.php?c=list`,
      (data) => {
        this.categories = data;
      }
    );

    this.sendRequestList(
      `https://www.themealdb.com/api/json/v1/1/list.php?a=list`,
      (data) => {
        this.areas = data;
      }
    );
  }
  sendRequestList(url, callback): any {
    return new Promise((resolve, reject) => {
      this.http
        .get(url, {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type',
          },
        })
        .subscribe(
          (response) => {
            callback(response.meals);
          },
          (err) => {}
        );
    });
  }
  onSelectChange(req) {
    this.sendRequestList(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${req}`,
      (data) => {
        this.list = data;
        this.busqueda = req;
        document.querySelector('.filter .input-search').value = '';
      }
    );
  }
  onSelectChangeArea(req) {
    this.sendRequestList(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${req}`,
      (data) => {
        this.list = data;
        this.busqueda = req;
        document.querySelector('.filter .input-search').value = '';
      }
    );
  }
  searchByName() {
    let val = document.querySelector('.filter .input-search').value;
    if (val != '') {
      this.sendRequestList(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`,
        (data) => {
          this.list = data;
          this.busqueda = val;
        }
      );
    }
  }
}
