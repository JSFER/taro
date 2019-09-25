import { observable, action } from 'mobx'

export default class Price {
    @observable price: number = 0

    @action.bound setPrice (price: number) {
        this.price += price
    }
}