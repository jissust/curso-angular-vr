import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Article } from '../../models/article';
import { FormsModule } from '@angular/forms';
import { ArticleService } from '../../services/article.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Global } from '../../services/global';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-article-new',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, HttpClientModule],
  templateUrl: './article-new.component.html',
  styleUrl: './article-new.component.css',
  providers: [ArticleService],
})
export class ArticleNewComponent implements OnInit {
  public article!: Article;
  public status!: string;
  public fileName!: string;
  public url!: string;
  public imageChange!: File;
  public page_title!: string;
  public is_edit!: boolean;

  constructor(
    private _articleService: ArticleService,
    private _router: Router,
    private _http: HttpClient
  ) {
    this.article = new Article('', '', '', '');
    this.page_title = 'Crear articulo';
    this.is_edit = false;
  }

  ngOnInit(): void {
    this.url = Global.url;
  }

  onSubmit() {
    var formData = new FormData();
    formData.append('file', this.imageChange);

    this._articleService
      .create(this.article)
      .pipe()
      .subscribe({
        next: (response) => {
          if (response.status == 'success') {
            this.status = 'success';
            this.article = response.article;
            this._http
              .post(this.url + 'upload-image/' + this.article._id, formData)
              .pipe()
              .subscribe({
                next: (response) => {
                  Swal.fire(
                    'Articulo creado!',
                    'El articulo se ha creado correctamente',
                    'success'
                  );
                },
                error: (error) => {
                  console.log(error);
                },
              });

            this._router.navigate(['/blog']);
          } else {
            this.status = 'error';
          }
        },
        error: (error) => {
          this.status = 'error';
        },
      });
  }
  onFileSelected(event: any) {
    this.imageChange = event.target.files[0];
    this.fileName = event.target.files[0].name;
  }
}
