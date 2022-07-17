import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cards = [
    {
      image: "../../../assets/5C3 1-1.png",
      description: "Exterior spaces",
      alt: "Desk with yellow chair"
    },
    {
      image: "../../../assets/5C3 1.png",
      description: "Research into the latest trends in workspaces that help design, manufacture solutions and create inspiring spaces.",
      alt: "Desk with brown background"
    },
    {
      image: "../../../assets/5C3 1.1.png",
      description: "Textures and colors",
      alt: "Desk with red chairs" 
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  readMore(){
    const text = document.getElementById("deploy");
    const readMore = document.getElementById("firstDescription");
    if(text!=null && readMore!=null){
      text.style.display="block";   
      readMore.style.display="none";
      }
    }

}
