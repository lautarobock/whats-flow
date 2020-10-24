import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { FlowComponent } from './flow/flow.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';


@NgModule({
    declarations: [
        ChatComponent,
        FlowComponent
    ],
    exports: [
        FlowComponent,
        ChatComponent
    ],
    imports: [
        CommonModule,
        MatListModule,
        MatCardModule
    ]
})
export class CoreModule { }
