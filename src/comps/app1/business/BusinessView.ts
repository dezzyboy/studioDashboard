import {Component} from "angular2/core";
import {BusinessAction} from "../../../actions/BusinessAction";
import {AppStore} from "angular2-redux-util";
import List = _.List;
import {BusinessModel} from "./BusinesModel";
import {BusinessViewItem} from "./BusinessItemView";



@Component({
    selector: 'BusinessView',
    providers: [BusinessAction],
    directives: [BusinessViewItem],
    template: `
            <h1>Business view</h1>
            <button (click)="loadCustomers($event,rand())">Fetch businesses</button>
            <button (click)="setValue()">Set value</button>
            <ul>
                <BusinessViewItem *ngFor="#business of items" [business]="business">
                </BusinessViewItem>
            </ul>
            <ng-content></ng-content>
        `
})

export class BusinessView {
    private loadCustomers;
    private businesses;
    private rand = Math.random;
    private items;

    constructor(private appStore:AppStore, private businessActions:BusinessAction) {
        var self = this;
        this.loadCustomers = businessActions.createDispatcher(appStore, businessActions.fetchBusinesses);
        this.appStore.dispatch(businessActions.fetchBusinesses());
        setTimeout(()=> {
            self.appStore.dispatch(businessActions.setBusinessField('322949', 'businessDescription', Math.random()));
            self.appStore.dispatch({type: '111'});
        }, 2000);

        appStore.subscribe((objectPath, oldVal, newVal) => {
            self.items = newVal
        }, 'business', false);
    }

    setValue() {
        //this.appStore.dispatch(this.businessActions.fetchBusinesses());
        this.appStore.dispatch(this.businessActions.receiveNumberOfFilms(Math.random()));
    }

    //get items():List<BusinessModel> {
    //    return this.appStore.getState().business;
    //}


}