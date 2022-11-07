import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/cliente';

@Component({
  selector: 'app-form-ng-moldel',
  templateUrl: './form-ng-moldel.component.html',
  styleUrls: ['./form-ng-moldel.component.css']
})
export class FormNgMoldelComponent implements OnInit {

  cliente : any = {}

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.cliente)
  }

}
