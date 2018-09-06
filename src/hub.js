import React, {Component} from 'react';
import {Text, View} from 'react-native';

const NAME = 'HUB';
export default class Hub extends Component{
    static defaultProps = {

    };

    getInitialState() {

    }

    constructor(props) {
        super(props);
        this.state = {
            talkabout: '',
            items:['receiver1', 'receiver2', 'receiver3']
        };

        console.log(NAME+'constructor');
    }

    componentWillMount() {
        console.log(NAME+'即将加载组件');
    }

    componentDidMount() {
        console.log(NAME+'组件第一次加载完成');
    }

    componentWillReceiveProps(nextProps) {
        console.log(NAME+'接收到新属性')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(NAME+'是否要更新');
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log(NAME+'即将更新');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(NAME+'更新完成');
    }

    componentWillUnmount() {
        console.log(NAME+'即将卸载组件');
    }

    render() {
        return (
            <View>
                <Text>
                    {this.props.callhub}
                </Text>
            </View>
        )
    }
}