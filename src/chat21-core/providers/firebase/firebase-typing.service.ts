import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// firebase
import * as firebase from 'firebase/app';
import 'firebase/messaging';
import 'firebase/database';

// services
import { TypingService } from '../abstract/typing.service';
import { CustomLogger } from '../logger/customLogger';

export class TypingModel {
  constructor(
      public uid: string,
      public timestamp: any,
      public message: string,
      public name: string
  ) { }
}

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class FirebaseTypingService extends TypingService {

  // BehaviorSubject
  BSIsTyping: BehaviorSubject<any>;
  BSSetTyping: BehaviorSubject<any>;

  // public params
  public tenant: string;

  // private params
  private urlNodeTypings: string;
  private setTimeoutWritingMessages: any;
  private logger: CustomLogger= new CustomLogger(true);

  constructor() {
    super();
  }

  /** */
  public initialize() {
    this.urlNodeTypings = '/apps/' + this.tenant + '/typings/';
  }

  /** */
  public isTyping(idConversation: string, idCurrentUser: string, isDirect: boolean ) {
    const that = this;
    let urlTyping = this.urlNodeTypings + idConversation;
    if (isDirect) {
      urlTyping = this.urlNodeTypings + idCurrentUser + '/' + idConversation;
    }
    this.logger.printDebug('urlTyping: ', urlTyping);
    const ref = firebase.database().ref(urlTyping);
    ref.on('child_changed', (childSnapshot) => {
      const precence: TypingModel = childSnapshot.val();
      this.BSIsTyping.next({uid: idConversation, uidUserTypingNow: precence.uid, nameUserTypingNow: precence.name});
    });
  }

  /** */
  public setTyping(idConversation: string, message: string, recipientId: string, userFullname: string) {
    const that = this;
    clearTimeout(this.setTimeoutWritingMessages);
    this.setTimeoutWritingMessages = setTimeout(() => {
      const urlTyping = this.urlNodeTypings + idConversation + '/' + recipientId;// + '/user';
      this.logger.printDebug('setWritingMessages:', urlTyping, userFullname);
      const timestampData =  firebase.database.ServerValue.TIMESTAMP;
      const precence = new TypingModel(recipientId, timestampData, message, userFullname);
      firebase.database().ref(urlTyping).set(precence, ( error ) => {
        if (error) {
          this.logger.printError('ERRORE', error);
        } else {
          this.BSSetTyping.next({uid: idConversation, typing: precence});
        }
      });
    }, 500);
  }

}
