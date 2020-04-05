import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableExampleComponent } from './components/table-example/table-example.component';


const routes: Routes = [
  {path: 'table', component: TableExampleComponent},
  {path: 'example-2', component: TableExampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
