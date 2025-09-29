import { NgClass, UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";
import { Character } from "../../interfaces/character.interface";

@Component({
  templateUrl: './dragon-ball-super-page.html',
  selector: 'dragonball-super',
  // imports: [NgClass]
  imports: [CharacterListComponent, CharacterAddComponent]
})
export class DragonBallSuperPageComponent {
  name = signal('');
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

  addCharacter(character: Character) {
    this.characters.update(current => [...current, character]);
  }

}
