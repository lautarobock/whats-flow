import { Component, EventEmitter, NgZone, OnInit, Output } from '@angular/core';
import { Chat, ChatParserService } from 'src/app/parser/chat-parser.service';

@Component({
    selector: 'wf-importer',
    templateUrl: './importer.component.html',
    styleUrls: ['./importer.component.css']
})
export class ImporterComponent implements OnInit {

    @Output() read = new EventEmitter<Chat>();
    chat: Chat;
    initialDate: Date;
    finalDate: Date;

    constructor(
        private parser: ChatParserService,
        private zone: NgZone
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
            });
        };
        fileReader.readAsText(file);
    }
}
