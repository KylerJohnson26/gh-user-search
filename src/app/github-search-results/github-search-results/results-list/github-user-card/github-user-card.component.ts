import { Component, OnInit, Input } from '@angular/core';
import { GithubUser } from '../../github-user';

@Component({
  selector: 'app-github-user-card',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class GithubUserCardComponent {

  @Input()
  githubUser: GithubUser;

}
