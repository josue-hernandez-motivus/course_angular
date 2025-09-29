import { Component, signal } from '@angular/core';

@Component({
  selector: 'dragonball-character-add',
  templateUrl: './character-add.component.html',
})
export class CharacterAddComponent {
  name = signal('');
  power = signal(0);

  addCharacter() {
    if(! this.name() || !this.power() || this.power() < 0) return;

    const newCharacter: Character = {
      id: 0,
      // id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    }

    // Usar el metodo update es mejor que usar el metodo set, porque no se actualiza
    // la señal completa, sino que se actualiza solo el valor de la señal.
    // this.characters.update(current => [...current, newCharacter]);

    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }

}
