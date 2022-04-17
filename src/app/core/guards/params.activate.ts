import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

export class ParamsActivate implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const { data: { paramsActivate }} = route;
        if(!paramsActivate || !Array.isArray(paramsActivate) ||paramsActivate.length === 0) { return true; };
        const hasAllRouteParams = paramsActivate.reduce((acc, paramName) => {
            return !!route.params[paramName] && acc;
        }, true)
        throw new Error('Not Implemented')
    }
}