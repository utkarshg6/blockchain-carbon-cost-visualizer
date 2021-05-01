/*
The Header file that will remain constant.
*/

import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class Header extends Component {
    render() {
        return (
            <Menu style={{ marginTop: "30px" }}>
                <Menu.Item>
                    Carbon Cost Explorer
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        What's this?
                    </Menu.Item>
                    <Menu.Item>
                        About Us
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}

export default Header
