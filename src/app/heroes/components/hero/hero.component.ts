import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = "Ironman";
  public age : number =45;
  public heroes: string[]=["Spiderman","Ironman","Martosman","Hulk","Cipote"];
  public heroeBorrado :string|undefined="";
  get capitalizedName(){
    return this.name.toUpperCase();
  }
  getHeroDescription():string{
    return `${ this.name } - ${ this.age }`;
  }
  changeHero(){
    this.name=this.name === "Ironman" ? "Spiderman": "Ironman";
  }
  changeAge(){
    this.age= this.age=== 23 ? 45:23;
  }
  resetForm():void{
    this.name='Ironman';
    this.age=45;
    this.heroes=["Spiderman","Ironman","Martosman","Hulk","Cipote"];
    this.heroeBorrado="";
  }
  estaBorrado(): string{
    return (this.heroeBorrado == "") ? "No se ha borrado nada":"El ultimo heroes borrado es "+this.heroeBorrado;
  }

  borrarUltimo(){
   this.heroeBorrado=this.heroes.pop();
  }




}
