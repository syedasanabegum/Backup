import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatListModule} from '@angular/material/list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {ProgressSpinnerMode, MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AboutComponent } from './pages/about/about.component';
import { HelpComponent } from './pages/help/help.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AccordianComponent } from './pages/accordian/accordian.component';
import { CardComponent } from './pages/card/card.component';
import {FormComponent} from './pages/form/form.component';
import { FormDialogComponent } from './pages/form-dialog/form-dialog.component';
import {DataService} from './data.service';
import { TaskComponent } from './pages/task/task.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ProfileComponent,FormComponent, AboutComponent,CardComponent,FormDialogComponent, HelpComponent, NotFoundComponent, AccordianComponent, TaskComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    BrowserModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatGridListModule,
    MatChipsModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MatProgressSpinnerModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
