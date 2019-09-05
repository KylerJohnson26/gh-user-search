import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.scss']
})
export class GithubSearchComponent {

  constructor(
    private router: Router
  ) {}

  searchQuery: '';

  handleOnKeyupEnter() {
    this.router.navigate(['/users', this.searchQuery]);
  }

}
