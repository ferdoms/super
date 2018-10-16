import { NgModule } from '@angular/core';
import { GroupByPipe } from './group-by/group-by';
import { GetNamePipe } from './get-name/get-name';
@NgModule({
	declarations: [GroupByPipe,
    GetNamePipe],
	imports: [],
	exports: [GroupByPipe,
    GetNamePipe]
})
export class PipesModule {}
