/*
Constant layout for all the web pages.
*/

import React from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
import Header from './header';
import Footer from './footer';

const Layout = (props) => {
    return (
        <>
            <Header />
            <Container
                style={{
                width: '100%',
                padding: '60px 200px',
                }}
            >
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
                    />
                    {/* <style>{'body { background-color: #EFF2F7; }'}</style> */}
                </Head>

                {props.children}
            </Container>
            <Footer />
        </>
    );
};

export default Layout
