import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(private actionSheetController: ActionSheetController) { } //2-luego de agregar e importar el actionsheet de angular pero antes de probarlo hay que llamar al metodo de actionsheet y esto l0o haremos en el onclick

  ngOnInit() {
  }
  onClick(){
   this.presentActionSheet() //3 aca llamamos al metodo present action creado aca abajito para que se active al hacer click
  }
 
  
 async presentActionSheet() {
  const actionSheet = await this.actionSheetController.create({ //1-aca indica un errpr porque no existe el actionsheetcontroller por tanto se debe agregar en el contructor arriba
    header: 'Cosas',
    cssClass: 'my-custom-class',
    buttons: [{
      text: 'Delete',
      role: 'destructive',
      icon: 'trash-outline',
      cssClass:'rojo',
      id: 'delete-button',
      data: {
        type: 'delete'
      },
      handler: () => {
        console.log('Delete clicked');
      }
    }, {
      text: 'Share',
      icon: 'share-outline',
      data: 10,
      handler: () => {
        console.log('Share clicked');
      }
    }, {
      text: 'Play (open modal)',
      icon: 'caret-forward-circle-outline',
      data: 'Data value',
      handler: () => {
        console.log('Play clicked');
      }
    }, {
      text: 'Favorite',
      icon: 'heart-outline',
      handler: () => {
        console.log('Favorite clicked');
      }
    }, {
      text: 'Cancel',
      icon: 'close-outline',
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      }
    }]
  });
  await actionSheet.present();

  const { role, data } = await actionSheet.onDidDismiss();
  console.log('onDidDismiss resolved with role and data', role, data);
}

}

