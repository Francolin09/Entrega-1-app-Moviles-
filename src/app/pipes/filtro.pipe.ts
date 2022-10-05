import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[], texto:string='', columna:string ='rol'): any[] {

    if( texto === ''){
      return arreglo;
    }

    if(!arreglo){
      return arreglo;
    }

    

    texto = texto.toLocaleLowerCase();



    // console.log(arreglo);
    // console.log(texto);

    return arreglo.filter( item => {  //ESTUPIDOOO, recordar que si no se ponen las llaves se puede obviar el return pero en si las vas a poner tienes que agregar el return, imbecil
      
     
      return item[columna].toLowerCase().includes( texto )
    });
  }

}
