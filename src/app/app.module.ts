import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListService } from './list.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialComponent } from './material/material.component';
import { RouterModule } from '@angular/router';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MaterialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: MaterialComponent
      },
      {
        path: 'home',
        component: HomeComponent
      }
    ]),
    MatCheckboxModule
  ],
  providers: [
    ListService
  ],
  bootstrap : [AppComponent],
})
export class AppModule { }
