import { Component, OnInit } from '@angular/core';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css'],
})
export class SlideComponent implements OnInit {
  dataDummy = [];
  color: string;

  constructor(private serviceInfo: UserInfoService) {
    this.dataDummy = this.serviceInfo.cargarContactos();
  }

  ngOnInit(): void {}
}
