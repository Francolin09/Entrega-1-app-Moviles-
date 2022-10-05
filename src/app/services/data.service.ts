import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Componente } from '../interfaces/interfaces';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsuarios(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }


  getAlbumes(){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/albums')
  }

  getHeroes(){
    return this.http.get<Componente[]>('/assets/data/superheroes.json').pipe(delay(1500))
  }

  getBddusus(){
    return this.http.get<Componente[]>('/assets/data/bddusuarios.json').pipe(delay(1500))  // obtener json de usuarios.
  }

  getSideMenuOpts(){
    return this.http.get<Componente[]>('/assets/data/side-menu-opt.json')
  }

  


}
