import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `<h1>{{title}}</h1>
    <h2>contador: {{contador}}</h2>
    <button (click)="incrementar(1)">+1</button>
    <button (click)="resetearContador()" >reset</button>
    <button (click)="incrementar(-1)" >-1</button>`
})

export class Contador{
    public title: string = "Primera aplicacion en angular";
    public contador: number =0;
  
    incrementar(numero:number):void {
      this.contador+=numero;
    }
    resetearContador():void{
      this.contador=3;
    }

}
