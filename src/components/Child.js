import React from 'react';

import { withRouter } from 'dva/router';


class Child extends React.Component {

    goHome = () => {
        this.props.history.push("/");
    }
    render() {
        return (
            <div>
                通用组间
                <button onClick = {this.goHome}>主页</button>
            </div>
        )
    }
}


export default withRouter(Child);




