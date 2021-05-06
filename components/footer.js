/*
The Footer file that will remain constant.
*/

import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

class Footer extends Component {
    render() {
        return (
            <Segment
                style={{ position: 'fixed', bottom: '0', width: '100%', borderRadius: '0', textAlign: 'center' }}
            // inverted
            >
                Copyright Reserved by the Blockchain Carbon Cost Visualizer. This software and code was released under the Apache 2 license.
            </Segment>
        )
    }
}

export default Footer
