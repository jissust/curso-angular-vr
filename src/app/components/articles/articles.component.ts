import { OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Article } from '../../models/article';
import { Global } from '../../services/global';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css',
})
export class ArticlesComponent implements OnInit {
  @Input() articles!: Article[];
  public url!: string;
  public fecha!: Date;

  constructor() {
    this.fecha = new Date();
  }

  ngOnInit(): void {
    this.url = Global.url;
  }
}
