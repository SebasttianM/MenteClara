import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { ArtComponent } from './components/art/art.component';
import { MediaComponent } from './components/media/media.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArticuloComponent,
    ArtComponent,
    MediaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }