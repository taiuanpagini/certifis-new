import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { StorageService } from './providers/storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Certifis';
  private fragment: string;

  constructor(
    router: Router,
    private StorageService: StorageService
    ) {
      router.events.subscribe(s => {
        if (s instanceof NavigationEnd) {
          const tree = router.parseUrl(router.url);
          if (tree.fragment) {
            const element = document.querySelector("#" + tree.fragment);
            if (element) { element.scrollIntoView(true); }
          }
        }
      });

  }
}
