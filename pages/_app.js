
import React from 'react';
import {createWrapper} from 'next-redux-wrapper'
import { Provider } from 'react-redux'
import store from '../store'

const MyApp = (props) => {
        const {Component, pageProps} = props
        return(
            <Provider store={store} >
                <Component {...pageProps}/>
            </Provider>
        )
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