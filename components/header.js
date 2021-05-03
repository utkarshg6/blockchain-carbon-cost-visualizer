/*
The Header file that will remain constant.
*/

import React, { Component } from 'react';
import { Menu, Popup } from 'semantic-ui-react';

class Header extends Component {
    render() {
        return (
            <Menu style={{ height: "60px" }}>
                <Menu.Item>
                    Carbon Cost Explorer
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Popup
                        trigger={
                            <Menu.Item>
                                What's this?
                            </Menu.Item>
                        }
                        content='You can change it inside components/header.js'
                        position='bottom left'
                    />

                    <Popup
                        trigger={
                            <Menu.Item>
                                About Us
                            </Menu.Item>
                        }
                        content='You can change it inside components/header.js'
                        position='bottom left'
                    />
                </Menu.Menu>
            </Menu>
        )
    }
}

export default Header
