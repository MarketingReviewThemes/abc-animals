import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { DataShareProvider } from '../../providers/data-share/data-share';


/**
 * Generated class for the LetterDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-letter-details',
    templateUrl: 'letter-details.html',
})
export class LetterDetailsPage {
    public nextButton: boolean = true;
    public prevButton: boolean = true;


    constructor(public navCtrl: NavController, public dataShare: DataShareProvider) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LetterDetailsPage');
        this.checkNextButton();
        this.checkPrewButton();
        this.dataShare.unloadAllLetters();
    }

    gotoBack() {
        this.navCtrl.pop();
    }

    playAudio() {
        this.dataShare.playLetterAudio();
    }


    gotoPrev() {
        for(let i = 0; i <= this.dataShare.abcSet.length; i++) {
            this.nextButton = true;

            if(this.dataShare.currentLetter.id == this.dataShare.abcSet[i].id) {
                this.dataShare.currentLetter.id = this.dataShare.abcSet[i-1].id;
                this.dataShare.currentLetter.name = this.dataShare.abcSet[i-1].name;

                //If first letter
                this.checkPrewButton();
                this.playAudio();
                break;
            }
        }
    }


    gotoNext() {
        for(let i = 0; i <= this.dataShare.abcSet.length; i++) {
            this.prevButton = true;

            if(this.dataShare.currentLetter.id == this.dataShare.abcSet[i].id) {
                this.dataShare.currentLetter.id = this.dataShare.abcSet[i+1].id;
                this.dataShare.currentLetter.name = this.dataShare.abcSet[i+1].name;

                //If last letter
                this.checkNextButton();
                this.playAudio();
                break;
            }
        }
    }

    checkPrewButton() {
        if(this.dataShare.currentLetter.id == "a") {
            this.prevButton = false;
        }
    }
    
    checkNextButton() {
        if(this.dataShare.currentLetter.id == "z") {
            this.nextButton = false;
        }
    }

}
