import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent {
  @Input()
  public listadoPersonajes: Personaje[] = [
    {
      name: 'Ten Shin Han',
      poder: 50000,
    },
  ];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  public onDeletePersonaje(id?: string): void {
    if (!id) return;
    console.log(id);
    this.onDelete.emit(id);
  }
}
