import React, { Component } from 'react'
import { Segment, Header } from 'semantic-ui-react';


class WhatsThisSection extends Component {
    render() {
        return (
            <Segment
                style={{ width: '500px', height: '200px', color: 'black' }}
            >
                <Header as='h2'>
                    Disclaimer
                </Header>
                <p>
                    While we have tried to use our best judgement and the most reliable sources of information available,
                    the values shown on this website are still approximations! We are attempting to show the relative carbon
                    emissions from various comparable transactions for one Smart Contract,
                    and these values may vary based on the individual implementations of other contracts.
                    We assume no liability for the accuracy of these values whatsoever.
                </p>
            </Segment>
        )
    }
}

export default WhatsThisSection
