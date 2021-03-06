import {
    Button,
    Image,
    Input,
    Swiper,
    SwiperItem,
    Text,
    View
} from "@tarojs/components"
import { inject, observer } from "@tarojs/mobx"
import Taro, { Component, Config } from "@tarojs/taro"
import { ComponentType } from "react"
import "./index.scss"

import { CounterType } from "../../store/counter/counter"
import { priceType } from "../../store/price/price"

interface propsType {
    price: priceType
    counter: CounterType
}
interface stateType {
    name: string
    email: string | undefined
    password: string | undefined
}

interface Index {
    props: propsType
    state: stateType
}

@inject("price", "counter")
@observer
class Index extends Component {
    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */
    config: Config = {
        navigationBarTitleText: "首页"
    }

    state: stateType = {
        name: "朱传良",
        email: "",
        password: ""
    }

    componentWillMount() {}

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
        const { email, password } = this.state
        counter.incrementAsync({ email, password })
    }
    setPrice() {
        const {
            price: { setPrice }
        } = this.props
        setPrice(1)
    }

    componentDidMount() {}

    componentWillUnmount() {}

    componentDidShow() {}

    componentDidHide() {}

    change(e: any) {
        this.setState({
            email: e.detail.value
        })
    }
    change2(e: any) {
        console.log(e)
        this.setState({
            password: e.detail.value
        })
    }

    goTest = () => {
        const { name } = this.state
        Taro.navigateTo({
            url: `/pages/test/test?name=${name}&age=30`
        })
    }

    render() {
        const {
            counter: { counter, allCount },
            price: { price }
        } = this.props

        return (
            <View className="index">
                <Swiper
                    className="test-h"
                    indicatorColor="#999"
                    indicatorActiveColor="#333"
                    circular
                    indicatorDots
                    autoplay
                >
                    <SwiperItem>
                        <Image
                            mode="widthFix"
                            src="http://www.shqyps.com/images/about.jpg"
                            className="slide-image"
                        ></Image>
                    </SwiperItem>
                    <SwiperItem>
                        <Image
                            mode="widthFix"
                            src="http://www.shqyps.com/uploadpic/201907231720434swm.jpg"
                            className="slide-image"
                        ></Image>
                    </SwiperItem>
                </Swiper>

                <Button onClick={this.increment}>+</Button>
                <Button onClick={this.decrement}>-</Button>
                <Text style={{ marginRight: "20px" }}>{counter}</Text>
                <Text>计算属性：{allCount}</Text>

                <View style={{ marginTop: "50px" }}>
                    账号：
                    <Input
                        className="email"
                        onInput={e => this.change(e)}
                    ></Input>
                    密码：
                    <Input
                        className="password"
                        onInput={e => this.change2(e)}
                    ></Input>
                </View>
                <Button onClick={this.incrementAsync}>登入</Button>

                <Button style={{ marginTop: "50px" }} onClick={this.setPrice}>
                    点击
                </Button>
                <View>现在价格为：{price}</View>
                <View>
                    <Text>Hello world!</Text>
                    <Button type="primary" onClick={this.goTest}>
                        跳转
                    </Button>
                </View>
            </View>
        )
    }
}

export default Index as ComponentType
