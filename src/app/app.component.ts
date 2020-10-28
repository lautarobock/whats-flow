import { Component } from '@angular/core';
import { ImporterDialog } from './core/importer/importer.component';
import { Chat, ChatParserService } from './parser/chat-parser.service';

@Component({
    selector: 'wf-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    chats: Chat[];

    constructor(private importer: ImporterDialog) { }

    addChat(): void {
        this.importer.open().afterClosed().subscribe(chat => {
            this.chats = [chat];
        });
    }
}
