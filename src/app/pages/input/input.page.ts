import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router';
import { LogeosService } from 'src/app/services/logeos.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {
   nombre:string = "usuario";
   vacia:any;
   usu:{[key:string]: String;}

   bddusuarios:Observable<any>;
   usuario={
    email:'',
    password:''
   }
  constructor(private dataService: DataService,
    private alertController: AlertController,
    private router:Router,
    private servicio: LogeosService) { }

  ngOnInit() {
    this.servicio.$getObjectSource2.subscribe(data => this.vacia=data)
  }

  ionViewWillLeave(){
    console.log(this.usu.nombre)
  }

  ionViewDidLeave(){
    console.log("sigue existiendo "+this.usu.nombre) // la variable aun existe al cargar el menú, el problema es grid no la existencia de la variable
  }

  onSubmit(){
    for(let i = 0 ; i < this.vacia.length ; i++) {
      if (this.usuario.email==this.vacia[i].email && this.usuario.password==this.vacia[i].password)
      {
        this.usu={nombre:this.vacia[i].nombre,email:this.vacia[i].email,password:this.vacia[i].password,asignatura:this.vacia[i].asignatura,perfil:this.vacia[i].perfil,telefono:this.vacia[i].telefono,rol:this.vacia[i].rol}
        this.presentAlert(this.usu.nombre)
        if (this.usu.rol.toLowerCase()=="profesor")
        {
          console.log("se logueó un profe xd")
          console.log("el profesor se llama "+this.usu.nombre)
          this.SaveLoginAndDirex()
        }
        if (this.usu.rol.toLowerCase()=="alumno")
        {
          console.log("se logueó un wea")
          console.log("el wea se llama "+this.usu.nombre)
          this.SaveLoginAndDirex()          
        }
        break;
      }
      else if (i==this.vacia.length-1)
      {
        console.log("era la wea, no hay usuarios")
        this.alertaIncorrecto();
        break;
      }

    }

  }

  async presentAlert(nombre) {
    const alert = await this.alertController.create({
      header: 'Bienvenido',
      subHeader: nombre,
      message: 'logeo completado',
      buttons: ['Entrar'],
    });

    await alert.present();
  }

  async alertaIncorrecto() {
    const alert = await this.alertController.create({
      header: 'Usuario o contraseña incorrecto',
      
      message: 'Verifique que su usuario y contraseña estén correctos',
      buttons: ['ok'],
    });

    await alert.present();
  }

  SaveLoginAndDirex()
  {
    this.servicio.enviarlogeo(this.usu);
    this.router.navigate(['asistencia'])
  }
  

  

}