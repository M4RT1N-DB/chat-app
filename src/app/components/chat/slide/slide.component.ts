import { Component, OnInit, Input } from '@angular/core';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css'],
})
export class SlideComponent implements OnInit {
  @Input() infoUser:any={}
  
  dataDummy = [];
  color: string;
  
  constructor(private serviceInfo: UserInfoService) {
    this.dataDummy = this.serviceInfo.cargarContactos();
  }

  ngOnInit(): void {}
}
