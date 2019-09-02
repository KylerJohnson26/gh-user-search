import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.scss']
})
export class GithubSearchComponent {

  @Output()
  querySubmitted: EventEmitter<string> = new EventEmitter();

  onClickHandler(query: string) {
    this.querySubmitted.emit(query);
  }

}
