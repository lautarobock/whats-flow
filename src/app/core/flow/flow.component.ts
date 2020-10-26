import { Component, Input, OnChanges, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Chat, Message } from 'src/app/parser/chat-parser.service';

@Component({
    selector: 'wf-flow',
    templateUrl: './flow.component.html',
    styleUrls: ['./flow.component.css']
})
export class FlowComponent implements OnChanges {

    @Input() chats: Chat[];
    slots: Message[][];

    constructor() { }

    ngOnChanges(): void {
        const max = Math.max(...this.chats.map(c => c.messages.length));
        // this.slots = Array(max).fill(0);
        const indexes = Array(this.chats.length).fill(0);
        // let lastChatIdx = 0;
        this.slots = [];
        for (let i = 0; i < max; i++) {
            const dates = indexes.map((j, idx) => this.chats[idx].messages[j]?.date);
            const minDate = _.min(dates);
            const minIdx = dates.indexOf(minDate);
            const slot = Array(this.chats.length);
            slot[minIdx] = this.chats[minIdx].messages[indexes[minIdx]];
            this.slots.push(slot);
            // this.chats.forEach((c, jx) => {
            //     if (jx !== minIdx) {
            //         c.paddings[indexes[jx]] += 71;
            //     }
            // });
            // lastChatIdx = minIdx;
            indexes[minIdx]++;
        }
    }

}
