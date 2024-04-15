import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-pelicula',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pelicula.component.html',
  styleUrl: './pelicula.component.css',
})
export class PeliculaComponent implements OnInit {
  @Input() pelicula!: Pelicula;
  @Output() MarcarFavorita = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  seleccionar(event: Event, pelicula: Pelicula) {
    this.MarcarFavorita.emit({
      pelicula: pelicula,
    });
  }
}
