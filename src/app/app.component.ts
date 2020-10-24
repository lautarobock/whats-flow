import { Component } from '@angular/core';
import { Chat } from './parser/chat-parser.service';

@Component({
    selector: 'wf-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    chats: Chat[] = [];

}
