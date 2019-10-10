import { action, observable } from "mobx"

export interface priceType {
    price: number
    setPrice: (price: number) => void
}

export default class Price {
    @observable price: number = 0

    @action.bound setPrice(price: number) {
        this.price += price
    }
}
