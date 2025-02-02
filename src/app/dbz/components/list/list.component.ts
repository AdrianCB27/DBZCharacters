import {Component,EventEmitter,Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
 templateUrl: 'list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent { 

  @Input()
  public characterList: Character[]=[
    {
      id:"aasd34235",
      name: "Trunk",
      power: 10
    }
  ]
  @Output() 
  onDelete: EventEmitter<string>=new EventEmitter();
  onDeleteCharacter (id?:string):void{
    if(!id) return;
    this.onDelete.emit(id);
  }
}
