import React from 'react';
import Head from 'next/head';
import {Global} from '@emotion/core';
import Navbar from './Navbar';

const Layout = (props) => {
    return ( 
        <>
            <Head>
                <title>Recetangs</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta httpEquiv="Expires" content="0" crossOrigin="anonymous"/>
                <meta httpEquiv="Last-Modified" content="0"/>
                <meta httpEquiv="Cache-Control" content="no-cache, mustrevalidate"/>
                <meta httpEquiv="Pragma" content="no-cache"></meta>
                <link rel="stylesheet" href="./styles.css"/>

                <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossOrigin="anonymous"/>
                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"/>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous"/>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/>
                <script src="https://kit.fontawesome.com/997099676b.js" crossOrigin="anonymous"/>

                
            </Head>
            <Navbar/>
            <main className="mt-4">
                {props.children}
            </main>
        </>
     );
}
 
export default Layout;