import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const noauthGuard: CanActivateFn = (route, state) => {

let router = inject(Router);
 if(!localStorage.getItem("applicationToken")){
  return true
 }
 router.navigate(['/home']);
  return false;

};
