import { Component } from '@angular/core';
import topBarItemsData from '../assets/text-data/topBarItems.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cedar-post';
  public topBarItems = topBarItemsData;

  public ngOnInit(): void {
  }
}
