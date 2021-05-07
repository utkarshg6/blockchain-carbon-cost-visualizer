import React, { Component } from 'react'
import { Segment, Header } from 'semantic-ui-react';


class WhatsThisSection extends Component {
    render() {
        return (
            <Segment
                style={{
                    width: '1000px',
                    height: '615px',
                    color: 'black',
                    padding: '50px 86px',
                    textAlign: 'justify',
                }}
            >
                <Header
                    style={{
                        fontSize: '30px'
                    }}
                    as='h2'>
                    Calculating Carbon Cost of Individual Blockchain Transactions
                </Header>
                <p style={{ fontSize: '16px' }}>
                    This is a project submitted by the team O.N.C.E (Operation Nifty Carbon Emissions).
                    <br></br>
                    This project is submitted under the Awareness track of the
                    {' '}
                    <a
                        target="_blank"
                        href="https://gitcoin.co/hackathon/green-nft/"
                        rel="noopener noreferrer"
                    >
                        Green NFT Hackathon
                    </a> .
                </p>

                <Header
                    style={{ fontSize: '20px' }}
                    as='h3'
                >
                    What is it about?
                </Header>

                <p style={{ fontSize: '16px' }}>
                    While there has been a lot of literature focusing on the carbon emissions and environmental impact of blockchain mining in general,
                    there are very few projects that go to the level of detail where they try to find the impact behind every transaction.
                    In this project, we try to do that!
                    Moreover, we focus specifically on the impact of NFT transactions in particular.
                    <br></br>
                    We have deployed a general Smart Contract, and we calculate the gas cost for three main types of transactions:
                    <br></br>
                    <i>Deploy, Mint, and Transfer</i>.
                </p>



                <Header
                    style={{ fontSize: '20px' }}
                    as='h3'
                >
                    How it works?
                </Header>

                <p style={{ fontSize: '16px' }}>
                    1. Select the type of the transaction
                    <br></br>
                    2. Select the transaction hash (a particular transaction)
                    <br></br>
                    3. Select the approximate energy mix used by the miners
                </p>
                <br></br>
                <p
                    style={{ fontSize: '16px' }}
                >
                    Please check out our light paper
                    {' '}
                    <a
                        target="_blank"
                        href="#"
                        rel="noopener noreferrer"
                    >
                        here
                    </a>
                    {' '}
                    for more technical information on how we calculate the approximate carbon costs.
                    <br></br>
                    The code for this project is open-sourced under the GPL v3 license. You can find the code on our Github
                    {' '}
                    <a
                        target="_blank"
                        href="https://github.com/utkarshg6/blockchain-carbon-cost-visualizer"
                        rel="noopener noreferrer"
                    >
                        here
                    </a>.
                </p>

            </Segment>
        )
    }
}

export default WhatsThisSection
