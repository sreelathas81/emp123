import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NamesComponent } from './names/names.component';
import { DetailsComponent } from './details/details.component';
import { ErrorComponent } from './error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { CountPipe } from './count.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NamesComponent,
    DetailsComponent,
    ErrorComponent,
    CountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
