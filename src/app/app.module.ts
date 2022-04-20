import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http';

import { CoreModule } from './core/core.module';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { TestModule } from './test/test.module';
import { SharedModule } from './shared/shared.module';
import { HighlightDirective } from './highlight.directive';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SameFieldValueDirective } from './same-field-value.directive';
import { RegisterComponent } from './register/register.component';

export const myStringInjectionToken = new InjectionToken('myString');

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    AboutComponent,
    NotFoundComponent,
    HighlightDirective,
    LoginComponent,
    SameFieldValueDirective,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    TestModule,
    FormsModule,
    ReactiveFormsModule,
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
