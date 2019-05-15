import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes:Componente [] = [
  //redirecTo hace referencia al path en el archivo app-routing.module.ts
  {
  	icon: 'american-football',
  	name: 'Action Sheet',
  	redirecTo: '/action-sheet'
  },
  {
  	icon: 'appstore',
  	name: 'Alert',
  	redirecTo: '/alert'
  },
  {
    icon: 'beaker',
    name: 'Avatar',
    redirecTo: '/avatar'
  },
  {
    icon: 'radio-button-on',
    name: 'Botones y router',
    redirecTo: '/botones'
  },
  {
    icon: 'copy',
    name: 'Card',
    redirecTo: '/card'
  }

  ];

  constructor() { }

  ngOnInit() {
  }

}

//interfaz para tener los atributos del arreglo
interface Componente {
	icon: string;
	name: string;
	redirecTo: string;
}