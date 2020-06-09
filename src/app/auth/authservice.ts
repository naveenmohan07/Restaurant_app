import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { from } from 'rxjs';
interface Authresponse{
    kind:string;
    idToken:string;
    email:string;
    refreshToken:string;
    expiresIn:string;
    localId:string;
    customToken:string;
    registered?:boolean;
}

@Injectable({providedIn:'root'})
export class ItemlistService{
    constructor(private http:HttpClient){}
    signup(email:string,password:string){
       return this.http.post<Authresponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+environment.FirebaseAPIkey,{
            email:email,
            password:password,
            returnSecureToken:true
        }).pipe(catchError(this.handleError));
    }
    signin(email:string,password:string){
        return this.http.post<Authresponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+environment.FirebaseAPIkey,{
            email:email,
            password:password,
            returnSecureToken:true
        }).pipe(catchError(this.handleError));
    }
    reset(email:string){
        return this.http.post<Authresponse>('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key='+environment.FirebaseAPIkey,{
            email:email,
            requestType:"PASSWORD_RESET"
        }).pipe(catchError(this.handleError));
    }
    private handleError(errres :HttpErrorResponse){
        let errmsg="Unknown_Error";
        switch(errres.error.error.message){
            case 'EMAIL_EXISTS':
              errmsg='Mail already exist';
              break;
              case 'INVALID_PASSWORD' :
                errmsg='Wrong_Password Dude....!!!';
                break;
                case 'EMAIL_EXISTS':
                    errmsg='Wrong_MailId';
                    break;    
          }
          return throwError(errmsg);
    }
}