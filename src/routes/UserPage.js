import React, {Fragment} from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import Child from '../components/Child';
import styles from './IndexPage.css';

// import * as apis from '../services/example';

class UserPage extends React.Component {

  componentDidMount() {
    // apis.testCnode().then((res) => {
    //   console.log(res);
    // })
  }

  goToMain = () => {
    this.props.history.push("/");
  }

  handleSetName = () => {
    this.props.dispatch({
      type : "indexTest/setName",
      data : {
        name : '胖汤汤'
      }
    })
  }

  handleSetNameAsync = () => {
    this.props.dispatch({
      type : "indexTest/setNameAsync",
      data : {
        name : '胖汤汤'
      }
    })
  }

  handleAsyncCnode = () => {
    this.props.dispatch({
      type : "indexTest/testCnode",
    })
  }

  render() {
    console.log('查看渲染');
    console.log(this.props);
    return (
      <Fragment>
        <div>
          我是用户！
          <Link to = "/">首页</Link>
          <button onClick = {this.goToMain} > 首页 </button>
          name : {this.props.name}
          &nbsp;
          msg : {this.props.msg}
          <button onClick = {this.handleSetName}>通过dispatch修改name</button>
          <button onClick = {this.handleSetNameAsync}>通过dispatch异步修改name</button>
          <button onClick = {this.handleAsyncCnode}>异步请求接口查看控制台</button>
          <Child></Child>
        </div>
      </Fragment>
    )
  }
}

// export default connect()(UserPage);
// export default UserPage;

const mapStateToProps = state => {
  console.log(state);
  return {
    msg : "获取到了modle里面的数据",
    name : state.indexTest.name,
    cNode : state.indexTest.cNode,
    scriptionTest : state.indexTest.scriptionTest
  }
}
export default connect(mapStateToProps)(UserPage);