import { observable, action } from 'mobx'
import { getResultData_servers } from '../../servers/servers'

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
        getResultData_servers({email: 'admin@bioon.com', password: 'admin123456'}).then((res: any) => {
            console.log(res)
            this.counter++
        })
    }
}