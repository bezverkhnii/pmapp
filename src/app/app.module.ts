import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainPageModule } from './main-page/main-page.module';
import { RegPageModule } from './reg-page/reg-page.module';
import { TaskPopupModule } from './task-popup/task-popup.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginModule } from './login/login.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { BoardpageModule } from './boardpage/boardpage.module';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateBoardModule } from './create-board/create-board.module';
import { BoardModule } from './board/board.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MainPageModule,
    RegPageModule,
    TaskPopupModule,
    MatSnackBarModule,
    LoginModule,
    BoardpageModule,
    MatDialogModule,
    CreateBoardModule,
    BoardModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:TokenInterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }


export function httpTranslateLoader(http: HttpClient){
  return new TranslateHttpLoader(http)
}