import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gh-search',
  templateUrl: './gh-search.component.html',
  styleUrls: ['./gh-search.component.scss']
})
export class GhSearchComponent {

  @Output()
  queryChanged: EventEmitter<string> = new EventEmitter();

  onChangeHandler(query: string) {
    this.queryChanged.emit(query);
  }

}
