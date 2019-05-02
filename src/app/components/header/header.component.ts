
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

//Decorador para recibir el título del componente
@Input() titulo:string;

  constructor() { }

  ngOnInit() {}

}
