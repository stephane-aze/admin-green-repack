import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImageService } from '../services/image/image.service';


@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {
  form: FormGroup;
  errorMessage: string;
  constructor(private formBuilder: FormBuilder, private imageService: ImageService) { }

  ngOnInit(): void {
  }
  initForm() {
    this.form = this.formBuilder.group({
      photos: ['', [Validators.required]],
    });
  }
  get f() { return this.form.controls; }
  onSubmit() {

    const formData: FormData = new FormData();
    formData.append('photos', this.form.get('photos').value);

    this.imageService.upload(formData).subscribe(
      (data) =>{
        console.log(data)
    },
      (error)=>{console.error('error caught in component')
      this.errorMessage = error;
      return null;
    })/**/
    ;
  }
}