import { Component, Input, OnInit,  OnDestroy, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
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
  constructor(private cdRef: ChangeDetectorRef) {
   }

  ngOnInit() {
    this.cdRef.detectChanges();
    console.log('cdRef', this.cdRef);

  }

  ngAfterViewInit() {
    // tslint:disable-next-line:no-unused-expression
    this.videoElement  && (this.videoElement.nativeElement.muted = true);
    // not the best way/
    setTimeout(() => {
      this.isVisible = false;
    // tslint:disable-next-line:no-string-literal
      this.cdRef['_cdRefInjectingView'][0].setAttribute('style', 'display:none;');
    }, this.ad.lifeTime);
  }


  ngOnDestroy() {
    this.cdRef.detach();
  }



}
