import { Component, OnInit } from '@angular/core';

import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-header-comp',
  imports: [MatTooltipModule],
  templateUrl: './header-comp.component.html',
  styleUrls: ['./header-comp.component.css']
})
export class HeaderCompComponent implements OnInit {
  kalTime: string | any;

  ngOnInit() {
  }
  
  refreshSite() {
    window.location.reload();
  }
}
