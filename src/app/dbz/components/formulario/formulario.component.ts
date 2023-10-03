import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  @Output()
  public onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();

  public personaje: Personaje = {
    name: '',
    poder: 0,
  };

  emitirPersonaje(): void {
    if (this.personaje.name.length === 0) return;
    this.onNewPersonaje.emit(this.personaje);
    this.personaje = { name: '', poder: 0 };
  }
}
