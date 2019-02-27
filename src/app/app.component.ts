import { Component } from '@angular/core';

interface Widget {
  type: 'thumbnail' | 'icon' | 'list';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'for-christina';
  leftWidgets: Widget[] = [
    { type: 'thumbnail' },
    { type: 'icon' },
    { type: 'list' }
  ];
  rightWidgets: Widget[] = [{ type: 'thumbnail' }];

  addWidget(pane: 'left' | 'right') {
    const random = Math.random() * 100;

    switch (pane) {
      case 'left':
        if (random <= 33) {
          this.leftWidgets.push({ type: 'thumbnail' });
        } else if (random > 33 && random <= 66) {
          this.leftWidgets.push({ type: 'icon' });
        } else if (random > 66) {
          this.leftWidgets.push({ type: 'list' });
        }
        break;

      case 'right':
        if (random <= 33) {
          this.rightWidgets.push({ type: 'thumbnail' });
        } else if (random > 33 && random <= 66) {
          this.rightWidgets.push({ type: 'icon' });
        } else if (random > 66) {
          this.rightWidgets.push({ type: 'list' });
        }
        break;
    }
  }
}
