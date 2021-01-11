import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {
  links = [
    {name:'home' , url:"./"},
    {name:'items' , url:"home"},
    {name:'profile' , url:"profile"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
