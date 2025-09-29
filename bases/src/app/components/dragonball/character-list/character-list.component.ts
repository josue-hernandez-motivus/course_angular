import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.component.html',
})


export class CharacterListComponent {
  listName = input<string>();
  characters = input.required<Character[]>();
}
