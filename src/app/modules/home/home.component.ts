import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConnectApiService } from 'src/app/shared/service/connect-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private connectApi: ConnectApiService) {}

  ngOnInit(): void {
    this.connectApi.getGlobalFeed(10, 0).subscribe((value) => {
      console.log('value: ', value);
    });
  }
}
