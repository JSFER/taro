import { observable, action, computed } from 'mobx'
import { getResultData_servers } from '../../servers/servers'

interface Response {
    code?: string,
    message?: string
}

export interface userInfo extends Response {
    data?: {
        token: string,
        user: {
            email: string,
            name: string
        }
    }
}

export interface CounterType {
    counter: number,
    allCount: number,
    increment: Function,
    decrement: Function,
    incrementAsync: Function
}

export default class Counter {
    @observable counter:number =  0

    @observable userInfo:userInfo = {}

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
        const res = await getResultData_servers(params)
        console.log(res)
        this.userInfo = res;
        // this.counter++
    }
}