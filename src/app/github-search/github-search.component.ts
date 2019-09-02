import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.scss']
})
export class GithubSearchComponent {

  @Output()
  queryChanged: EventEmitter<string> = new EventEmitter();

  onChangeHandler(query: string) {
    this.queryChanged.emit(query);
  }

}
