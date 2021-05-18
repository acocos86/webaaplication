import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-ecg-history',
  templateUrl: './view-ecg-history.component.html',
  styleUrls: ['./view-ecg-history.component.scss']
})
export class ViewEcgHistoryComponent implements OnInit {
  data='';
  hour='';
  value='';

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.httpClient.get("https://sandbox.api.service.nhs.uk/hello-world/hello/world").subscribe((result:any) => {

      console.log(result);
      console.log(result.data);
      this.data=result.data;

      console.log(result.hour);
      this.hour=result.hour;

      console.log(result.value);
      this.value=result.value;
  })
}}