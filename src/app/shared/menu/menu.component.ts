import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  opacity: number = 1;

  constructor() { }

  ngOnInit(): void {
  }


  navbarScroll() {
    let top = window.scrollY;
    this.opacity = (top<100)?1:0;
}

}
