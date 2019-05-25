import React from 'react'
import Loadable from 'react-loadable';
//import Loading from './my-loading-component';

//Loading, 指加载的时候应该显示什么组件
const LoadableComponent = Loadable({
  loader: () => import('./index.js'),
  loading: () => {
    return <div>loading</div>
  },
});

export default () => <LoadableComponent/>;


