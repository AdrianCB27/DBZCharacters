import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = "Primera aplicacion en angular";
  public contador: number =0;

  incrementar(numero:number):void {
    this.contador+=numero;
  }
  resetearContador():void{
    this.contador=0;
  }
   
}

