import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image, Button } from '@tarojs/components'
import { observer } from '@tarojs/mobx'
import './user.scss'

type stateType = {
    userInfo: {
        avatarUrl: string
        city: string
        country: string
        gender: number
        language: string
        nickName: string
        province: string
    }
}

interface User {
    state: stateType
}

@observer
class User extends Component {

    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */
    config: Config = {
        navigationBarTitleText: '我的首页'
    }

    state: stateType = {
        userInfo: {
            avatarUrl: '',
            city: '',
            country: '',
            gender: 1,
            language: '',
            nickName: '',
            province: ''
        }
    }

    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    tobegin = (userInfo: any):void => {
        this.setState({
            userInfo: userInfo.detail.userInfo
        })
    };

    render() {
        const { userInfo: { avatarUrl, nickName, gender, city } } = this.state

        return (
            <View className='user'>
                { avatarUrl? (
                    <View >
                        <Image className="header" src={avatarUrl}></Image>
                        <View className="name">姓名：{nickName}</View>
                        <View className="sex">性别：{gender == 1?'男':'女'}</View>
                        <View className="city">城市：{city}</View>
                    </View>
                ): null}
                <Button className="btn" openType="getUserInfo" onGetUserInfo={this.tobegin} type="primary">
                    开启缘分
                </Button>
                我的页面
            </View>
        )
    }
}

export default User