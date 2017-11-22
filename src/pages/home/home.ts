import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Media, MediaObject} from '@ionic-native/media';


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    public currentLetter: string = 'a';
    private abcSet: any = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];


    constructor(public navCtrl: NavController, private media: Media) {

    }


    setCurrentLetter(event) {
        if (event.target.alt) {
            this.currentLetter = event.target.alt;
            let mediaFile =  "assets/audio/" + this.currentLetter +".mp3";

            const file: MediaObject = this.media.create(mediaFile);
            setTimeout(()=> {
                file.play();
            }, 500)
        }

    }

}
