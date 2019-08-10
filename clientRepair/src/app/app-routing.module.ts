import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateComponent} from './create/create.component';
import {SearchComponent} from './search/search.component';
import {EditComponent} from './edit/edit.component';
import {DeleteComponent} from './delete/delete.component';

const routes: Routes = [
  {path:'create', component: CreateComponent},
  {path:'search', component: SearchComponent},
  {path:'edit', component: EditComponent},
  {path:'delete', component: DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
