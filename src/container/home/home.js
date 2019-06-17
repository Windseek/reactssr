import React from 'react'
class Home extends React.Component {
    render() {
      return (
        <div onClick={()=>{alert('yanglongfei')}}>
          我是home页面 ，点击我会弹出框 Hello {this.props.name}
        </div>
      );
    }
  }
  
export default Home