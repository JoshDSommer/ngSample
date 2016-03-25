import 'reflect-metadata';
import {nativeScriptBootstrap} from 'nativescript-angular/application';
import {Inject, Component, View} from 'angular2/core';
import { EventData } from "data/observable";
import { Page } from "ui/page";

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