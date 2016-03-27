import {Component} from 'angular2/core';

@Component({
	selector: 'main',
	template: `
		<StackLayout>
			<Label align="center" text="Hello World!"></Label>
		</StackLayout>
	`,
	styles: [`
		label{
			font-size: 45;
			horizontal-align: center;
			padding-top:70;
		}
	`]
})

export class MainPage {

	constructor() {
	}
}