import React, { Component } from 'react'
import { Segment, Header } from 'semantic-ui-react';


class WhatsThisSection extends Component {
    render() {
        return (
            <Segment
                style={{ width: '1000px', height: '520px', color: 'black' }}
            >
                <Header as='h2'>
                    Calculating Carbon Cost of Individual Blockchain Transactions
                        </Header>
                <p style={{ padding: '0px 50px' }}>
                    This is a project submitted by the team O.N.C.E (Operation Nifty Carbon Emissions).
                        </p>
                <p style={{ padding: '0px 50px' }}>
                    This project is submitted under the Awareness track of the Green NFT Hackathon.
                        </p>

                <Header as='h3'>
                    What is it about?
                        </Header>

                <p style={{ padding: '0px 50px' }}>
                    While there has been a lot of literature focusing on the carbon emissions and environmental impact of blockchain mining in general,
                    there are very few projects which go to the level of detail where they try and find the impact behind every transaction.
                    In this project, we try to do that! Moreover, we focus specifically on the impact of NFT transacations in particular.
                        </p>

                <p style={{ padding: '0px 50px' }}>
                    We have deployed a general Smart Contract, and we calculate the gas cost for three main types of transactions - Deploy, Mint and Transfer.
                        </p>



                <Header as='h3'>
                    How it works?
                        </Header>

                <p style={{ padding: '0px 50px' }}>
                    1. Select the type of the transaction
                        </p>

                <p style={{ padding: '0px 50px' }}>
                    2. Select the transaction hash (a particular transaction)
                        </p>

                <p style={{ padding: '0px 50px' }}>
                    3. Select the approximate energy mix used by the miners
                        </p>

                <br></br>
                <p style={{ padding: '0px 50px' }}>
                    For more technical information on how we calculate the approximate carbon costs, please check out our light paper here
                        </p>
                <br></br>
                <p style={{ padding: '0px 50px' }}>
                    The code for this project is open sourced under the Apache 2 license. You can find the code on our Github here
                        </p>

            </Segment>
        )
    }
}

export default WhatsThisSection
