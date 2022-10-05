import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogeosService {  
  private objetologeado = new BehaviorSubject<{}>({});
  private totalusuarios = new BehaviorSubject<{}>({});

  $getObjectSource = this.objetologeado.asObservable();
  $getObjectSource2= this.totalusuarios.asObservable();

  constructor() { }

  enviarlogeo(data:any){
    this.objetologeado.next(data);
  }

  enviarusuarios(data:any){
    this.totalusuarios.next(data);
  }
}
