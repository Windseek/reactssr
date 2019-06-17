import React from 'react'
import { connect } from 'react-redux';
import { getHomeList } from './store/action';

class Home extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.list.map((item)=>(
                        <div key={item.id}>hello {item.id}</div>
                    ))
                }
                <div onClick={()=>{alert('yanglongfei')}}>我是home页面 ，点击我会弹出框 Hello {this.props.name}</div>
            </div>
        );
    }
    componentDidMount(){
        this.props.getHomeList();
    }
}
Home.loadData = (store) => {
    store.dispatch(getHomeList());
    // this.props.getHomeList();
}
const mapStateToProps = state => ({
    list: state.home.list,
    name: state.home.name
})
const mapDispatchToProps = dispatch => ({
    getHomeList() {
        // 此处使用action里的方法
        // dispatch(getHomeList);
        console.log("发送ajax请求。。。");
        dispatch(getHomeList());
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)