import { observable, action } from 'mobx'

export default class Counter {
    @observable counter:number =  0
    @action.bound counterStore() {
        this.counter++
    }
    @action.bound increment() {
        this.counter++
    }
    @action.bound decrement() {
        this.counter--
    }
    @action.bound incrementAsync() {
        setTimeout(() => {
            this.counter++
        }, 1000)
    }
}