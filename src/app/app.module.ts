import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PageRepositoryService } from './domain/page-repository.service';
import { HttpPageRepositoryService } from './infrastructure/http-page-repository.service';
import { CobiroTaskPageComponent } from './ui/cobiro-task-page.component';
import { BlocksComponent } from './ui/blocks/blocks.component';
import { ImageComponent } from './ui/image/image.component';
import { MemberCardComponent } from './ui/member-card/member-card.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    CobiroTaskPageComponent,
    BlocksComponent,
    ImageComponent,
    MemberCardComponent
  ],
  providers: [
    {provide: PageRepositoryService, useClass: HttpPageRepositoryService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
