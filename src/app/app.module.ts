import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbdCarouselBasic } from './carousel-basic/carousel-basic.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdNavCustomStyle } from './nav-basic/nav-custom-style';

@NgModule({
  declarations: [
    AppComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbdCarouselBasic,
    NgbdNavCustomStyle
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}