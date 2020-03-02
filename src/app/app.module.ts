import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MapComponent } from './map/map.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AdComponent } from './ad/ad.component';
import { MainComponent } from './main/main.component';
import { AdBannerComponent } from './ad-banner/ad-banner.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    MapComponent,
    AdComponent,
    MainComponent,
    AdBannerComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    FormsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent],
  entryComponents: [ AdComponent  ],

})
export class AppModule { }
