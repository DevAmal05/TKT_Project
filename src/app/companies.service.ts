import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private http:HttpClient) { }

  getCompaniesList(){
    return this.http.get('https://test.wertkt.com/api/biz');
  }
  findCompanyById(id: string) {
    return this.http.get('https://test.wertkt.com/api/result/'+id)
  }


}
