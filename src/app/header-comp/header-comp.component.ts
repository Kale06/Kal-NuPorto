import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
@Component({
  selector: 'app-header-comp',
  imports: [MatTooltipModule, CommonModule, MatMenuModule],
  templateUrl: './header-comp.component.html',
  styleUrls: ['./header-comp.component.css']
})
export class HeaderCompComponent implements OnInit {
  kalTime: string | any;
  burger: boolean = false;

  ngOnInit() {
  }

  openBurgerBar() {
    this.burger = !this.burger;
  }

  refreshSite() {
    window.location.reload();
  }

  navigateTo(path: string) {
    window.location.href = path;
  }
}
