import { Component } from '@angular/core';
import { CategoryService } from '../_services/category.service';
import { CategoryModel } from '../_models/category';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  categories:CategoryModel[]
  selectedTab: number | null = null; // Seçili tab'ı takip etmek için
  constructor(private categoryService: CategoryService) {

    this.getCategories()

  }
  getCategories(){
    this.categoryService.getCategories().subscribe({
      next:value=> this.categories=value,
      error:err=> console.log(err)
    })
  }
  // Tab seçimi yap
selectTab(tabId: number): void {
  this.selectedTab = tabId;
}


}
