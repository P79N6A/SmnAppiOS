import { NgModule } from '@angular/core';
import { PageFooterComponent } from './page-footer/page-footer';
import { IonicModule } from 'ionic-angular';
import { PageComponent } from './page/page';
@NgModule({
	declarations: [PageFooterComponent,
    PageComponent],
	imports: [IonicModule],
	exports: [PageFooterComponent,
    PageComponent]
})
export class ComponentsModule {}
