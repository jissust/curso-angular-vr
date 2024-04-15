import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{
  public searchString!: string;

  constructor(
    private _router: Router
  ){

  }

  ngOnInit(): void {
      
  }

  goSearch(){
    this._router.navigate(['/buscar', this.searchString])
  }
}
