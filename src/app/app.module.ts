import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {ABCAnimals} from './app.component';
import {HomePage} from '../pages/home/home';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Media} from '@ionic-native/media';

@NgModule({
    declarations: [
        ABCAnimals,
        HomePage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(ABCAnimals),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        ABCAnimals,
        HomePage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        Media,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
