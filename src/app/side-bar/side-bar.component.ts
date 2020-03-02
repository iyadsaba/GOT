import { Component, OnInit, Input, ViewChild, EventEmitter, Output  } from '@angular/core';

import {AD} from '../modules/ad';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  @Input() ads: AD[] ;
  @Input() isFilterApplied = false;

  @Output() filtering = new EventEmitter();
  @ViewChild('start') start;
  @ViewChild('end') end;
  sendDataWithDebounce;
  filter = {
    start : null,
    end: null
  };

  constructor( ) {     }

  ngOnInit(): void {
    this.sendDataWithDebounce = this.__debounce(this.getValues, 500);
  }
  __debounce(fn , wait: number) {
    let timeout;
    return function() {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        fn.apply(this, arguments);
      }, wait);
    };
  }
  getValues() {
    this.filter.start =  this.start.nativeElement.value;
    this.filter.end = this.end.nativeElement.value;
    this.filtering.emit(this.filter);
  }

}
