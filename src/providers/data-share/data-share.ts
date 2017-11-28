// import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio';


/*
 Generated class for the DataShareProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
@Injectable()
export class DataShareProvider {
    public currentLetter: any = { id: 'a', name: 'alligator' };
    public abcSet: any = [
        { id: 'a', name: 'alligator' },
        { id: 'b', name: 'bear' },
        { id: 'c', name: 'cat' },
        { id: 'd', name: 'dolphin'},
        { id: 'e', name: 'elefant'},
        { id: 'f', name: 'frog' },
        { id: 'g', name: 'giraffe' },
        { id: 'h', name: 'h-----' },
        { id: 'i', name: 'i-----'},
        { id: 'j', name: 'jellyfish'},
        { id: 'k', name: 'koala' },
        { id: 'l', name: 'lizard' },
        { id: 'm', name: 'monkey' },
        { id: 'n', name: 'n' },
        { id: 'o', name: 'owel' },
        { id: 'p', name: 'panda' },
        { id: 'q', name: 'q' },
        { id: 'r', name: 'racun' },
        { id: 's', name: 'shark' },
        { id: 't', name: 'tucan' },
        { id: 'u', name: 'urchin' },
        { id: 'v', name: 'v' },
        { id: 'w', name: 'w' },
        { id: 'x', name: 'x-ray' },
        { id: 'y', name: 'yak' },
        { id: 'z', name: 'zebra' }
    ];

    constructor(private nativeAudio: NativeAudio) {
        console.log('Hello DataShareProvider Provider');
    }

    playLetterAudio() {
        let mediaFile =  "assets/audio/" + this.currentLetter.id +".mp3";

        this.nativeAudio.preloadSimple(this.currentLetter.id, mediaFile).then(()=> {
            console.log("Success");
        });

        setTimeout(()=> {
            this.nativeAudio.play(this.currentLetter.id).then(() => {
                console.log("Played");
            });
        }, 500);
    }

}
