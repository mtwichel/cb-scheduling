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
import { RosterPageComponent } from './roster-page/roster-page.component';
import { AuthService } from './auth.service';


@NgModule({
  declarations: [
    AppComponent,
    CustomTitleBarComponent,
    MyShiftsComponent,
    RosterComponent,
    PhonePipe,
    RosterPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
