import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import './index.scss'

type propsType = {
    price: {
        price: number,
        setPrice: Function
    },
    counter: {
        counter: number,
        increment: Function,
        decrement: Function,
        incrementAsync: Function
    }
}
type stateType = {
    
}

interface Index {
    props: propsType,
    state: stateType
}

@inject('price', 'counter')
@observer
class Index extends Component {
    constructor(props) {
        super(props)
            this.state = {

            }
    }  

    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */
    config: Config = {
        navigationBarTitleText: '首页'
    }

    componentWillMount() { }

    increment = () => {
        const { counter } = this.props
        counter.increment()
    }

    decrement = () => {
        const { counter } = this.props
        counter.decrement()
    }

    incrementAsync = () => {
        const { counter } = this.props
        counter.incrementAsync()
    }
    setPrice() {
        const { price: { setPrice } } = this.props
        setPrice(1)
    }


    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    goTest = () =>{
        Taro.navigateTo({
            url: `/pages/test/test?name=麦扣&age=30`
        })
    }
    
    render() {
        const { counter: { counter }, price: { price } } = this.props
        return (
            <View className='index'>
                <Button onClick={this.increment}>+</Button>
                <Button onClick={this.decrement}>-</Button>
                <Button onClick={this.incrementAsync}>Add Async</Button>
                <Text>{counter}</Text>
                <Button onClick={this.setPrice}>点击</Button>
                <Text>现在价格为：{price}</Text>
                <View>
                    <Text>Hello world!</Text>
                    <Button type="primary" onClick={this.goTest}>点击</Button>
                </View>
            </View>
        )
    }
}

export default Index as ComponentType