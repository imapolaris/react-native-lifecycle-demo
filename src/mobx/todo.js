import React, {Component} from 'react';
import {
    Button,
    Text,
    View
} from 'react-native';
import {observer} from 'mobx-react';
import {todolist} from "./todomodel";

const NAME = 'TODO:';
@observer
class Todo extends Component {
    _doFinish = (id) => {
        todolist.finished(id);
    };

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
        const {id, content, finished} = this.props.todo;

        return (
            <View>
                <Text style={finished ? {textDecorationLine:'line-through'} : null}
                      onPress={()=>this._doFinish(id)}>
                    {content}
                </Text>
            </View>
        )
    }
}

export default Todo;