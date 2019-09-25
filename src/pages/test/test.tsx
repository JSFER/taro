import Taro, { Component, Config } from '@tarojs/taro'
import { View, Video, Image } from '@tarojs/components'
import './test.scss'

export interface State{
    name: string,
    age: string,
    src: string,
    imgSrc: string
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
        age: '',
        src: 'https://7n-yika.medsci.cn/tmp_b10f8aa69465508c25b7ceaa6d3c5333.mp4',
        imgSrc: 'https://7n-yika.medsci.cn/tmp_d7b4da885f7cafaae6113a0c9ffb05f1.jpg'
    }

    componentWillMount() { 
        console.log(this.$router.params)
        const { name, age } = this.$router.params
        this.setState({
            name,
            age
        })
        Taro.showToast({
            title: '你好',
            icon: 'none',
            duration: 1000
        })
    }

    showImage = () => {
        const { imgSrc } = this.state
        Taro.previewImage({
            current: imgSrc,
            urls: [imgSrc]   // 需要预览的图片 http 链接列表   
        });
    }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    render() {
        const { name, age, src, imgSrc } = this.state
        return (
            <View className='test'>
                <View>姓名：{name}</View>
                <View>年龄：{age}</View>
                <View>
                    <Image onClick={this.showImage} className="image" src={imgSrc}></Image>
                </View>
                <Video controls={true} src={src} poster={src + '?vframe/jpg/offset/1'}></Video>
            </View>
        )
    }
}