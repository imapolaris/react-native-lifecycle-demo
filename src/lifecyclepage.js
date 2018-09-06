import React, {Component} from 'react';
import {Button, StyleSheet, Text, TextInput, View, ToastAndroid} from 'react-native';
import Receiver from './receiver';
import Hub from "./hub";
import {todolist, todos} from './mobx/todomodel';
import Todo from "./mobx/todo";
import {observer} from 'mobx-react';


type Props = {};
const NAME = 'BROADCAST:';
var NO = 1;

@observer
export default class Broadcast extends Component<Props> {
    static defaultProps = {

    };

    getInitialState() {

    }

    constructor(props) {
        super(props);
        this.state = {
            talkabout: '',
            items:['receiver1', 'receiver2', 'receiver3'],
            part:2,
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

    _callback = () => {
        ToastAndroid.show('接收器收到讯息', ToastAndroid.SHORT);
    };

    render() {


        return (
            <View style={styles.container}>
                {
                    this.state.part == 1 ?
                        <View style={styles.container}>
                            <TextInput style={styles.input} onChangeText={
                                (text) => {
                                    NO += 1;
                                    this.setState({
                                        no: NO,
                                        talkabout: text
                                    })
                                }}/>
                            <Receiver no={NO}
                                      talkabout={this.state.talkabout}
                                      items={this.state.items}
                                      callback={this._callback}>

                            </Receiver>

                            <Hub callhub={this.state.callhub}/>

                            <Button onPress={() => {
                                const {items} = this.state;
                                items.pop();
                                //let newItems = Object.assign([], items);
                                //this.setState({ items:newItems });
                                this.setState({items});
                            }} title="删除一个接收器"/>

                            <Button onPress={() => {
                                this.setState({
                                    callhub: '呼叫啊'
                                })
                            }} title="呼叫接线器"/>
                        </View>
                        :
                        <View style={[styles.container, {borderTopWidth: 1, width: '100%'}]}>
                            <Text>以下是关于mobx</Text>

                            {
                                todolist.todos.map((item, index) => {
                                    return <Todo key={index} todo={item}/>
                                })
                            }

                            <TextInput style={styles.input} onChangeText={(text) => {
                                this.setState({task: text})
                            }}/>
                            <Text>
                                {'当前未完成任务数量：'+todolist.unfinishedTodoCount}
                            </Text>
                            <Button title="添加一条任务"
                                    onPress={() => {
                                        if (!this.state.task) return;
                                        NO += 1;
                                        todolist.add({id: NO, content: this.state.task, finished: false})
                                    }}/>
                        </View>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    input: {
        borderWidth:1,
    }
});

