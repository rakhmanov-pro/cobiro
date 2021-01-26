import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CobiroTaskPageComponent } from './ui/cobiro-task-page.component';

const routes: Routes = [
  {
    path: '',
    component: CobiroTaskPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
