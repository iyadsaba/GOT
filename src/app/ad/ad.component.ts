import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import {AD} from '../../app/modules/ad';


@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.css']
})
export class AdComponent implements OnInit  {

  @Input() public ad: AD;

  constructor() {
   }

  ngOnInit(): void {

  }
  getImgSrc() {
    const dic = {
      IMAGE : '../../assets/icons/ic_image_black_24px.svg',
      VIDEO : '../../assets/icons/ic_movie_creation_black_24px.svg'
    };
    return dic[this.ad.type];
  }
  prettyDate() {
    return this.ad.time.toLocaleTimeString(navigator.language, {
      hour: '2-digit',
      minute : '2-digit',
      second : '2-digit'
    });
  }


}
