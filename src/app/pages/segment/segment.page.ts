import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  superHeroes:Observable<any>;  
  publisher : string='';


  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.superHeroes = this.dataService.getHeroes();

  }

  segmentChanged(event){
    console.log(event)

    if(event.detail.value==='todos'){ //Tambien se podria cambiar el value del html y en vez de que el valor sea todos se deja como vacio, de esa forma no se requiria hacer esta validacion con el if
      return this.publisher='';
    }
    this.publisher= event.detail.value;
  }

}
