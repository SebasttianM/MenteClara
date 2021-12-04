import { Component, OnInit } from '@angular/core';
import { articulosModel } from 'src/app/models/articulo.models';
import { ArticuloService } from 'src/app/services/articulo.service';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})
export class ArtComponent implements OnInit {

  public articulos: articulosModel[] = [];

  constructor(private articuloService:ArticuloService ) { }

  async ngOnInit(): Promise<void> {
    this.articulos = await this.articuloService.getArticulos();
    console.log(this.articulos)
  }

}
