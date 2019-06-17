import React from 'react'
import { connect } from 'react-redux';
class Home extends React.Component {
    render() {
        return (
          <div onClick={()=>{alert('yanglongfei')}}>我是home页面 ，点击我会弹出框 Hello {this.props.name}</div>
        );
    }
}
const mapStateToProps = state => ({
    name: state.home.name
})
const mapDispatchToProps = dispatch => ({
    getHomeList() {
        // 此处使用action里的方法
        // dispatch(getHomeList);
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)