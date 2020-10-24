import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/app/parser/chat-parser.service';

@Component({
    selector: 'wf-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

    chat: Chat = {
        messages: [{
            date: new Date(),
            from: 'Tano Mauro',
            text: 'Es momento q saltes a decir algo para envalentonar a becce'
        }, {
            date: new Date(),
            from: 'Lautaro',
            text: 'yo le meto 🌶️ y vos te pones del lado de beche'
        }, {
            date: new Date(),
            from: 'Lautaro',
            text: 'para mi q tu nro nuevo en realidad era de vecotor'
        }]
    };

    constructor() { }

    ngOnInit(): void {
    }

}
