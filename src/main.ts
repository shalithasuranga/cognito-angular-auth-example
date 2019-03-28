import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import Amplify from 'aws-amplify';

if (environment.production) {
  enableProdMode();
}

Amplify.configure({
  Auth: {
      // REQUIRED - Amazon Cognito Identity Pool ID
   //   identityPoolId: 'XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab', 
      // REQUIRED - Amazon Cognito Region
      region: 'us-east-1', 
      // OPTIONAL - Amazon Cognito User Pool ID
      userPoolId: 'us-east-1_0LLDxBPzH',
      // OPTIONAL - Amazon Cognito Web Client ID
      userPoolWebClientId: '26h5klpgd1cquhdr939r1t1vd', 
  }
});

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
