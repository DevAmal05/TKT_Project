import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export class company{
  constructor(public id:number,public name:string,public sector:string,public siren:number){}
}
@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
companies!:company[];

  constructor(private httpclient:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.getCompanies()
  }

  getCompanies(){
    this.httpclient.get<any>('https://test.wertkt.com/api/biz').subscribe(
      response =>{
        console.log(response)
this.companies=response
      }
    );
  }

  edit(id: number){
    
    this.router.navigate(['company/'+id])
  
  }
}
