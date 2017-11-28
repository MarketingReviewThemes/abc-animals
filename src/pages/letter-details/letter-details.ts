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
    }

    gotoBack() {
        this.navCtrl.pop();
    }

    playAudio() {
        this.dataShare.playLetterAudio();
    }


    gotoPrev() {
        for(let i = 0; i <= this.dataShare.abcSet.length; i++) {

            //If first letter
            if(i == 1) {
                this.prevButton = false;
            } else {
                this.prevButton = true;
            }

            if(this.dataShare.currentLetter.id == this.dataShare.abcSet[i].id) {
                this.dataShare.currentLetter.id = this.dataShare.abcSet[i-1].id;
                this.dataShare.currentLetter.name = this.dataShare.abcSet[i-1].name;
                break;
            }
        }
    }


    gotoNext() {
        for(let i = 0; i <= this.dataShare.abcSet.length; i++) {

            //If last letter
            if(i+2 == this.dataShare.abcSet.length) {
                this.nextButton = false;
            } else {
                this.nextButton = true;
            }

            if(this.dataShare.currentLetter.id == this.dataShare.abcSet[i].id) {
                this.dataShare.currentLetter.id = this.dataShare.abcSet[i+1].id;
                this.dataShare.currentLetter.name = this.dataShare.abcSet[i+1].name;
                break;
            }
        }
    }

}
