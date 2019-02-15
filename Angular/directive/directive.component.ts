import { Component, OnInit } from '@angular/core';
import { InfoItem } from './info-item';


@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  isTgl = false
  mobiles: Array<InfoItem> = [
    { comp: 'moto', os: 'android', pz: 10 },
    { comp: 'apple', os: 'ios', pz: 30 },
    { comp: 'samsung', os: 'custom android', pz: 50 },
    { comp: 'BB', os: 'rim', pz: 40 },
    { comp: 'microsoft', os: 'mango', pz: 50 },
  ]
  constructor() { } 

  ngOnInit() {
  }

}
