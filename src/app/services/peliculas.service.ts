import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';

@Injectable()
export class PeliculaService {
  public peliculas!: Pelicula[];

  constructor() {
    this.peliculas = [
      new Pelicula(
        'Spider Man',
        2020,
        'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2019/08/spider-man-lejos-casa.jpg?tf=1200x'
      ),
      new Pelicula(
        'Batman',
        2018,
        'https://i.blogs.es/1ef01f/thebatmansuit/1366_2000.jpg'
      ),
      new Pelicula(
        'Capitan America',
        2015,
        'https://xoandelugo.org/wp-content/uploads/2018/06/capitan-america.jpg'
      ),
      new Pelicula(
        'Venom',
        2011,
        'https://i.blogs.es/74656c/venom-capa-3/1366_2000.jpg'
      ),
    ];
  }

  holaMundo() {
    return 'Hola mundo desde un servicio de Angular';
  }

  getPeliculas() {
    return this.peliculas;
  }
}
