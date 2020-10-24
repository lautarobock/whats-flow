import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { FlowComponent } from './flow/flow.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ImporterComponent } from './importer/importer.component';

@NgModule({
    declarations: [
        ChatComponent,
        FlowComponent,
        ImporterComponent
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
        MatButtonModule
    ]
})
export class CoreModule { }
