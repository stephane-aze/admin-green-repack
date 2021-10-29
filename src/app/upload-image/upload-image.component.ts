import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ImageService } from '../services/image/image.service';


@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {
  form1: FormGroup;
  errorMessage: string;
  constructor(private formBuilder: FormBuilder,private router:Router, private imageService: ImageService) { }

  ngOnInit(): void {
  }
  initForm() {
    this.form1 = this.formBuilder.group({
      photos: ['', [Validators.required]],
    });
  }
  get f() { return this.form1.controls; }
  onSubmit() {

    const formData: FormData = new FormData();
    formData.append('photos', this.form1.get('photos').value);

    this.imageService.upload(formData).subscribe(
      (data) =>{
        this.router.navigate(['/dashboard']);
    },
      (error)=>{console.error('error caught in component')
      this.errorMessage = error;
      return null;
    })/**/
    ;
  }
}
