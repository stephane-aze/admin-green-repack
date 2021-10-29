import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CategoryService } from '../services/category/category.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.scss']
})
export class CategoryCreateComponent implements OnInit {
  formC: FormGroup;
  errorMessage: string;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.formC = this.formBuilder.group({
      slug: ['', [Validators.required]],
      name: ['', [Validators.required]],

    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.formC.controls; }
  onSubmit() {
    const slug = this.formC.get('slug').value;
    const name = this.formC.get('name').value;
    const category = {
      slug,
      name
    }


    this.categoryService.createCategory(category).subscribe(
      (data) => {
        //this.a
        this.router.navigate(['/categories']);
      },
      (error) => {
        this.errorMessage = error;
      }
    );/**/
  }

}
