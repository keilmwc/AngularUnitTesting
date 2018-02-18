import { Component } from '@angular/core';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  Add(a, b) {
    return a + b;
  }

  indexString(string: string) {
    const array = [];

    // Remove white space
    const modifiedString = string.replace(/\s/g, "");

    // Push each character into a new array index
    for(const item of modifiedString){
      array.push(item);
    }

    return array;
  }
}
