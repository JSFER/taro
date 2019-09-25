import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './test.scss'

export interface State{
    name: string,
    age: string
}

export default class Test extends Component {

    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */
    config: Config = {
        navigationBarTitleText: '测试页面'
    }


    state: State = {
        name: '',
        age: ''
    }

    componentWillMount() { 
        console.log(this.$router.params)
        const { name, age } = this.$router.params
        this.setState({
            name,
            age
        })
    }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    render() {
        const { name, age } = this.state
        return (
            <View className='test'>
                <View>姓名：{name}</View>
                <View>年龄：{age}</View>
            </View>
        )
    }
}