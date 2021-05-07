/*
The Footer file that will remain constant.
*/

import React, { Component } from 'react';
import { Menu, Header } from 'semantic-ui-react';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCopyright } from '@fortawesome/free-solid-svg-icons';

class Footer extends Component {
    render() {
        return (
            <Menu
                text
                style={{
                    position: 'fixed', bottom: '0', width: '100%', borderRadius: '0', textAlign: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 50px 0 rgba(76,147,230,0.1)',
                    fontSize: '16px',
                    zIndex: '1',
                    backgroundColor: 'white',
                    marginBottom: '0px',
                    height: '60px'
                }}
            // inverted
            >
                <Menu.Item>
                    <Header
                        style={{
                            fontSize: '16px',
                            lineHeight: '20px',
                            marginLeft: '80px'
                        }}
                    >
                        {/* <FontAwesomeIcon
                            style={{
                                height: '14px'
                            }}
                            icon={faCopyright}
                        />
                        {' '} */}
                        &copy; Reserved by O.N.C.E project team. This software and code is released under the GPL v3 license.
                    </Header>
                </Menu.Item>
            </Menu>
        )
    }
}

export default Footer
