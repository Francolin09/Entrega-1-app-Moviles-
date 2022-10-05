import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { LogeosService } from 'src/app/services/logeos.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  listausuarios:any[];
  usuariologeado:{[key:string]: String;};
  observableusuarios:Observable<any>;

  constructor(private router: Router,private dataService: DataService,private servicio:LogeosService) { }

  ngOnInit() {
    this.observableusuarios = this.dataService.getBddusus();
    this.observableusuarios.subscribe(result => this.listausuarios=result);
  }

  redirecLogin(){
    this.router.navigate(['input'])
    this.servicio.enviarusuarios(this.listausuarios);
  }

}
