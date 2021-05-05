/*
The Header file that will remain constant.
*/

import React, { Component } from 'react';
import { Menu, Popup, Dimmer } from 'semantic-ui-react';

import WhatsThisSection from './whats-this-section';
import AboutUs from './about-us-section';
import DisclaimerPopup from './disclaimer-popup';

class MenuHeader extends Component {
    state = {}

    render() {
        const { activeWhatsThis, activeAboutUs } = this.state

        return (
            <>
                <Menu style={{ height: "60px" }}>
                    <Menu.Item>
                        Carbon Cost Explorer
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item
                            onClick={() => this.setState({ activeWhatsThis: true })}
                        >
                            What's this?
                        </Menu.Item>

                        <Menu.Item
                            onClick={() => this.setState({ activeAboutUs: true })}
                        >
                            About Us
                        </Menu.Item>

                    </Menu.Menu>
                </Menu>
                <Dimmer
                    active={activeWhatsThis}
                    onClickOutside={() => this.setState({ activeWhatsThis: false })}
                    page
                >
                    <WhatsThisSection />
                </Dimmer>

                <Dimmer
                    active={activeAboutUs}
                    onClickOutside={() => this.setState({ activeAboutUs: false })}
                    page
                >
                    <AboutUs />
                </Dimmer>
                <DisclaimerPopup />
            </>
        )
    }
}

export default MenuHeader
