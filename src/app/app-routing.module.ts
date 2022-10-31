import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
const routes: Routes = [
  {path:'',redirectTo:'companies',pathMatch:'full'},
  {path:'companies',component:CompaniesComponent},
  {path:'company/:id',component:CompanyDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
