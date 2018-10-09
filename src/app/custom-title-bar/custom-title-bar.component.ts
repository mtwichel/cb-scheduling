import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-custom-title-bar',
  templateUrl: './custom-title-bar.component.html',
  styleUrls: ['./custom-title-bar.component.scss']
})
export class CustomTitleBarComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
