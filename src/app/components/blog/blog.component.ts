import { Component, OnInit } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ArticleService } from '../../services/article.service';
import { HttpClientModule } from '@angular/common/http';
import { Article } from '../../models/article';
import { CommonModule } from '@angular/common';
import { Global } from '../../services/global';
import { ArticlesComponent } from '../articles/articles.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    SliderComponent,
    SidebarComponent,
    HttpClientModule,
    CommonModule,
    ArticlesComponent,
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
  providers: [ArticleService],
})
export class BlogComponent implements OnInit {
  public articles!: Article[];
  public url!: string;
  constructor(private _articleService: ArticleService) {
    this.url = Global.url;
  }

  ngOnInit(): void {
    this._articleService
      .getArticles()
      .pipe()
      .subscribe({
        next: (response) => {
          if (response.articles) {
            this.articles = response.articles;
          }
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}
