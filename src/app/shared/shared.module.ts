import { BubbleOthersMessageComponent } from './../components/conversation-detail/bubble-others-message/bubble-others-message.component';

import { TextComponent } from './../temp/conversation-detail/message/text/text.component';
import { ReturnReceiptComponent } from './../temp/conversation-detail/message/return-receipt/return-receipt.component';
import { InfoMessageComponent } from './../temp/conversation-detail/message/info-message/info-message.component';
import { ImageComponent } from './../temp/conversation-detail/message/image/image.component';
import { FrameComponent } from './../temp/conversation-detail/message/frame/frame.component';
import { ActionButtonComponent } from './../temp/conversation-detail/message/buttons/action-button/action-button.component';
import { LinkButtonComponent } from './../temp/conversation-detail/message/buttons/link-button/link-button.component';
import { TextButtonComponent } from './../temp/conversation-detail/message/buttons/text-button/text-button.component';
import { BubbleMessageComponent } from './../temp/conversation-detail/message/bubble-message/bubble-message.component';
import { ConversationContentComponent } from './../temp/conversation-detail/conversation-content/conversation-content.component';
import { IonListConversationsComponent } from '../temp/list-conversations-component/ion-list-conversations/ion-list-conversations.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { AvatarProfileComponent } from 'src/app/components/utils/avatar-profile/avatar-profile.component';
import { DdpHeaderComponent } from 'src/app/components/ddp-header/ddp-header.component';
import { UserPresenceComponent } from 'src/app/components/utils/user-presence/user-presence.component';
import { UserTypingComponent } from 'src/chat21-core/utils/user-typing/user-typing.component';
import { ListConversationsComponent } from '../temp/list-conversations-component/list-conversations/list-conversations.component';
import { MomentModule } from 'angular2-moment';
import { AvatarComponent } from '../temp/conversation-detail/message/avatar/avatar.component';
import { MarkedPipe } from '../directives/marked.pipe';
import { SafeHtmlPipe } from '../directives/safe-html.pipe';
import { IonConversationDetailComponent } from '../temp/conversation-detail/ion-conversation-detail/ion-conversation-detail.component';
import { BubbleMyMessageComponent } from '../components/conversation-detail/bubble-my-message/bubble-my-message.component';
import { BubbleDayMessageComponent } from '../components/conversation-detail/bubble-day-message/bubble-day-message.component';
import { BubbleSystemMessageComponent } from '../components/conversation-detail/bubble-system-message/bubble-system-message.component';
import { InfoContentComponent } from '../components/conversation-info/info-content/info-content.component';
import { InfoSupportGroupComponent } from '../components/conversation-info/info-support-group/info-support-group.component';
import { InfoDirectComponent } from '../components/conversation-info/info-direct/info-direct.component';
import { AdvancedInfoAccordionComponent } from '../components/conversation-info/advanced-info-accordion/advanced-info-accordion.component';
import { InfoGroupComponent } from '../components/conversation-info/info-group/info-group.component';
import { TooltipModule } from 'ng2-tooltip-directive';
import { OptionHeaderComponent } from '../components/conversation-detail/option-header/option-header.component';

@NgModule({
  declarations: [
    AvatarProfileComponent,
    DdpHeaderComponent,
    UserPresenceComponent,
    UserTypingComponent,
    ListConversationsComponent,
    IonListConversationsComponent,

    IonConversationDetailComponent,
    ConversationContentComponent,
    AvatarComponent,
    BubbleMessageComponent,
    TextButtonComponent,
    LinkButtonComponent,
    ActionButtonComponent,
    FrameComponent,
    ImageComponent,
    InfoMessageComponent,
    ReturnReceiptComponent,
    TextComponent,

    BubbleDayMessageComponent,
    BubbleSystemMessageComponent,
    BubbleMyMessageComponent,
    BubbleOthersMessageComponent,
    InfoContentComponent,
    InfoSupportGroupComponent,
    InfoDirectComponent,
    InfoGroupComponent,
    AdvancedInfoAccordionComponent,
    MarkedPipe,
    SafeHtmlPipe,
    OptionHeaderComponent
  ],
  exports: [
    AvatarProfileComponent,
    DdpHeaderComponent,
    UserPresenceComponent,
    UserTypingComponent,
    ListConversationsComponent,
    IonListConversationsComponent,

    IonConversationDetailComponent,
    ConversationContentComponent,
    AvatarComponent,
    BubbleMessageComponent,
    TextButtonComponent,
    LinkButtonComponent,
    ActionButtonComponent,
    FrameComponent,
    ImageComponent,
    InfoMessageComponent,
    ReturnReceiptComponent,
    TextComponent,

    BubbleDayMessageComponent,
    BubbleSystemMessageComponent,
    BubbleMyMessageComponent,
    BubbleOthersMessageComponent,
    InfoContentComponent,
    InfoSupportGroupComponent,
    InfoDirectComponent,
    InfoGroupComponent,

    OptionHeaderComponent

  ],
  imports: [
    CommonModule,
    IonicModule,
    MomentModule,
    TooltipModule
  
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class SharedModule { }
