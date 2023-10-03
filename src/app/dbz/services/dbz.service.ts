import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Personaje } from '../interfaces/personaje.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public personajes: Personaje[] = [
    { id: uuid(), name: 'Goku', poder: 10000000 },
    { id: uuid(), name: 'Vegeta', poder: 5000000 },
    { id: uuid(), name: 'Krilin', poder: 100000 },
    { id: uuid(), name: 'Yansha', poder: 150000 },
    { id: uuid(), name: 'Picoro', poder: 1500000 },
    { id: uuid(), name: 'Gohan', poder: 2000000 },
    { id: uuid(), name: 'Trunks', poder: 2500000 },
  ];

  addPersonaje(personaje: Personaje): void {
    const newPersonaje = { id: uuid(), ...personaje };
    this.personajes.push(newPersonaje);
  }

  deletePersonajePorId(id: string): void {
    this.personajes = this.personajes.filter(
      (personaje) => personaje.id !== id
    );
  }
}
