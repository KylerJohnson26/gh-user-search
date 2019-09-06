import { Component, OnInit, Input } from '@angular/core';
import { GithubUser } from '../github-user';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss']
})
export class ResultsListComponent implements OnInit {

  @Input()
  githubUsers: GithubUser[];

  constructor() { }

  ngOnInit() {
  }

}
