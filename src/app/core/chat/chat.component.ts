import { Component, Input, OnInit } from '@angular/core';
import { Chat } from 'src/app/parser/chat-parser.service';

@Component({
    selector: 'wf-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

    @Input() chat: Chat;

    constructor() { }

    ngOnInit(): void {
    }

}
