import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from "@angular/forms";
//------------------ROUTING
import { AppRoutingModule } from './app-routing.module';
//------------------PRINCIPAL
import { AppComponent } from './app.component';
//------------------HOME
import { HomeComponent } from './components/home/home.component';
//------------------SERVICIO
import { UserInfoService } from './services/user-info.service';
import { HttpClientModule } from '@angular/common/http';
//------------------CHAT
import { ChatComponent } from './components/chat/chat.component';
import { SlideComponent } from './components/chat/slide/slide.component';
import { HeaderComponent } from './components/chat/header/header.component';
import { BodyComponent } from './components/chat/body/body.component';
import { FooterComponent } from './components/chat/footer/footer.component';
import { LoadingComponent } from './components/shared/loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatComponent,
    SlideComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
