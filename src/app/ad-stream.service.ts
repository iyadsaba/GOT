import { Injectable } from '@angular/core';
import {AD} from './modules/ad';
import {adDispatcher} from 'node_modules/ubimo-ad-dispatcher';
import { BehaviorSubject, Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class AdStreamService {

  private subj = new BehaviorSubject<any>([]);
  private ads:AD[]; // store our data in memory


  constructor() { 
   // adDispatcher.registerToAdEvents( (data: any) => this.subj.next(data);
  }

  public get getAds() : Observable<any> {
    return this.subj.asObservable();
   }


}
