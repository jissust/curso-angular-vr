import { Component, OnInit } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { ArticlesComponent } from '../articles/articles.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { Router, ActivatedRoute, Params, RouterModule } from '@angular/router';
import { Global } from '../../services/global';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [
    SliderComponent,
    ArticlesComponent,
    SidebarComponent,
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css',
  providers: [ArticleService],
})
export class ArticleComponent implements OnInit {
  public article!: Article;
  public url!: string;

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.url = Global.url;

    this._route.params.pipe().subscribe({
      next: (params) => {
        let id = params['id'];

        this._articleService
          .getArticle(id)
          .pipe()
          .subscribe({
            next: (response) => {
              if (response.article) {
                this.article = response.article;
              } else {
                this._router.navigate(['/home']);
              }
            },
            error: (error) => {
              console.log(error);
            },
          });
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  delete(id: any) {
    Swal.fire({
      title: 'Estas seguro?',
      text: 'Una vez borrado no podras recuperarlos!',
      showDenyButton: true,
      confirmButtonText: 'Confirmar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('el articulo ha sido borrado!');
        this._articleService
          .delete(id)
          .pipe()
          .subscribe({
            next: (response) => {
              this._router.navigate(['/blog']);
            },
            error: (error) => {
              this._router.navigate(['/blog']);
            },
          });
      } else if (result.isDenied) {
        Swal.fire('Tranquilo nada se ha borrado');
      }
    });
  }
}
