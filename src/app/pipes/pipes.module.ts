import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroPipe } from './filtro.pipe';
import { FiltroPipe2 } from './filtro2.pipe';



@NgModule({
  declarations: [
    FiltroPipe,FiltroPipe2
  ],
  exports:[
    FiltroPipe,FiltroPipe2
  ]
  
})
export class PipesModule { }
