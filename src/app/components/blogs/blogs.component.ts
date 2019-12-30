import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  blogTitle = 'Heroes';
  blogEntry = 'Windstorm';

  constructor() { }

  ngOnInit() {
  }

}
