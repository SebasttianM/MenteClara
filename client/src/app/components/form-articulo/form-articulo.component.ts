import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { articulosModel } from 'src/app/models/articulo.models';
import { ArticuloService } from 'src/app/services/articulo.service';

@Component({
  selector: 'app-form-articulo',
  templateUrl: './form-articulo.component.html',
  styleUrls: ['./form-articulo.component.css']
})
export class FormArticuloComponent implements OnInit {

  public formGroup: FormGroup = new FormGroup({});


  constructor(private formBuilder: FormBuilder) { }


  ngOnInit(): void {
  }

}
