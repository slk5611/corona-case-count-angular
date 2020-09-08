import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './page/home/home.component';
import {CoronaComponent} from './page/corona/corona.component';
import {CoronaCaseComponent} from './page/corona-case/corona-case.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'  },
  {path: 'home', component: HomeComponent},
  {path: 'corona', component: CoronaComponent},
  {path: 'corona-case', component: CoronaCaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

