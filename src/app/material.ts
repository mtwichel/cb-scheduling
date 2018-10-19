import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';



import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        MatButtonModule,
        MatSnackBarModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatInputModule,
        MatDatepickerModule,
        MatCheckboxModule,
        MatNativeDateModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatRadioModule,
        MatTableModule,
        MatExpansionModule,
        MatSelectModule,
        MatGridListModule,
    ],
    exports: [
        MatButtonModule,
        MatSnackBarModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatInputModule,
        MatDatepickerModule,
        MatCheckboxModule,
        MatNativeDateModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatRadioModule,
        MatTableModule,
        MatExpansionModule,
        MatSelectModule,
        MatGridListModule,
    ],
})
export class MaterialModule { }
