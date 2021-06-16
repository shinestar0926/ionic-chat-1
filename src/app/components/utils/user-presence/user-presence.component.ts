import { Component, OnInit, OnDestroy, Input } from '@angular/core';

// services
import { PresenceService } from 'src/chat21-core/providers/abstract/presence.service';

// utils
import { isInArray, setLastDateWithLabels } from 'src/chat21-core/utils/utils';

@Component({
  selector: 'app-user-presence',
  templateUrl: './user-presence.component.html',
  styleUrls: ['./user-presence.component.scss'],
})

export class UserPresenceComponent implements OnInit, OnDestroy {
  @Input() idUser: string;
  @Input() translationMap: Map<string, string>;
  @Input() fontColor: string;
  @Input() borderColor: string;


  public online = true;
  public status = '';
  private lastConnectionDate: string;
  private subscriptions = [];

  constructor(
    public presenceService: PresenceService
  ) { }

  ngOnInit() {
    console.log('UserPresenceComponent - ngOnInit');
    this.initialize();
  }


  /** */
  ngOnDestroy() {
    console.log('UserPresenceComponent - ngOnDestroy');
    this.unsubescribeAll();
  }

  /** */
  initialize() {
    this.status = this.translationMap.get('LABEL_ACTIVE_NOW');
    console.log('this.translationMap', this.translationMap);
    console.log('this.status', this.status);
    console.log('idUser ->', this.idUser);
    this.setSubscriptions();
  }



  /** */
  private setSubscriptions() {
    this.presenceService.userIsOnline(this.idUser);
    this.presenceService.lastOnlineForUser(this.idUser);
    let subscribtionKey = '';
    let subscribtion: any;

    const that = this;

    subscribtionKey = 'BSIsOnline';
    subscribtion = this.subscriptions.find(item => item.key === subscribtionKey);
    if (!subscribtion) {
      subscribtion =  this.presenceService.BSIsOnline.subscribe((data: any) => {
        console.log('***** BSIsOnline *****', data);
        if (data) {
          const userId = data.uid;
          const isOnline = data.isOnline;
          if (this.idUser === userId) {
            that.userIsOnLine(userId, isOnline);
          }
        }
      });
      const subscribe = {key: subscribtionKey, value: subscribtion };
      this.subscriptions.push(subscribe);
    }


    subscribtionKey = 'BSLastOnline';
    subscribtion = this.subscriptions.find(item => item.key === subscribtionKey);
    if (!subscribtion) {
      subscribtion =  this.presenceService.BSLastOnline.subscribe((data: any) => {
        console.log('***** BSLastOnline *****', data);
        if (data) {
          const userId = data.uid;
          const timestamp = data.lastOnline;
          if (this.idUser === userId) {
            that.userLastConnection(userId, timestamp);
          }
        }
      });
      const subscribe = {key: subscribtionKey, value: subscribtion };
      this.subscriptions.push(subscribe);
    }


    // keySubscription = 'is-online-' + this.idUser;
    // if (!isInArray(keySubscription, this.subscriptions)) {
    //   this.subscriptions.push(keySubscription);
    //   this.events.subscribe(keySubscription, this.userIsOnLine);
    // }
    // keySubscription = 'last-connection-date-' + this.idUser;
    // if (!isInArray(keySubscription, this.subscriptions)) {
    //   this.subscriptions.push(keySubscription);
    //   this.events.subscribe(keySubscription, this.userLastConnection);
    // }
  }

  /**
   *
   */
  userIsOnLine = (userId: string, isOnline: boolean) => {
    console.log('************** userIsOnLine', userId, isOnline);
    this.online = isOnline;
    if (isOnline) {
      this.status = this.translationMap.get('LABEL_ACTIVE_NOW');
    } else {
      this.status = this.translationMap.get('LABEL_NOT_AVAILABLE');
      if (this.lastConnectionDate && this.lastConnectionDate.trim() !== '') {
        this.status = this.lastConnectionDate;
      }
    }
  }

  /**
   *
   */
  userLastConnection = (userId: string, timestamp: string) => {
    console.log('************** userLastConnection', userId, timestamp);
    if (timestamp && timestamp !== '') {
      const lastConnectionDate = setLastDateWithLabels(this.translationMap, timestamp);
      console.log('************** lastConnectionDate', lastConnectionDate);
      this.lastConnectionDate = lastConnectionDate;
      if (this.online === false ) {
        this.status = this.lastConnectionDate;
      }
    }
  }


  /** */
  private unsubescribeAll() {
    console.log('unsubescribeAll: ', this.subscriptions);
    this.subscriptions.forEach(subscription => {
      subscription.value.unsubscribe(); // vedere come fare l'unsubscribe!!!!
    });
    this.subscriptions = [];
  }

}
