import React, { Component } from 'react'
import { Segment, Header, Card, Image } from 'semantic-ui-react';

const nameStyle = {
    marginTop: '19px',
    fontSize: '18px'
}

class AboutUs extends Component {
    render() {
        return (
            <Segment
                style={{ width: '800px', height: '600px', color: 'black' }}
            >
                <Header
                    style={{
                        marginTop: '20px',
                        fontSize: '30px'
                    }}
                    as='h2'
                >
                    About Us
                </Header>
                <p
                    style={{
                        fontSize: '16px'
                    }}
                >
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
                    style={{
                        marginTop: '20px',
                        fontSize: '30px'
                    }}
                    as='h2'
                >
                    Team Members
                </Header>

                <Card.Group style={{ margin: 'auto', width: '80%' }}>
                    <Card
                        href="https://www.linkedin.com/in/brendangraetz/"
                        target="_blank"
                    >
                        <Card.Content>
                            <Image
                                style={{ height: '100px', width: '100px' }}
                                floated='right'
                                size='large'
                                src='/img/Brendan.png'
                            />
                            <Card.Header
                                style={nameStyle}
                            >Brendan Graetz</Card.Header>
                            <Card.Meta
                            >Head of Developer Experience, IOV Labs</Card.Meta>
                        </Card.Content>
                    </Card>

                    <Card
                        href="https://www.linkedin.com/in/gaurangtorvekar/"
                        target="_blank"
                    >
                        <Card.Content>
                            <Image
                                style={{ height: '100px', width: '100px' }}
                                floated='right'
                                size='large'
                                src='/img/Gaurang.jfif'
                            />
                            <Card.Header
                                style={nameStyle}
                            >
                                Gaurang Torvekar
                                </Card.Header>
                            <Card.Meta>Co-founder and CEO at Indorse</Card.Meta>
                        </Card.Content>
                    </Card>

                    <Card
                        href="https://www.linkedin.com/in/vijaykrishnavanshi/"
                        target="_blank"
                    >
                        <Card.Content>
                            <Image
                                style={{ height: '100px', width: '100px' }}
                                floated='right'
                                size='large'
                                src='/img/Vijay.png'
                            />
                            <Card.Header
                                style={nameStyle}
                            >
                                Vijay Krishnavanshi
                                </Card.Header>
                            <Card.Meta>Senior Backend Developer at Indorse</Card.Meta>
                        </Card.Content>
                    </Card>

                    <Card
                        href="https://github.com/utkarshg6"
                        target="_blank"
                    >
                        <Card.Content>
                            <Image
                                style={{ height: '100px', width: '100px' }}
                                floated='right'
                                size='large'
                                src='/img/Utkarsh.jfif'
                            />
                            <Card.Header
                                style={nameStyle}
                            >
                                Utkarsh Gupta
                                </Card.Header>
                            <Card.Meta>DAPP Developer at Indorse</Card.Meta>
                        </Card.Content>
                    </Card>

                </Card.Group>

            </Segment>
        )
    }
}

export default AboutUs
