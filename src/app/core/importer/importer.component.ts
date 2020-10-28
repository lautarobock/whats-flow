import { Component, EventEmitter, Injectable, NgZone, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import * as _ from 'lodash';
import { Chat, ChatParserService } from 'src/app/parser/chat-parser.service';

@Component({
    selector: 'wf-importer',
    templateUrl: './importer.component.html',
    styleUrls: ['./importer.component.css']
})
export class ImporterComponent implements OnInit {

    // @Output() read = new EventEmitter<Chat>();
    chat: Chat;
    initialDate: Date;
    finalDate: Date;
    minDate: Date;
    maxDate: Date;
    count: number;

    constructor(
        private parser: ChatParserService,
        private zone: NgZone,
        private ref: MatDialogRef<ImporterComponent, Chat>
    ) { }

    ngOnInit(): void {
    }

    fileChanged(e: any): void {
        const file = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.onload = () => {
            this.zone.run(() => {
                this.chat = this.parser.parse(fileReader.result.toString());
                this.initialDate = this.chat.messages[0].date;
                this.finalDate = this.chat.messages[this.chat.messages.length - 1].date;
                this.minDate = this.initialDate;
                this.maxDate = this.finalDate;
                this.count = this.chat.messages.length;
            });
        };
        fileReader.readAsText(file);
    }

    datesChange(): void {
        if (this.maxDate) {
            this.maxDate.setHours(23);
            this.maxDate.setMinutes(59);
            this.maxDate.setSeconds(59);
            this.maxDate.setMilliseconds(999);
        }
        this.count = this.chat.messages.filter(m => m.date >= this.minDate && m.date <= this.maxDate).length;
    }

    upload(): void {
        const clone = _.cloneDeep(this.chat);
        clone.messages = clone.messages.filter(m => m.date >= this.minDate && m.date <= this.maxDate);
        clone.participants = _.uniq(clone.messages.map(m => m.from));
        this.ref.close(clone);
        // this.read.emit(clone);
    }
}

@Injectable({ providedIn: 'root' })
export class ImporterDialog {

    constructor(
        private dialog: MatDialog
    ) { }

    open() {
        return this.dialog.open<ImporterComponent, void, Chat>(ImporterComponent);
    }
}
