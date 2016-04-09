import {StoreModel} from "../models/StoreModel";
import {Map, List} from 'immutable';

/**
 * Thin wrapper of Immutable data around a single business
 * **/
export class StationModel extends StoreModel {

    constructor(data:any = {}) {
        super(data);
    }

    public getConnection() {
        return this.getKey('connection')
    }

    public getWatchDogConnection() {
        var watchDogConnection = this.getKey('watchDogConnection')
        var connection = this.getConnection();
        if (connection == '0')
            return 'fa-minus'
        switch (watchDogConnection) {
            case '0':
                return 'fa-minus';
            case '1':
                return 'fa-shield';
            case '':
                return 'fa-minus';
            default:
                return 'fa-minus';
        }
    }

    public getConnectionIcon(style:'simple'|'color') {
        var connection = this.getConnection();
        switch (style) {
            case 'simple':
            {
                switch (connection) {
                    case '0':
                        return 'fa-circle-thin';
                    case '1':
                        return 'fa-check-circle';
                    case '2':
                        return 'fa-circle';
                    default:
                        return 'fa-minus';
                }
            }

            case 'color':
            {
                switch (connection) {
                    case '0':
                        return 'red';
                    case '1':
                        return 'green';
                    case '2':
                        return '#C2C200';
                    default:
                        return 'black';
                }
            }
        }
    }

}