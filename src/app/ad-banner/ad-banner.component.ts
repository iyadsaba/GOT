import { Component, Input, OnInit,  OnDestroy, ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';
import { AD } from '../modules/ad';
@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.css']
})


export class AdBannerComponent implements OnInit, OnDestroy , AfterViewInit  {
  @Input() public ad: AD;

  @ViewChild('videoBanner') videoElement;

  public isVisible = true;
  private lifeTime = 5000;
  constructor() {
   }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // tslint:disable-next-line:no-unused-expression
    this.videoElement  && console.log(this.videoElement.nativeElement.muted = true);
    // not good need to change this/
    setTimeout(() => {
      this.isVisible = false;
    }, this.lifeTime);
  }


  ngOnDestroy() {

  }



}
