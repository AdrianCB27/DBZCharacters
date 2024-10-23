import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';
@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.html',
})
export class MainPageComponent {
  constructor(private dbzService:DbzService) {
  }
  get characters(): Character [] {
    return [...this.dbzService.characters];
  }
  onDeleteCharcacter(id:string){
    this.dbzService.onDeleteCharacter(id);
  }
  onNewCharacter(character:Character){
    console.log(character);
    this.dbzService.onNewCharacter(character);
  }

}
