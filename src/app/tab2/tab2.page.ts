import {Component} from '@angular/core';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
    protected soma1: any;
    protected soma2: any;
    protected soma3: any;
    protected total: any;
    protected lucro: any;
    protected visibilidate = false;

    click() {
        this.visibilidate = true;
        this.total = this.soma3 * this.soma2;
        this.lucro = this.total - this.soma1;
    }
}
