import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Media, MediaObject} from '@ionic-native/media';


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    // private abcSet : any = [
    //     {'name': "a", 'img': 'logo'},
    //     {'name': "b", 'img': 'logo'}
    // ];
    public currentLetter: string = 'a';
    private abcSet: any = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];


    constructor(public navCtrl: NavController, private media: Media) {

    }


    setCurrentLetter(event) {
        if (event.target.alt) {
            this.currentLetter = event.target.alt;
            let mediaFile =  "assets/audio/" + this.currentLetter +".m4a";

            const file: MediaObject = this.media.create(mediaFile);
            file.play();
        }

        //animate clicked button
        //not working in ios
        // event.target.animate([
        //   { transform: 'scale(0.8)' },
        //   { transform: 'scale(1)' }
        // ], {
        //   duration: 750,
        //   easing: 'ease-in'
        // });
        // console.log(event.target.alt);
    }

}
