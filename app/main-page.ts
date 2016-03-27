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
			text-align:center;
			color:#010101;
			font-size: 32
			margin:25 0;
		}
	`]
})

export class MainPage {

	constructor() {
	}
}