import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Chat, ChatParserService } from 'src/app/parser/chat-parser.service';

@Component({
    selector: 'wf-importer',
    templateUrl: './importer.component.html',
    styleUrls: ['./importer.component.css']
})
export class ImporterComponent implements OnInit {

    @Output() read = new EventEmitter<Chat>();

    constructor(
        private parser: ChatParserService
    ) { }

    ngOnInit(): void {
    }

    fileChanged(e: any): void {
        const file = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.onload = () => {
            this.read.emit(this.parser.parse(fileReader.result.toString()));
        };
        fileReader.readAsText(file);
    }
}
