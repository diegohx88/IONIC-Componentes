import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
	selector: 'app-action-sheet',
	templateUrl: './action-sheet.page.html',
	styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

	constructor(
		public actionSheetController: ActionSheetController
		) { }

	ngOnInit() {
	}
	//async indica que esta función regresa una promesa
	async presentActionSheet() {
		const actionSheet = await this.actionSheetController.create({
			header: 'Albums',
			backdropDismiss:false,
			buttons: [
			{
				text: 'Delete',
				role: 'destructive',
				icon: 'trash',
				//Atributo con el nombre de la clase rojo personalizada
				cssClass:'rojo',
				//handler es lo que va hacer cuando se presiona los botones
				handler: () => {
					console.log('Delete clicked');
				}
			}, {
				text: 'Share',
				icon: 'share',
				handler: () => {
					console.log('Share clicked');
				}
			}, {
				text: 'Play (open modal)',
				icon: 'arrow-dropright-circle',
				handler: () => {
					console.log('Play clicked');
				}
			}, {
				text: 'Favorite',
				icon: 'heart',
				handler: () => {
					console.log('Favorite clicked');
				}
			}, {
				text: 'Cancel',
				icon: 'close',
				role: 'cancel',
				handler: () => {
					console.log('Cancel clicked');
				}
			}]
		});
		await actionSheet.present();
	}

}
