import { NgClass, UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { CharacterAddComponent } from "../../components/dragonball/character-app/character-add.component";
interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragon-ball-super-page.html',
  selector: 'dragonball-super',
  // imports: [NgClass]
  imports: [CharacterListComponent, CharacterAddComponent]
})
export class DragonBallSuperPageComponent {
  name = signal('Gohan');
  power = signal(0);


  characters = signal<Character[]>([
    {
      id: 1,
      name: 'Goku',
      power: 9001,
    },
    {
      id: 2,
      name: 'Vegeta',
      power: 8000,
    },
  ]);


}
