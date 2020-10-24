import { Component, Input, OnInit } from '@angular/core';
import { Chat } from 'src/app/parser/chat-parser.service';

@Component({
    selector: 'wf-flow',
    templateUrl: './flow.component.html',
    styleUrls: ['./flow.component.css']
})
export class FlowComponent implements OnInit {

    @Input() chats: Chat[];

    constructor() { }

    ngOnInit(): void {
    }

}
