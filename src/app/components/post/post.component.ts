import { Post } from './../../modules/post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts:Post[]=[];
  constructor() { }

  ngOnInit(): void {
    console.log("post çalıştı");
  }

}
