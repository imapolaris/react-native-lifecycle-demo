import React, {Component, PureComponent} from 'react';
import {
    Button,
    Text,
    View
} from 'react-native';

const NAME = 'RECEIVER';
type Props = {};
export default class Receiver extends PureComponent<Props>{
    static defaultProps = {

    };

    getInitialState() {

    }

    constructor(props) {
        super(props);
        this.state = {
            talkabout: '',
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
        console.log(NAME+'接收到新属性: '+nextProps.talkabout);
        this.setState({
            talkabout: nextProps.talkabout,
        })
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log(NAME+'是否要更新');
    //     return true;
    // }

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
                <View style={{flexDirection:'row'}}>
                    <Text>
                        {'No.' + this.props.no}
                    </Text>
                    <Text>
                        {'广播了什么消息:' + this.props.talkabout}
                    </Text>
                </View>

                <View>
                    {this.props.items.map((item, index) => {
                        return <Text key={index}>{item}</Text>
                    })}
                </View>
                <Button onPress={this.props.callback} title="收到" />
            </View>
        )
    }
}