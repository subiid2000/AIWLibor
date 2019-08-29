import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { APIService } from 'src/services/api.service';
import { ToasterService } from 'angular2-toaster';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.scss']
})
export class UploadFilesComponent implements OnInit {
  @Output('onSaved') onSaved: EventEmitter<boolean> = new EventEmitter<boolean>();
  fileUploadForm: FormGroup;
  processing = false;
  options = true;
  value = 1;
  constructor(private apiService: APIService,
    private formBuilder: FormBuilder,
    private toasterService: ToasterService,
    private router: Router) { }

    tagList = [];
  ngOnInit() {
    this.createUploadForm();
  }

  createUploadForm() {
    this.fileUploadForm = this.formBuilder.group({
      files: [[]],
      description: [''],
      contractTag: [[]],
      uploadType: ['1'],
      fileUrl: ['']
    });
  }

  updateUI(actionBool) {
    this.options = actionBool;
  }

  addTag(event: any) {
    const tag = [{value: this.value, label: event.target.value}];
    this.value ++;
    this.tagList = this.tagList.concat(tag);
  }

  closeButtonTapped(event: any) {

  }
  clear() {

  }
  uploadDocument() {
      const formData = new FormData();
      const length = this.fileUploadForm.controls.files.value.length;
      if (length !== 0) {
        this.processing = true;
        for (let i = 0; i < length; i++) {
          formData.append('file', this.fileUploadForm.controls.files.value[i]);
        }
        const tagValues = this.fileUploadForm.controls.contractTag.value;
        const length_tag = tagValues.length;
        for (let i = 0; i < length_tag; i++) {
          formData.append('contract_tag', tagValues[i]);
        }
        formData.append('contract_description', this.fileUploadForm.controls.description.value);
        formData.append('upload_type', this.fileUploadForm.controls.uploadType.value);
        formData.append('folder_url', this.fileUploadForm.controls.fileUrl.value);
        const body = formData;
        this.apiService.uploadMultipleDocument(body).then((result: any) => {
          const data = result;
          if (data['code'] === 1) {
            this.processing = false;
            this.toasterService.pop('success', 'Success', data['message']);
          } else {
            this.processing = false;
            this.toasterService.pop('error', 'Error', data['message']);
          }
          this.onSaved.emit(true);
        });
      }
    }
}

