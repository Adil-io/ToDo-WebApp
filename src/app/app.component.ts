import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODO';
  storedPosts: string[] = [];

  constructor() {
    this.readStorage();
  }

  onPostAdded(post) {
    this.storedPosts.push(post);
    this.persistData();
  }

  persistData() {
    localStorage.setItem('data', JSON.stringify(this.storedPosts));
  }

  readStorage() {
    const storage = JSON.parse(localStorage.getItem('data'));
    console.log(storage);
    if (storage) this.storedPosts = storage;
  }

}
