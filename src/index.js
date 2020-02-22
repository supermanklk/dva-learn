import dva from 'dva';
import './index.css';


// 切换 history 为 browserHistory
// 官方 import createHistory from 'history/createBrowserHistory';
// const app = dva({
//     history: createHistory(),
//   });

// zhangbin

// 推荐使用 import { createBrowserHistory as createHistory  } from 'history';
// const app = dva({
//     history: createHistory(),
//   });


// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/indexTest').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
