
// import React from 'react';
// import {createWrapper} from 'next-redux-wrapper'
// import { Provider } from 'react-redux'
// import store from '../store'
// const MyApp = (props) => {
//         const {Component, pageProps} = props
//         return(
//             <Provider store={store} >
//                 <Component {...pageProps}/>
//             </Provider>
//         )
// }
// const makeStore =  () => store;
// const wrapper = createWrapper(makeStore);
// export default wrapper.withRedux(MyApp);

//PRESISTENCIA DE DATOS REDUX

  
 import App, {Container} from 'next/app'
 import React from 'react'
 import { PersistGate } from 'redux-persist/lib/integration/react';
 import withReduxStore from '../lib/with-redux-store'
 import { Provider } from 'react-redux'
 class MyApp extends App {
   render () {
     const {Component, pageProps, reduxStore, persistor} = this.props
     return (
         <Provider store={reduxStore}>
           <PersistGate loading={null} persistor={persistor}>
             <Component {...pageProps} />
           </PersistGate>
         </Provider>
     )
   }
 }
 export default withReduxStore(MyApp)