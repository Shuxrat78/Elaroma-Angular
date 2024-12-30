<<<<<<< HEAD
/// <reference types="@angular/localize" />

=======
>>>>>>> 2247716 (initial commit)
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err));
