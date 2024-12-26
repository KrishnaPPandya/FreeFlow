   // free-collab-frontend/src/main.ts
   import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
   import { AppComponent } from './app/app.component'; // Import AppComponent directly

   platformBrowserDynamic().bootstrapModule(AppComponent) // Bootstrap AppComponent if it's standalone
     .catch(err => console.error(err));