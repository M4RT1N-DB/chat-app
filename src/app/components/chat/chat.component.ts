import { Component, OnInit, Input } from '@angular/core';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  
  infoUsuarios={};

  constructor(public serviceInfo: UserInfoService) {
    this.infoUsuarios = this.serviceInfo.infoDni;
    console.log(this.infoUsuarios);

  }

  ngOnInit(): void {
   
  }
}
