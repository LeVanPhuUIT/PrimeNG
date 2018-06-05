import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router'
import {TestComponent} from './test/test.component';
import { DataComponent } from './data/data.component';

@NgModule({
	imports: [
		RouterModule.forRoot([
			{path:'',component: TestComponent},
			{path: 'data', component: DataComponent}
		])
	],
	exports: [
		RouterModule
	]
})
export class SplitButtonDemoRoutingModule {}