import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-msgiconbtn',
  templateUrl: './msgiconbtn.component.html',
  styleUrls: ['./msgiconbtn.component.scss']
})
export class MsgiconbtnComponent implements OnInit {
  @Input() number: string;
  @Input() icon: string;
  constructor() { }

  ngOnInit() {
  }
}
