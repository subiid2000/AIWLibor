import { Component, OnInit } from '@angular/core';
import { ConfigurationsService } from 'src/services';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(public settingService: ConfigurationsService) { }

  ngOnInit() {
    const defaultId = this.settingService.getSidebarImageIndex();
    const sidebarImgs: HTMLCollection = document.getElementsByClassName('sidebar-img');
    sidebarImgs[defaultId].className = sidebarImgs[defaultId].className + ' active';
  }

  bgChooseClick(id) {
    this.settingService.setSidebarImageIndex(id);
    const sidebarImgs: HTMLCollection = document.getElementsByClassName('sidebar-img');
    for (let i = 0; i < sidebarImgs.length; i++) {
      sidebarImgs[i].className = sidebarImgs[i].className.replace(' active', '');
    }
    sidebarImgs[id].className = sidebarImgs[id].className + ' active';
  }

  filterChooseClick(color) {
    this.settingService.setSidebarFilter(color);
  }

  bgColorChooseClick(color) {
    this.settingService.setSidebarColor(color);
  }
}
