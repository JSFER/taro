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
    @action.bound incrementAsync(params: {email: string, password:string }) {
        getResultData_servers(params).then((res: any) => {
            console.log(res)
            this.counter++
        })
    }
}