import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-full-user',
  templateUrl: './full-user.component.html',
  styleUrls: ['./full-user.component.css']
})
export class FullUserComponent implements OnInit {


  constructor(private ActivatedRoure: ActivatedRoute) {
    this.ActivatedRoure.params.subscribe(value => value );
  }

  ngOnInit(): void {
  }

}
