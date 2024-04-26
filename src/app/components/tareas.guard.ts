import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { AuthService } from '../auth.service';

export const tareasGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);

  const router = inject(Router);
  if(authService.isAuth()){
    return true;
  }else{
    router.navigateByUrl('');
    return false
  }
};
