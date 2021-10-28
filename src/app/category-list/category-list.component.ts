import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from '../models/Category';
import { CategoryService } from '../services/category/category.service';
import { DataLoaderService } from '../shared/data-loader.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
  providers: [DataLoaderService]
})
export class CategoryListComponent implements OnInit {
  categories$: Observable<Category[]>;
  constructor(private router: Router, private categoryService: CategoryService, private categoryLoader: DataLoaderService<Category[]>) { }

  ngOnInit(): void {
    this.initProductsLoader()
  }
  goToCreateCategory(){
    this.router.navigateByUrl("/create_category");
  }
  private initProductsLoader(): void {
    const bars$ = this.getCategories();
    this.categoryLoader.init(bars$);
    this.categories$ = this.categoryLoader.stream$;
  }
  private getCategories(): Observable<Category[]>{

    return this.categoryService.getCategories();
  }
}
