import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  title = 'app works!';
  categoryListData : any = []

  //sorting
  key: string = 'category_name';
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
  p: number = 1;


  constructor( private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryList();
  }

  categoryList(){
  this.categoryService.categoryList().subscribe(result => {
      this.categoryListData = result['body']['data']['data']
  });
} 

}
