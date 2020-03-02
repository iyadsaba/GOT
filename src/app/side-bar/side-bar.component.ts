import { Component, OnInit, Input, ViewChild, EventEmitter, Output  } from '@angular/core';
import {AD} from '../modules/ad';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  @Input() ads: AD[] ;
  @Output() filtering = new EventEmitter();
  @ViewChild('start') start;
  @ViewChild('end') end;

  constructor( ) {     }

  ngOnInit(): void {
    console.log('side-bar', this.ads);

  }

  getValues() {
    const filter = {
      start : this.start.nativeElement.value,
      end : this.end.nativeElement.value
    };
    this.filtering.emit(filter);
    console.log('getValuesInvoked');
  }
}
