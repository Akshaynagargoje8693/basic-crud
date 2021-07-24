import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAddViewComponent } from './list-add-view/list-add-view.component';
const routes: Routes = [
  { path: '', component: ListAddViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 

 }
