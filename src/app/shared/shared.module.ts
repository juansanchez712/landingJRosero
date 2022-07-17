import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { WorkComponent } from './work/work.component';
import { SliderComponent } from './slider/slider.component';



@NgModule({
  declarations: [
    MenuComponent,
    WorkComponent,
    SliderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuComponent,
    CommonModule
  ]
})
export class SharedModule { }
