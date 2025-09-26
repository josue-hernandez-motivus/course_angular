import { NgClass, UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragon-ball-page.html',
  imports: [NgClass]
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
    {
      id: 2,
      name: 'Vegeta',
      power: 8000,
    },
    {
      id: 3,
      name: 'Piccolo',
      power: 3000,
    },
    {
      id: 4,
      name: 'Yamcha',
      power: 500,
    }
  ]);
  // powerClasses = computed(() => {
  //   return {
  //     'text-danger': this.characters().power > 9000,
  //     'text-warning': this.characters().power > 5000,
  //     'text-success': this.characters().power > 1000,
  //   }
  // });
}
