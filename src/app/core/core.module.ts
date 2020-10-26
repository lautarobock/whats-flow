import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { FlowComponent } from './flow/flow.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ImporterComponent } from './importer/importer.component';
import { MessageBoxComponent } from './message-box/message-box.component';

@NgModule({
    declarations: [
        ChatComponent,
        FlowComponent,
        ImporterComponent,
        MessageBoxComponent
    ],
    exports: [
        FlowComponent,
        ChatComponent,
        ImporterComponent
    ],
    imports: [
        CommonModule,
        MatListModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule
    ]
})
export class CoreModule { }
