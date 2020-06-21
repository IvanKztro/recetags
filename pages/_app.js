
//import firebase, {FirebaseContext} from "../firebase/index"
// import useAutenticacion from '../hooks/useAutenticacion'
// import AuthContext from '../context/auth/authContext';
// import AuthState from '../context/auth/authState'

import App from 'next/app';
import React from 'react';
import withRedux from 'next-redux-wrapper'
import {createWrapper} from 'next-redux-wrapper'
import { Provider } from 'react-redux'
import store from '../store'

class MyApp extends App{
    render(){
        const {Component, pageProps} = this.props
        return(
            <Provider store={store}>
                <Component {...pageProps}/>
            </Provider>
        )
    }
}

const makeStore =  () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);

// const MyApp = (props) => {
    
//     const {Component, pageProps, store} = props;

//     return(
//         <Provider store={store}>
//             <Component {...pageProps}/>
//         </Provider>
//     )
// };

// MyApp.getInitialProps = async ({ Component, ctx }) => {
//     const pageProps = Component.getInitialProps
//       ? await Component.getInitialProps(ctx)
//       : {};
//     return { pageProps };
//   };

// export default withRedux(store)(MyApp);