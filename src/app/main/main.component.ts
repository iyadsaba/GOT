import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { adDispatcher } from 'ubimo-ad-dispatcher';
import { AD } from '../modules/ad';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy  {

  public listenerOpts: any;

  public ads: AD[] = [] ;
  public filteredAds: AD[];
  public isFilterApplied = false;

  constructor(private cdRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
     this.listenerOpts = adDispatcher.registerToAdEvents((data) => {
      const ad: AD = { ...data, time: new Date(), lifeTime: 5000 };
      console.log('main', ad);
      this.ads.unshift(ad);
      this.cdRef.detectChanges();

    });
   }


  ngOnDestroy(): void {
    this.listenerOpts.removeListener();
    this.cdRef.detach();
  }

  applyFilter($event: any) {
    this.filteredAds = this.ads.filter((ad: AD , i: number) => {
            const unixDate = getUnixDate(ad.time);
            console.log(i, unixDate);
            return  ((unixDate >= $event.start) && (unixDate <= $event.end));
    });

    function getUnixDate(date: Date) {
      return Math.round(date.getTime() / 1000);
    }
    this.isFilterApplied = !!this.filteredAds.length;
    }
}
