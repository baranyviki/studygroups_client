import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatSidenavModule, MatListModule, MatToolbarModule, MatIcon, MatIconModule, MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SidenavListComponent } from './components/sidenav-list/sidenav-list.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { StudyBuddyModule } from './study-buddy/study-buddy.module';
import { RoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationModule } from './registration/registration.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SidenavListComponent,
    MenuBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    RoutingModule,
    StudyBuddyModule,
    RegistrationModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [LayoutComponent]
})
export class AppModule { }
