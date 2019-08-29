import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { JsonConvert, OperationMode, ValueCheckingMode } from 'json2typescript';
import { Router } from '@angular/router';
import { constants } from './constant';
import { CommonResult } from '../models/common.model';
import * as jQuery from 'jquery';
import { Promise } from 'core-js';
import { ContractList, ContractDashboard } from 'src/models/contract.model';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  apiRoot: string = environment.apibaseUrl;
  authorization = btoa(environment.authUserName + ':' + environment.authPassword);
  jsonConvert: JsonConvert = new JsonConvert();
  constructor(private http: HttpClient, public router: Router) {
    this.jsonConvert.operationMode = OperationMode.ENABLE; // print some debug data
    this.jsonConvert.ignorePrimitiveChecks = false; // don't allow assigning number to string etc.
    this.jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL; // never allow null
  }

  // get User Login
  getUserLogin(body) {
    const url = constants.apiEndPoints.getUserLogin;
    return new Promise(resolve => {
      // this.http.post<CommonResult>(this.apiRoot + '/' + url, body).subscribe(data => {
      //   if (data.code === 1) {
      //     const newData = new CommonResult();
      //     newData.status = data.status;
      //     newData.message = data.message;
      //     newData.code = data.code;
      //     newData.result = null;
      //     resolve(newData);
      //   } else {
      const newData = new CommonResult();
      newData.status = '1';
      newData.code = 1;
      newData.message = 'success';
      resolve(newData);
      // }
      //   },
      //     err => {
      //       resolve(this.sessionOutMethod(err));
      //     });
      // });
    });
  }

 // Upload image file
 uploadImageFile(body) {
    const url = constants.apiEndPoints.uploadImage;
    return new Promise(resolve => {
      this.http.post(this.apiRoot + '/' + url, body).subscribe(data => {
          const newData = new CommonResult();
          newData.status = '1';
          newData.message = 'Success';
          newData.code = 1;
          newData.result = data['result'];
          resolve(newData);
      },
        err => {
          resolve(this.sessionOutMethod(err));
        });
    });
  }

  sessionOutMethod(error) {
    if (error.status === 404) {
      return this.router.navigate(['404']);
    } else if (error.status === 500) {
      return this.router.navigate(['500']);
    } else if (error.error.message === 'Route [login] not defined.') {
      return this.router.navigate(['sessionout']);
    } else {
      const newData = new CommonResult();
      newData.status = 'Failure';
      newData.code = 0;
      newData.message = error.message;
      return newData;
    }
  }
    // GetAllContractList
    getAllContractList(body) {
      const url = constants.apiEndPoints.get_all_contract_list;
      return new Promise(resolve => {
        this.http.post<CommonResult>(this.apiRoot + '/' + url, body).subscribe(data => {
            const newData = new CommonResult();
            newData.status = data['status'];
            newData.message =  data['message'];
            newData.code = data['code'];
            newData.total_records = data['total_records'];
            newData.current_page = data['current_page'];
            newData.page_size = data['page_size'];
            newData.result =  this.jsonConvert.deserialize(data['result'], ContractList);
            resolve(newData);
        },
          err => {
            resolve(this.sessionOutMethod(err));
          });
    });
  }
  // ContractCountDashboard
 getContractCountDashboard() {
  const url = constants.apiEndPoints.get_contract_count_dashboard;
  return new Promise(resolve => {
    this.http.get<CommonResult>(this.apiRoot + '/' + url).subscribe(data => {
      const newData = new CommonResult();
      newData.status = '1';
      newData.message =  'Success';
      newData.code = 1;
      newData.result =  this.jsonConvert.deserialize(data['result'], ContractDashboard);
      resolve(newData);
    },
      err => {
        resolve(this.sessionOutMethod(err));
      });
});
}

removeContractById(body) {
  const url = constants.apiEndPoints.remove_contract_by_id;
  return new Promise(resolve => {
    this.http.post<CommonResult>(this.apiRoot + '/' + url, body).subscribe(data => {
        const newData = new CommonResult();
        newData.status = data['status'];
        newData.message =  data['message'];
        newData.code = data['code'];
        newData.result = null;
        resolve(newData);
    },
      err => {
        resolve(this.sessionOutMethod(err));
      });
});
}
}
