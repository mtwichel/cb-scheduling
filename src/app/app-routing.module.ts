import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyShiftsComponent } from './my-shifts/my-shifts.component';
import { RosterPageComponent } from './roster-page/roster-page.component';

const routes: Routes = [
  { path: 'roster', component: RosterPageComponent },
  { path: 'home', component: MyShiftsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
