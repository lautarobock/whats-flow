import { Injectable } from '@angular/core';
import * as moment from 'moment';

export interface Message {
    from: string;
    date: Date;
    text: string;
}

export interface Chat {
    messages: Message[];
}

@Injectable({
    providedIn: 'root'
})
export class ChatParserService {

    constructor() { }

    parse(data: string): Chat {
        const messages: Message[] = data.split('\n').map(row => {
            const dashIdx = row.indexOf(' - ');
            const date = moment(row.substr(0, dashIdx), 'DD/MM/YYYY HH:mm').toDate();
            const rest = row.substr(dashIdx + 3);
            const fromIdx = rest.indexOf(': ');
            const from = rest.substr(0, fromIdx);
            const text = rest.substr(fromIdx + 1).trim();
            return { date, from, text };
        });
        return { messages };
    }

}
