import { Component, OnInit } from '@angular/core';
import { LogeosService } from 'src/app/services/logeos.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.page.html',
  styleUrls: ['./grid.page.scss'],
})
export class GridPage implements OnInit {
  logeado:{[key:string]: String;}

  
  constructor(private servicio: LogeosService){}


  ngOnInit() 
  {
    console.log("redireccionando a grid")
    this.servicio.$getObjectSource.subscribe(data => this.logeado=data)
    console.log(this.logeado)
  }



  



}
