import { Component, OnInit } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [SliderComponent, SidebarComponent, FormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent implements OnInit {
  public user!: any;

  constructor() {
    this.user = {
      nombre: '',
      apellidos: '',
      bio: '',
      genero: '',
    };
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.user);
  }
}
