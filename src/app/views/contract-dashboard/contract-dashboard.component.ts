import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { APIService } from 'src/services/api.service';
import { ToasterService } from 'angular2-toaster';
import { Router, ActivatedRoute } from '@angular/router';
import { ContractList, ContractDashboard } from 'src/models/contract.model';
import { ConfirmationDialogService } from 'src/app/containers/confirmation-dialog/confirmation-dialog.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-contract-dashboard',
  templateUrl: './contract-dashboard.component.html',
  styleUrls: ['./contract-dashboard.component.scss']
})
export class ContractDashboardComponent implements OnInit {
  uploadFileModalRef: BsModalRef;
  fullContractList: ContractList[];
  recentlyUpdated: ContractList[] = [];
  completedFiles: ContractList[] = [];
  loading = true;
  page_no = 1;
  page_size = 16;
  searchText = '';
  startJob = 1;
  defaultPopUp = '0';
  @ViewChild('uploadFilesModal', { static: false }) uploadFilesModal: TemplateRef<any>;
  dashboardData: ContractDashboard = null;
  constructor(private modalService: BsModalService,
    // private apiService: APIService,
    private toasterService: ToasterService,
    private router: Router,
    private confirmationDialogService: ConfirmationDialogService,
    private activeRoute: ActivatedRoute) {
    const routeParams = this.activeRoute.snapshot.params;
    this.defaultPopUp = routeParams.id;
  }

  ngOnInit() {
    if (this.defaultPopUp === '1') {
      setTimeout(() => {
        this.openDialog();
      }, 100);
    }
    this.getStaticsData();
    this.getAllContractList();
  }
  getStaticsData() {
    // this.apiService.getContractCountDashboard().then((new_result: any) => {
    //   this.dashboardData = new_result['result'];
    // });
  }
  searchContract() {
    this.loading = true;
    this.getAllContractList();
  }

  getAllContractList() {
    // const body = {
    //   search_text: this.searchText,
    //   page_no: this.page_no,
    //   page_size: this.page_size,
    //   sort_column: 'created_date',
    //   sort_order: 'desc',
    //   status: -1
    // };
    // this.apiService.getAllContractList(body).then((result: any) => {
    //   const data = result;
    //   if (data['code'] === 1) {
    //     this.fullContractList = data['result'];
    //     const length = this.fullContractList.length;
    //     if (length > 0) {
    //       if (this.searchText !== '') {
    //         this.recentlyUpdated = this.fullContractList.slice(0, 12);
    //         this.completedFiles = [];
    //       } else {
    //         this.recentlyUpdated = this.fullContractList.slice(0, 4);
    //         if (length > 4) {
    //           this.completedFiles = this.fullContractList.slice(4, 16);
    //         }
    //       }
    //     } else {
    //       this.fullContractList = [];
    //       this.recentlyUpdated = [];
    //       this.completedFiles = [];
    //     }
    //     this.loading = false;
    //     if (this.startJob === 1) {
    //       setTimeout(() => {
    //         this.getStaticsData();
    //         this.getAllContractList();
    //       }, 30000);
    //     }
    //   } else {
    //     this.loading = false;
    //     this.toasterService.pop('error', 'Error', data['message']);
    //   }
    // });
  }

  openDialog() {
    this.uploadFileModalRef = this.modalService.show(this.uploadFilesModal, { class: 'modal-lg' });
  }

  onCloseDialog() {
    this.uploadFileModalRef.hide();
  }

  onSaved(saved) {
    this.uploadFileModalRef.hide();
    this.getStaticsData();
    this.getAllContractList();
  }
  ngOnDestroy() {
    this.startJob = 0;
  }

  removeContractById(contractId, name) {
    // this.confirmationDialogService.confirm('Please confirm..', 'Are you sure to delete ' + name + ' ?')
    //   .then((confirmed) => {
    //     if (confirmed) {
    //       const body = {
    //         contract_id: contractId,
    //       };
    //       this.apiService.removeContractById(body).then((result: any) => {
    //         const data = result;
    //         if (data['code'] === 1) {
    //           this.getStaticsData();
    //           this.getAllContractList();
    //           this.toasterService.pop('success', 'Success', 'Contract details removed successfully');
    //         } else {
    //           this.toasterService.pop('error', 'Error', data['message']);
    //         }
    //       });
    //     }
    //   });
  }
}
