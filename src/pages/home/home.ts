import {Component} from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio';
import set = Reflect.set;


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    public currentLetter: string = 'a';
    private abcSet: any = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];


    constructor(private nativeAudio: NativeAudio) { }


    setCurrentLetter(event) {

        if (event.target.alt) {
            this.currentLetter = event.target.alt;

            let mediaFile =  "assets/audio/" + this.currentLetter +".mp3";

            this.nativeAudio.preloadSimple(this.currentLetter, mediaFile).then(()=> {
                console.log("Success");
            });

            setTimeout(()=> {
                this.nativeAudio.play(this.currentLetter).then(() => {
                    console.log("Played");
                });
            }, 500);
        }

    }

}
