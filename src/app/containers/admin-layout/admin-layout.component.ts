import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConfigurationsService } from 'src/services';


@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit, OnDestroy {
    public id: number;
    public backgroundColor: string;
    constructor(public settingService: ConfigurationsService) {
      this.id = 1;
      this.backgroundColor = '#D80B0B';
    }

    ngOnInit() {
      // this.settingService.sidebarImageIndexUpdate.subscribe((id: number) => {
      //   this.id = id + 1;
      // });
      // this.settingService.sidebarColorUpdate.subscribe((color: string) => {
      //   this.backgroundColor = color;
      // });
    }

    ngOnDestroy() {
      // this.settingService.sidebarImageIndexUpdate.unsubscribe();
      // this.settingService.sidebarColorUpdate.unsubscribe();
    }
  }
