import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/parser/chat-parser.service';

@Component({
    selector: 'wf-message-box',
    templateUrl: './message-box.component.html',
    styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit {

    @Input() msg: Message;
    @Input() color: string;

    constructor() { }

    ngOnInit(): void {
    }

}
