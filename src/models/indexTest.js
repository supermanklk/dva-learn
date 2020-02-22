
// import * as apis from '../services/example';
import * as apis from '../services/example';

export default {
  namespace : 'indexTest',
  state : {
    name : 'zhnagbin',
    cNode : null,
    scriptionTest : false
  },
  reducers : {
    setName (state, payLoad) {
      console.log('run');
      console.log(payLoad);
      let _state = JSON.parse(JSON.stringify(state));
      _state.name = payLoad.data.name;
      return _state;
    },
    setCnode (state, payLoad) {
      let _state = JSON.parse(JSON.stringify(state));
      _state.cNode = payLoad.data;
      console.log('异步调用了reducer');
      console.log(payLoad);
      return _state;
    },
    setSubscriptionTest(state, payLoad) {
      let _state = JSON.parse(JSON.stringify(state));
      _state.scriptionTest = true
      return _state;
    }
  },
  // 异步修改
  effects : {
    *setNameAsync ({payLoad}, {put, call}) {
      // call 这里是用来发异步的。
      yield console.log("run async");
      yield put({
        type : "setName",
        data : {
          name : "异步彬"
        }
      });
    },
    *testCnode ({payLoad}, {put, call}) {
      console.log('开始请求异步');
      let res1 = yield call(apis.testCnode);
      console.log(res1.data.data);
      console.log('加载完成');
      if(res1.data) {
        yield put({
          type : "setCnode",
          data : res1.data.data
        })
      }
    }
  },
  // 可以做监听页面跳转做一些事情！！
  subscriptions : {
    haha({dispatch, history}) {
      console.log('监听了订阅事件');
      history.listen(({pathname}) => {
        if(pathname == '/user') {
          dispatch({
            type : "setSubscriptionTest",
          })
        }
      })
    }
  }
}