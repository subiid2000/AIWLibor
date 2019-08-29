import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/services';
import { ToasterService } from 'angular2-toaster';
import { DomSanitizer } from '@angular/platform-browser';
import { KeycloakService } from 'src/app/core/auth/keycloak.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  processing = false;
  imageFile: File;
  fileName: any = null;
  uploadStart = false;
  uploading = false;
  startUploading = 1;
  showDetails = false;
  panCardDetails: any;
  previewImage: any = '';
  orginalImage: any;
  processedImage: any = '';
  jsonData: any;
  constructor(private apiService: APIService,
    private domSanitizer: DomSanitizer,
    private toasterService: ToasterService) { }

  ngOnInit() {
  if (KeycloakService.isLogged()) {
      KeycloakService.loadUserProfile();
    }
  }

  changeImageFile(event) {
    this.processing = true;
    const self = this;
    const file = event.target.files[0];
    this.fileName = file.name;
    this.imageFile = file;
    this.showDetails = false;
    const reader = new FileReader();
    reader.readAsDataURL(file); // read file as data url
    reader.onload = (event_new: any) => { // called once readAsDataURL is completed
      this.previewImage = event_new.target.result;
      this.uploadImage();
    };
  }
  // upload audio file
  uploadImage() {
    this.uploading = true;
    this.startUploading = 2;
    if (this.startUploading === 2) {
      setTimeout(() => {
        this.startUploading = 3;
        setTimeout(() => {
          this.startUploading = 4;
        }, 5000);
      }, 4000);
    }

    const formData = new FormData();
    formData.append('file', this.imageFile);
    const body = formData;
    this.apiService.uploadImageFile(body).then((result: any) => {
      const data = result;
      this.uploadStart = false;
      this.startUploading = 1;
      if (data['code'] === 1) {
        this.showDetails = true;
        this.panCardDetails = data['result'];
        this.jsonData = { name: this.panCardDetails['name'], father: this.panCardDetails['father_name'], date_of_birth: this.panCardDetails['dob'], account_no: this.panCardDetails['pan'], status: 'Successfully processed', created_date: new Date() };
        this.orginalImage = this.previewImage; // atob(encodeURIComponent(this.panCardDetails['uploaded_image']));
        this.previewImage = 'data:image/jpeg;base64,' + this.panCardDetails['processed_image'];
        this.processedImage = 'data:image/jpeg;base64,' + this.panCardDetails['processed_image'];
      } else {
        this.removeImage();
        this.toasterService.pop('error', 'Error', data['message']);
      }
    });
  }
  // remove audio file
  removeImage() {
    this.imageFile = null;
    this.uploadStart = false;
    this.processing = false;
    this.fileName = null;
    this.showDetails = false;
    this.uploading = false;
    this.startUploading = 1;
    this.previewImage = '';
  }

  tabClick(evt, id) {
    const tabcontents = document.querySelectorAll('.h-tab .tab-content');
    for (let i = 0; i < tabcontents.length; i++) {
      (<HTMLElement>tabcontents[i]).style.display = 'none';
    }
    const tablinks = document.querySelectorAll('.h-tab .tab-link');
    for (let i = 0; i < tablinks.length; i++) {
      const tablink = <HTMLElement>tablinks[i];
      tablink.className = tablink.className.replace(' active', '');
    }
    document.getElementById(id).style.display = 'block';
    evt.currentTarget.className += ' active';
  }
  vTabClick(evt, id) {
    const tabcontents = document.querySelectorAll('.v-tab .tab-content');
    for (let i = 0; i < tabcontents.length; i++) {
      (<HTMLElement>tabcontents[i]).style.display = 'none';
    }
    const tablinks = document.querySelectorAll('.v-tab .tab-link');
    for (let i = 0; i < tablinks.length; i++) {
      const tablink = <HTMLElement>tablinks[i];
      tablink.className = tablink.className.replace(' active', '');
    }
    document.getElementById(id).style.display = 'block';
    evt.currentTarget.className += ' active';
  }


}
