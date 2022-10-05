import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  users:any[]=[];
  textoBuscar: string = '';

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getBddusus().subscribe(users =>{
      
      this.users = users;
      console.log(users)
    })
  }

  onSearchChange(event){
    // console.log(event.detail.value)

    this.textoBuscar=event.detail.value;
    console.log(this.textoBuscar)
    

  }

}
