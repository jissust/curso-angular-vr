import { CommonModule } from '@angular/common';
import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { SliderComponent } from '../slider/slider.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { PeliculaComponent } from '../pelicula/pelicula.component';
import { PeliculaService } from '../../services/peliculas.service';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [CommonModule, SliderComponent, SidebarComponent, PeliculaComponent],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css',
  providers: [PeliculaService],
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {
  public titulo!: string;
  public peliculas!: Array<Pelicula>;
  public favorita!: Pelicula;

  constructor(private _peliculaService: PeliculaService) {
    this.titulo = 'Componente peliculas';
    this.peliculas = this._peliculaService.getPeliculas();
  }

  ngOnInit(): void {

  }

  ngDoCheck(): void {}

  ngOnDestroy(): void {

  }

  cambiarTitulo() {
    this.titulo = 'EL TITULO HA SIDO CAMBIADO';
  }

  mostrarFavorita(event: any) {
    this.favorita = event.pelicula;
  }
}
