import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubUserCardComponent } from './github-user-card.component';

describe('ResultComponent', () => {
  let component: GithubUserCardComponent;
  let fixture: ComponentFixture<GithubUserCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubUserCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubUserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
