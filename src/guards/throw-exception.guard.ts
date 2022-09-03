import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { GuardException } from '../exceptions/guard.exception';

@Injectable()
export class ThrowExceptionGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    throw new GuardException('guard exception');
    return true;
  }
}
