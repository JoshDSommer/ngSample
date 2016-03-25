import 'reflect-metadata';
import {nativeScriptBootstrap} from 'nativescript-angular/application';
import {Component} from 'angular2/core';

@Component({
	selector: 'main',
	template: `
		<StackLayout>
			<Label align="center" text="Hello World!"></Label>
		</StackLayout>
	`
})

export class MainPage {

	constructor() {
	}
}