import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { take, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(
    private afService: AngularFireAuth,
    private router: Router
  ) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.afService.authState.pipe(
      take(1),
      map(state => !!state),
      tap(authenticated => {
        if (!authenticated) {
          this.router.navigate(['/']);
        } else {
          this.router.navigate(['/search/home']);
        }
      })
    );
  }
}
