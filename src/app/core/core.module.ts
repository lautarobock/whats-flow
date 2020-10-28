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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';

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
        FormsModule,
        ReactiveFormsModule,
        MatListModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatInputModule,
        MatToolbarModule,
        MatTooltipModule,
        MatDialogModule
    ]
})
export class CoreModule { }
