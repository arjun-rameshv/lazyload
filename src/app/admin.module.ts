import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { RightsComponent } from './rights/rights.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [UserComponent,RightsComponent,DashboardComponent],
  imports: [
    AdminRoutingModule,
  ]
})
export class AdminModule { }