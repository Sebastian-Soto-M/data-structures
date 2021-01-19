import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from 'app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent, MainComponent, FooterComponent],
  imports: [SharedModule, RouterModule],
  exports: [MainComponent],
})
export class LayoutsModule {}
