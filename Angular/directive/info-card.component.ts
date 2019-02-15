import { Component, OnInit, Input } from '@angular/core';
import { InfoItem } from './info-item';

@Component({
  selector: 'app-info-card',
  template: `
  <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">Company - {{info.comp}}</div>
    <div class="card-body">
      <h5 class="card-title">OS - {{info.os}}</h5>
      <p class="card-text">Price - {{info.pz}}</p>
    </div>
  </div>
  `,
  styles: []
})
export class InfoCardComponent implements OnInit {

  constructor() { }
  @Input()
  info:InfoItem
  ngOnInit() {
  }

}
