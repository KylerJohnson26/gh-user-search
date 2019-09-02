import { Component, OnInit, Input } from '@angular/core';
import { GithubUser } from '../../github-user';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  @Input()
  githubUser: GithubUser;

  constructor() { }

  ngOnInit() {
  }

}
