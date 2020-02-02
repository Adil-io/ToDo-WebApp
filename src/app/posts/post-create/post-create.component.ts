import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  @Output() postCreated = new EventEmitter();

  title: string = '';
  content: string = '';

  constructor() { }

  ngOnInit() {
  }

  onAddPost() {
    const post = {
      title: this.title,
      content: this.content
    };
    this.postCreated.emit(post);
    this.title = '';
    this.content = '';
  }

}
