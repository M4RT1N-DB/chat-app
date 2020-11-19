import { Component, OnInit } from '@angular/core';
import { UserInfoService } from 'src/app/services/user-info.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  colors: string[] = [
    'rgba(22, 160, 133, 1)',
    'rgba(39, 174, 96, 1)',
    'rgba(41, 128, 185, 1)',
    'rgba(211, 98, 59, 1)',
    'rgba(1, 163, 164, 1)',
    'rgba(238, 82, 83, 1)',
    'rgba(10, 189, 227, 1)',
    'rgba(106, 176, 76, 1)',
    'rgba(34, 166, 179, 1)',
    'rgba(113, 88, 226, 1)',
  ];
  color: string;
  dni: string;
  info = {};
  loading:boolean=false;
  //-------------------------------
  forma: FormGroup;

  //-------------------------------
  constructor(
    private serviceInfo: UserInfoService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.color = this.getRandom();
  }

  ngOnInit(): void {
    this.crearFormulario();
  }

  //-----------------------
  getRandom() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }
  //-------------------------
  guardar() {
    this.loading=true;

    if (this.forma.status.toLowerCase() === 'invalid') {
      return Object.values(this.forma.controls).forEach((control) =>
        control.markAllAsTouched()
      );
    }
    this.dni = this.forma.value.dni;
    this.validar();
  }

  validar() {
    return this.serviceInfo.userInfoGen(this.dni).subscribe(data => {
       this.info = data;
       this.router.navigate(['chat']);
    });

  }

  get validValue() {
    return this.forma.get('dni').invalid && this.forma.get('dni').touched;
  }

  crearFormulario() {
    this.forma = this.fb.group({
      dni: [
        '',
        [Validators.minLength(8), Validators.maxLength(8), Validators.required],
      ],
    });
  }
  //-----------------------------------------
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.serviceInfo.infoDni = this.info;
  }
}
