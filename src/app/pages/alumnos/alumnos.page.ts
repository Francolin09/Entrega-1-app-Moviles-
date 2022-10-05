import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { LogeosService } from 'src/app/services/logeos.service';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
})
export class AlumnosPage implements OnInit {

  pageTitle = 'Alumnos';
  busqueda:string = '';
  bddusuario:Observable<any>;
  usuariosresc:any;

  listaAlumnos : any = [
  ];
  listasincronica:any = []

  constructor(private navCtrl: NavController, private dataservice:DataService,private servicio: LogeosService) { }

  ngOnInit() {
    console.log("toy en ngoinit ")
    this.servicio.$getObjectSource2.subscribe(data => this.usuariosresc=data)
  }

  ionViewDidEnter(){
    console.log("ya cargué")
    this.filtradoporrol();
    this.sincroniafiltro
    
  }

  filtradoporrol(){
    for(let i = 0 ; i < this.usuariosresc.length ; i++) {
      if (this.usuariosresc[i].rol.toLowerCase()==='alumno'){
        this.listaAlumnos.push(this.usuariosresc[i])
      }
    }
    
  }

  sincroniafiltro(){
    this.listaAlumnos=this.listasincronica;
  }
}
