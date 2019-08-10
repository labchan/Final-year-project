import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule} from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search-component/search.component';
import { CreateComponent } from './create/inputOrderForm/create.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { NavComponent } from './nav/nav.component';
import { DataService } from './data.service';
import { DetailComponent } from './workOrderDetail/detail/detail.component';
import { FindComponent } from './find/find.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ReportComponent } from './report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CreateComponent,
    EditComponent,
    DeleteComponent,
    NavComponent,
    DetailComponent,
    FindComponent,
    HomepageComponent,
    ReportComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
