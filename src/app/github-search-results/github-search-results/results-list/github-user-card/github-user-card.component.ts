import { Component, OnInit, Input } from '@angular/core';
import { GithubUser } from '../../github-user';

@Component({
  selector: 'app-github-user-card',
  templateUrl: './github-user-card.component.html',
  styleUrls: ['./github-user-card.component.scss']
})
export class GithubUserCardComponent {

  @Input()
  githubUser: GithubUser;

}
