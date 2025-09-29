import { NgClass, UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragon-ball-page.html',
  // imports: [NgClass]
})
export class DragonBallPageComponent {
  name = signal('Gohan');
  power = signal(0);



  characters = signal<Character[]>([
    {
      id: 1,
      name: 'Goku',
      power: 9001,
    },
    // {
    //   id: 2,
    //   name: 'Vegeta',
    //   power: 8000,
    // },
    // {
    //   id: 3,
    //   name: 'Piccolo',
    //   power: 3000,
    // },
    // {
    //   id: 4,
    //   name: 'Yamcha',
    //   power: 500,
    // }
  ]);
  // powerClasses = computed(() => {
  //   return {
  //     'text-danger': this.characters().power > 9000,
  //     'text-warning': this.characters().power > 5000,
  //     'text-success': this.characters().power > 1000,
  //   }
  // });

  addCharacter() {
    if(! this.name() || !this.power() || this.power() < 0) return;

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    }

    // Usar el metodo update es mejor que usar el metodo set, porque no se actualiza
    // la señal completa, sino que se actualiza solo el valor de la señal.
    this.characters.update(current => [...current, newCharacter]);

    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
