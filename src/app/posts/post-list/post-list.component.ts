import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  animations: [
    trigger('EnterLeave', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0, backgroundColor: 'green' }),
        animate('0.5s ease-in')
      ]),
      transition(':leave', [
        animate('0.5s ease-out', style({ transform: 'translateX(-100%)', opacity: 0, backgroundColor: 'red' }))
      ])
    ]),
  ]
})
export class PostListComponent implements OnInit {

  @Input() posts: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  onDelete(i: number) {
    // const element = event.target.parentNode.parentNode.parentNode.parentNode.parentNode;
    // element.parentNode.removeChild(element);
    this.posts.splice(i, 1);
    localStorage.setItem('data', JSON.stringify(this.posts));
  }

  onDeleteAll() {
    this.posts.splice(0, this.posts.length);

  }

}
