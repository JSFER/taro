import Taro, { Component, Config } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'

import Index from './pages/index'

import './app.scss'
import * as store from './store'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */
    config: Config = {
        pages: [
            'pages/index/index',
            'pages/car/car',
            'pages/user/user',
            'pages/type/type',

            'pages/test/test',

        ],
        window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#fff',
            navigationBarTitleText: 'WeChat',
            navigationBarTextStyle: 'black'
        },
        tabBar: {
            list: [{
                pagePath: "pages/index/index",
                iconPath: "images/tabBar/tarbar1-1.png",
                selectedIconPath: "images/tabBar/tarbar2-1.png",
                text: "首页"
            }, {
                pagePath: "pages/type/type",
                iconPath: "images/tabBar/tarbar1-2.png",
                selectedIconPath: "images/tabBar/tarbar2-2.png",
                text: "分类"
            }, {
                pagePath: "pages/car/car",
                iconPath: "images/tabBar/tarbar1-3.png",
                selectedIconPath: "images/tabBar/tarbar2-3.png",
                text: "购物车"
            },{
                pagePath: "pages/user/user",
                iconPath: "images/tabBar/tarbar1-4.png",
                selectedIconPath: "images/tabBar/tarbar2-4.png",
                text: "我的"
            }],
            color: '#333',
            selectedColor: '#333',
            backgroundColor: '#fff',
            borderStyle: 'black'
        }
      
    }

    componentDidMount() { }

    componentDidShow() { }

    componentDidHide() { }

    componentDidCatchError() { }

    // 在 App 类中的 render() 函数没有实际作用
    // 请勿修改此函数
    render() {
        return (
            <Provider store={store}>
                <Index />
            </Provider>
        )
    }
}

Taro.render(<App />, document.getElementById('app'))
