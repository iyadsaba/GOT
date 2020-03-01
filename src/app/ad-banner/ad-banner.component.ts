import { Component, Input, OnInit,  OnDestroy, ViewChild } from '@angular/core';
import { AD } from '../modules/ad';
@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.css']
})


export class AdBannerComponent implements OnInit, OnDestroy {
  @Input() public ad:AD;

  @ViewChild('videoBanner') videoElement; 


  constructor() { }

  ngOnInit() {

  }
  ngAfterViewInit(){
    this.videoElement && (this.videoElement.muted = "muted") && console.log(this.videoElement);

  }
  ngAfterViewChecked(){

  }

  ngOnDestroy() {
    
  }



}
