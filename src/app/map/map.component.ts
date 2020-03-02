import { Component, OnInit, Input,  } from '@angular/core';
import {AD} from '../modules/ad';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input() ads: AD[];

  constructor() { }

  ngOnInit(): void {

  }



}
