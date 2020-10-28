import { Component, Input, OnChanges, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Chat, Message } from 'src/app/parser/chat-parser.service';
import { ImporterDialog } from '../importer/importer.component';

@Component({
    selector: 'wf-flow',
    templateUrl: './flow.component.html',
    styleUrls: ['./flow.component.css']
})
export class FlowComponent implements OnChanges {

    @Input() chats: Chat[];
    slots: Message[][];
    colors: { [key: string]: string} = {};

    constructor(
        private importer: ImporterDialog
    ) { }

    ngOnChanges(): void {
        const max = Math.max(...this.chats.map(c => c.messages.length));
        const indexes = Array(this.chats.length).fill(0);
        this.slots = [];
        for (let i = 0; i < max; i++) {
            const dates = indexes.map((j, idx) => this.chats[idx].messages[j]?.date);
            const minDate = _.min(dates);
            const minIdx = dates.indexOf(minDate);
            const slot = Array(this.chats.length);
            slot[minIdx] = this.chats[minIdx].messages[indexes[minIdx]];
            this.slots.push(slot);
            indexes[minIdx]++;
        }
        const participants = _.uniq(_.flatten(this.chats.map(c => c.participants)));
        participants.forEach((p, idx) => this.colors[p] = this.colors[p] || this.getColor(idx, participants.length));
    }

    addChat() {
        this.importer.open().afterClosed().subscribe(chat => {
            this.chats.push(chat);
            this.ngOnChanges();
        });
    }

    deleteMessages() {
        //
    }

    private getColor(idx: number, max: number) {
        return 'hsl(' + (idx * (360 / max) % 360) + ',100%,50%)';
    }

}
