import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
})
export class ButtonPage implements OnInit {

  favorito:boolean=false;

  constructor( private router: Router) { }

  redirigir(){
    this.router.navigate(['/grid'])
  }

  ngOnInit() {
  }

  onClick(){
  this.favorito = !this.favorito;
  }

}
