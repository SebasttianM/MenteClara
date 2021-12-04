import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtComponent } from './components/art/art.component';
import { ArticuloComponent } from './components/articulo/articulo.component';

const routes: Routes = [
  {path:'articulo',component:ArtComponent},
  {path:'',component:ArticuloComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
