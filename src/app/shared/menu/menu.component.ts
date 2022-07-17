import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() flag: boolean = false;
  opacity: number = 1;

  lista = document.getElementsByClassName('optionMenu');
  constructor(private router: Router) { }

  ngOnInit(): void {
    if(this.router.url == '/work'){
      this.lista[0].setAttribute("style", "color: black")
      this.lista[1].setAttribute("style", "color: black")
      this.lista[2].setAttribute("style", "color: black")
    }
  }


  navbarScroll() {
    let top = window.scrollY;
    this.opacity = (top<10)?1:0;
  }

  goToHome(){
    this.router.navigate(['']);
  }

}
