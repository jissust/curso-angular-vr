import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SliderComponent } from '../slider/slider.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-pagina',
  standalone: true,
  imports: [CommonModule, SliderComponent, SidebarComponent],
  templateUrl: './pagina.component.html',
  styleUrl: './pagina.component.css',
})
export class PaginaComponent implements OnInit {
  private _router = inject(ActivatedRoute);
  public nombre!: string;
  constructor() {}

  ngOnInit(): void {
    this._router.params.subscribe((params: Params) => {
      this.nombre = params['nombre'];
    });
  }

  navegate(nombre: string) {}
}
