import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { APP_ROUTING } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './plantilla/header/header.component';
import { FooterComponent } from './plantilla/footer/footer.component';
import { ComprasComponent } from './view/compras/compras.component';
import { HttpClientModule } from '@angular/common/http';
import { FiltroPipe } from './pipes/filtro.pipe';
import { AllguiasComponent } from './view/allguias/allguias.component';
import { Filtro2Pipe } from './pipes/filtro2.pipe';
import { Filtro3Pipe } from './pipes/filtro3.pipe';
import { Filtro4Pipe } from './pipes/filtro4.pipe';
import { Filtro5Pipe } from './pipes/filtro5.pipe';

import { PdfViewerModule } from 'ng2-pdf-viewer';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ComprasComponent,
    FiltroPipe,
    AllguiasComponent,
    Filtro2Pipe,
    Filtro3Pipe,
    Filtro4Pipe,
    Filtro5Pipe
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


