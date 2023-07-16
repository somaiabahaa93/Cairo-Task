import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { SearchComponent } from './components/search/search.component';



@NgModule({
  declarations: [
    SideMenuComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SideMenuComponent,
    SearchComponent
  ]
})
export class SharedModule { }
