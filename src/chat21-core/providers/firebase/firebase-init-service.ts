import { Injectable } from '@angular/core';
// firebase
import * as firebase from 'firebase/app';
import 'firebase/app';
/*
  Generated class for the AuthService provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
/**
 * DESC PROVIDER
 */
export class FirebaseInitService {

  public static firebaseInit: any;
  
  constructor() {
  }

  public static initFirebase(firebaseConfig: any) {
    console.log('initfirebase', FirebaseInitService.firebaseInit)
    if(!FirebaseInitService.firebaseInit){
        if (!firebaseConfig || firebaseConfig.apiKey === 'CHANGEIT') {
            throw new Error('firebase config is not defined. Please create your chat-config.json. See the Chat21-Web_widget Installation Page');
          } 
          FirebaseInitService.firebaseInit = firebase.initializeApp(firebaseConfig); 
    }
    return FirebaseInitService.firebaseInit
  }
}