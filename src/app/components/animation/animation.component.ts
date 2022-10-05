import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
})
export class AnimationComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  ionViewDidEnter(){
    setTimeout(() => {
      this.modalController.dismiss();
    }, 2500);
  }

}
