import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateComponent} from './create/inputOrderForm/create.component';
import {SearchComponent} from './search/search-component/search.component';
import {EditComponent} from './edit/edit.component';
import {DeleteComponent} from './delete/delete.component';
import { DetailComponent } from './workOrderDetail/detail/detail.component';
import { FindComponent } from './find/find.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  {path: 'create', component: CreateComponent},
  {path: 'search', component: SearchComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'delete/:id', component: DeleteComponent},
  {path: 'getdetail/:id', component: DetailComponent},
  {path: 'find', component: FindComponent},
  {path: 'home', component: HomepageComponent},
  {path: 'report', component: ReportComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  CreateComponent,
  SearchComponent,
  EditComponent,
  DeleteComponent,
  DetailComponent,
  FindComponent,
  HomepageComponent,
  ReportComponent
 ];
