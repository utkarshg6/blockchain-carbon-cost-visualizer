import React, { Component } from 'react'
import { Container, Segment, Header, Card, Image } from 'semantic-ui-react';

class AboutUs extends Component {
    render() {
        return (
            <Segment
                style={{ width: '800px', height: '500px', color: 'black' }}
            >
                <Header as='h2'>
                    About Us
                </Header>
                <p>
                    This is a project submitted by the team O.N.C.E (Operation Nifty Carbon Emissions).
                     <br></br>
                    This project is submitted under the Awareness track of the Green NFT Hackathon.
                </p>

                <Header as='h3'>
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
                            <Card.Header>Brendan Graetz</Card.Header>
                            <Card.Meta>Tech Lead at RSK</Card.Meta>
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
                            <Card.Header>Gaurang Torvekar</Card.Header>
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
                            <Card.Header>Vijay Krishnavanshi</Card.Header>
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
                            <Card.Header>Utkarsh Gupta</Card.Header>
                            <Card.Meta>DAPP Developer at Indorse</Card.Meta>
                        </Card.Content>
                    </Card>

                </Card.Group>

            </Segment>
        )
    }
}

export default AboutUs
