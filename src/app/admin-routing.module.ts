import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { RightsComponent } from './rights/rights.component';

const routes: Routes = [
    {  path: 'admin',
        children :[
            { path: 'dashboard', component: DashboardComponent},
            { path: 'user', component: UserComponent},
            { path: 'rights', component: RightsComponent},
        ]
    },
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }