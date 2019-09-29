import { observable, action } from 'mobx'


export interface priceType {
    price: number;
    setPrice: Function
}


export default class Price {
    @observable price: number = 0

    @action.bound setPrice (price: number) {
        this.price += price
    }
}