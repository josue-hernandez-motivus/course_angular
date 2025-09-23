import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
  templateUrl: './counter-page.html',
  styles: `
  button{
    padding: 10px 20px;
    margin: 10px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 5px;
    border: 1px solid #ccc;
    cursor: pointer;
  }`,
  // Obliga a no usar Zone.js
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterPageComponent {
  counter = 10;
  counterSignal = signal(10);

  // constructor(){
  //   setInterval(() => {
  //     // Esto es un ejemplo de cuando se usa ZoneJS.
  //     //this.counter = this.counter + 1;
  //     // Aqui es un ejemplo del uso de Signals
  //     this.counterSignal.update(current => current + 1);
  //   }, 1000);
  // }

  increaseBy(value: number) {
    this.counter += value;
    // No se recomienda al actualzar una señal
    // this.counterSignal.set(this.counterSignal() + value);
    // Se recomienda actualizar la señal con el metodo update
    this.counterSignal.update(current => current + value);
  }
  reset() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
