import { Component } from '@angular/core';
import { PeliculasComponent } from '../peliculas/peliculas.component';
import { PruebasComponent } from '../pruebas/pruebas.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mi-componente',
  standalone: true,
  imports: [PeliculasComponent, PruebasComponent, CommonModule],
  templateUrl: './mi-componente.component.html',
})
export class MiComponente {
  public titulo!: string;
  public comentario!: string;
  public year!: number;
  public mostrarPeliculas!: boolean;

  constructor() {
    this.titulo = 'Hola mundo desde mi componente, este es un string';
    this.comentario = 'Este es un comentario';
    this.year = 2020;
    this.mostrarPeliculas = true;

    console.log(this.titulo, this.comentario, this.year);
  }

  ocultarPeliculas() {
    this.mostrarPeliculas = false;
  }
}
