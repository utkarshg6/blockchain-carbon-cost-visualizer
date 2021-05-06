/*
The Header file that will remain constant.
*/

import React, { Component } from 'react';
import { Menu, Popup, Dimmer, Header } from 'semantic-ui-react';

import DisclaimerPopup from './disclaimer-popup';

import WhatsThisSection from './whats-this-section';
import AboutUs from './about-us-section';
import Disclaimer from './disclaimer';

class MenuHeader extends Component {
    state = {}

    render() {
        const { activeWhatsThis, activeAboutUs, activeDisclaimer } = this.state

        return (
            <>
                <Menu style={{ height: "60px" }}>
                    <Menu.Item>
                        <Header as='h4'>
                            Carbon Cost Explorer
                                 </Header>
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
                <Dimmer
                    active={activeDisclaimer}
                    onClickOutside={() => this.setState({ activeDisclaimer: false })}
                    page
                >
                    <Disclaimer />
                </Dimmer>

                <div
                    onClick={() => this.setState({ activeDisclaimer: true })}
                >
                    <DisclaimerPopup />
                </div>

            </>
        )
    }
}

export default MenuHeader
