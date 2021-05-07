import React, { Component } from 'react'
import { Segment, Header } from 'semantic-ui-react';


class WhatsThisSection extends Component {
    render() {
        return (
            <Segment
                style={{ width: '700px', height: '250px', color: 'black' }}
            >
                <Header
                    style={{
                        marginTop: '10px',
                        fontSize: '30px'
                    }}
                    as='h2'
                >
                    Disclaimer
                </Header>
                <p style={{
                    fontSize: '16px',
                    marginLeft: '50px',
                    marginRight: '50px'
                }}>
                    While we have used our best judgement and the most reliable sources of information available,
                    the values shown on this website are still approximations!
                    Our intent is to show the relative carbon emissions from various comparable transactions for selected Smart Contracts,
                    and these values may vary for other Smart Contracts. We assume no liability for the accuracy of these values whatsoever.
                </p>
            </Segment>
        )
    }
}

export default WhatsThisSection
