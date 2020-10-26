import { Injectable } from '@angular/core';
import * as moment from 'moment';
import * as _ from 'lodash';

export interface Message {
    from: string;
    date: Date;
    text: string;
}

export interface Chat {
    participants: string[];
    messages: Message[];
    paddings: number[];
}

@Injectable({
    providedIn: 'root'
})
export class ChatParserService {

    constructor() { }

    parse(data: string, onlyMessages = true): Chat {
        const messages: Message[] = data.split('\n').map(row => {
            const dashIdx = row.indexOf(' - ');
            const date = moment(row.substr(0, dashIdx), 'DD/MM/YYYY HH:mm').toDate();
            const rest = row.substr(dashIdx + 3);
            const fromIdx = rest.indexOf(': ');
            const from = rest.substr(0, fromIdx);
            const text = rest.substr(fromIdx + 1).trim();
            return { date, from, text };
        }).filter(m => m.from);
        const participants = _.uniq(messages.map(m => m.from));
        return { messages, participants, paddings: Array(messages.length).fill(0) };
    }

}
