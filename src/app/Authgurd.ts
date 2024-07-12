import { Injectable} from "@angular/core";
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree } from "@angular/router";
import { ApiService } from "./api.service";
import { Observable } from "rxjs";


@Injectable({
    providedIn:'root'
})

export class AuthGaurd implements CanActivate{
    constructor(private apiServices:ApiService){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const token=localStorage.getItem('currentUser');
        console.log(token)
        // localStorage.removeItem('currentUser')
        if(token!=undefined) return true;
        return false;
    }

}