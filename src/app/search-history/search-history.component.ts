import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.scss']
})
export class SearchHistoryComponent implements OnInit {

  searchHistory = [
    'K', 'Ky', 'Kyl', 'Kyle', 'Kyler'
  ];

  constructor() { }

  ngOnInit() {
  }

}
