import { Component, effect, input, linkedSignal, output } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
})
export class SearchInputComponent {
  placeholder = input<string>('Buscar');

  initialValue = input<string>('');

  value = output<string>();
  inputValue = linkedSignal<string>(() =>this.initialValue() ?? '');
  debounceTime = input<number>(500);

  // Ejemplo de efecto para debounce
  // Aplicado a la busqueda.
  debounceEffect = effect((onCleanup) => {
    if(this.inputValue()) {
      const value = this.inputValue();
      const timeout = setTimeout(() => {
        this.value.emit(value);
      }, this.debounceTime());
      onCleanup(() => {
        clearTimeout(timeout);
      });
    }
  });
}
