import { Component, OnInit, Input, ChangeDetectorRef, OnDestroy } from '@angular/core';
import {adDispatcher}  from '../../../node_modules/ubimo-ad-dispatcher';
import { AdComponent } from '../ad/ad.component';
import { from, Subscription, Observable } from 'rxjs';
import { AdStreamService } from '../ad-stream.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {

  public listenerOpts: any;

  public ads:Array<any> = [] ;
   //public ads: Observable<any>;

  constructor(private cdRef: ChangeDetectorRef) {
       
   }

  ngOnInit(): void {
    this.listenerOpts = adDispatcher.registerToAdEvents((data) => {
      this.ads.unshift(data);
      this.cdRef.detectChanges();
    });

    }

    ngOnDestroy() : void {
      this.listenerOpts.removeListener();
      this.cdRef.detach();
    }
  

}
