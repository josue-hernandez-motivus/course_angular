import { Component, input, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.component.html',
})


export class CharacterListComponent {
  listName = input<string>();
  characters = input.required<Character[]>();
}
