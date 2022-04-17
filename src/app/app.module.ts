import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http';

import { UserModule } from './user/user.module';
import { CoreModule } from './core/core.module';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { TestModule } from './test/test.module';
import { SharedModule } from './shared/shared.module';
import { HighlightDirective } from './highlight.directive';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { SameFieldValueDirective } from './same-field-value.directive';

export const myStringInjectionToken = new InjectionToken('myString');

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    AboutComponent,
    NotFoundComponent,
    HighlightDirective,
    LoginComponent,
    SameFieldValueDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UserModule,
    CoreModule,
    SharedModule,
    TestModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: myStringInjectionToken,
      useValue: 'Hello World'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
