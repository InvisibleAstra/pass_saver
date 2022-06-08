import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbInputModule,
  NbButtonModule,
  NbUserModule,
  NbCardModule,
  NbDialogModule, NbIconModule, NbToastrModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import {AuthWindowComponent} from "./components/authWindow/authWindow.component";
import {RouterModule} from "@angular/router";
import {routes} from "./router";
import {PassAreaComponent} from "./components/passArea/passArea.component";
import {FormsModule} from "@angular/forms";
import {PassItemComponent} from "./components/passArea/passItem/passItem.component";
import {CustomInputComponent} from "./components/passArea/passItem/customInput/customInput.component";

@NgModule({
  declarations: [
    AppComponent,
    PassAreaComponent,
    AuthWindowComponent,
    PassItemComponent,
    CustomInputComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({name: 'dark'}),
    NbLayoutModule,
    NbEvaIconsModule,
    NbInputModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    NbButtonModule,
    FormsModule,
    NbUserModule,
    NbDialogModule.forRoot(),
    NbCardModule,
    NbToastrModule.forRoot(),
    NbIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
