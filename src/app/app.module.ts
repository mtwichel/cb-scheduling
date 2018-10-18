import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CustomTitleBarComponent } from './custom-title-bar/custom-title-bar.component';

import { MaterialModule } from './material';
import 'hammerjs';
import { MyShiftsComponent } from './my-shifts/my-shifts.component';
import { RosterComponent } from './roster/roster.component';
import { PhonePipe } from './phone.pipe';

import { environment } from '../environments/environment';
export const firebaseConfig = environment.firebaseConfig;

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireMessagingModule } from 'angularfire2/messaging';
import { RosterPageComponent } from './roster-page/roster-page.component';
import { AuthService } from './auth.service';

import { ResizableModule } from 'angular-resizable-element';
import { ShiftEditorItemComponent } from './shift-editor-item/shift-editor-item.component';

import { LoginPageComponent } from './auth-components/login-page/login-page.component';
import { ForgotPasswordDialogComponent } from './auth-components/forgot-password-dialog/forgot-password-dialog.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MessagingService } from './messenging.service';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CommonModule } from '@angular/common';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { AvalibilityEditorComponent } from './avalibility-editor/avalibility-editor.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';


@NgModule({
  declarations: [
    AppComponent,
    CustomTitleBarComponent,
    MyShiftsComponent,
    RosterComponent,
    PhonePipe,
    RosterPageComponent,
    ShiftEditorItemComponent,
    LoginPageComponent,
    ForgotPasswordDialogComponent,
    AvalibilityEditorComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    ResizableModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    DragAndDropModule,
    NgxMaterialTimepickerModule.forRoot(),

  ],
  providers: [AuthService, MessagingService],
  bootstrap: [AppComponent],
  entryComponents: [
    ForgotPasswordDialogComponent
  ]
})
export class AppModule { }
