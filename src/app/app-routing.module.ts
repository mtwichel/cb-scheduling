import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyShiftsComponent } from './my-shifts/my-shifts.component';
import { RosterPageComponent } from './roster-page/roster-page.component';
import { LoggedInGuard, LoggedOutGuard } from './auth/auth.guard';
import { LoginPageComponent } from './auth-components/login-page/login-page.component';
import { ShiftEditorItemComponent } from './shift-editor-item/shift-editor-item.component';
import { AvalibilityEditorComponent } from './avalibility-editor/avalibility-editor.component';

const routes: Routes = [
  { path: 'login', canActivate: [LoggedOutGuard], component: LoginPageComponent },
  { path: 'home', canActivate: [LoggedInGuard], component: MyShiftsComponent },
  { path: 'roster', canActivate: [LoggedInGuard], component: RosterPageComponent },
  { path: 'avalibility', canActivate: [LoggedInGuard], component: AvalibilityEditorComponent },
  { path: 'test', canActivate: [LoggedInGuard], component: ShiftEditorItemComponent },
  { path: '', canActivate: [LoggedInGuard], redirectTo : '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
