import { Component, effect, input, output } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
})
export class SearchInputComponent {
  placeholder = input<string>('Buscar');
  value = output<string>();
  inputValue = input<string>('');
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
