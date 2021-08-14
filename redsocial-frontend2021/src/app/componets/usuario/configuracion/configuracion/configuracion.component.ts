import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  cambiarTema(event){
    let evento=event.target.checked;
    let originalCSS={ "background-color": '#edf2f6' };
    let nuevoCSS = { "background": '#2F4F4F', "color" : '#fff' };
    if(evento){
      $("body").css(nuevoCSS);
    }
    else{
      $("body").css(originalCSS );
    }
  }

}
