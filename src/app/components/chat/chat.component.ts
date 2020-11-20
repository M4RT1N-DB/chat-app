import { Component, OnInit, Input } from '@angular/core';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  infoUsuarios = {};

  /*
  apellido_materno: "HUAYHUARIMA"
apellido_paterno: "BOZA"
codigo_verificacion: 5
fecha_nacimiento: "1970-06-02"
nombre_completo: "BOZA HUAYHUARIMA, SEGUNDINA"
nombres: "SEGUNDINA"
numero: "09448586"
origen: 0
sexo: null
  */

  constructor(public serviceInfo: UserInfoService) {
    this.infoUsuarios = this.serviceInfo.infoDni;
    console.log(this.infoUsuarios);
  }

  ngOnInit(): void {}
}
