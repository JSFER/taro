import { observable, action, computed } from 'mobx'
import { getResultData_servers } from '../../servers/servers'

export default class Counter {
    @observable counter:number =  0

    @computed get allCount() {
        return this.counter + 10;
    }

    @action.bound counterStore() {
        this.counter++
    }
    @action.bound increment() {
        this.counter++
    }
    @action.bound decrement() {
        this.counter--
    }
    @action.bound async incrementAsync(params: { email: string, password:string }) {
        const res:any = await getResultData_servers(params)
        console.log(res)
        this.counter++
    }
}