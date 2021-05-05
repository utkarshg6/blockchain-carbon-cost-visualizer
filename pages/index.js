import React, { Component } from 'react';
import Layout from '../components/layout';
import Chart from "react-google-charts";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faTree } from '@fortawesome/free-solid-svg-icons';

import { Dropdown, Input, Header, Grid, Checkbox, Card, Label } from 'semantic-ui-react';

const transactionOptions = [
    {
        key: 'custom',
        text: 'Custom',
        value: 'custom'
    },
    {
        key: 'nft-mint',
        text: 'NFT Mint',
        value: 'nft-mint'
    },
    {
        key: 'nft-deploy',
        text: 'NFT Deploy',
        value: 'nft-deploy'
    },
    {
        key: 'nft-transfer',
        text: 'NFT Transfer',
        value: 'nft-transfer'
    },
]

const energyOptions = [
    {
        key: 'world-average',
        text: 'World Average',
        value: 'world-average'
    },
    {
        key: 'eighty-twenty',
        text: '80% Fossil Fuels, 20% Renewable Energy',
        value: 'eighty-twenty'
    },
    {
        key: 'fifty-fifty',
        text: '50% Fossil Fuels, 50% Renewable Energy',
        value: 'fifty-fifty'
    },
    {
        key: 'twenty-eighty',
        text: '20% Fossil Fuels, 80% Renewable Energy',
        value: 'twenty-eighty'
    },
    // {
    //     key: 'custom',
    //     text: 'Custom',
    //     value: 'custom'
    // },
]


class ComponentIndex extends Component {

    state = {
        txType: 'custom',
        ethHash: '',
        rskHash: '',
        renewable: 28,
        fossils: 72,
        disableEnergyMixInput: true,

        ethGCO2e: 14930.00,
        rskGCO2e: 170.00
    }

    fetchGetHash() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "transactionType": "NFT Mint"
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://once-hackathon-api.herokuapp.com/get-hash", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                // this.setState({
                //     ethHash: result.ethHash[0],
                //     rskHash: result.rskHash[0]
                // })
            })
            .catch(error => console.log('error', error));
    }

    fetchCarbonIntensity() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        myHeaders.append('Access-Control-Allow-Credentials', 'true');

        var raw = JSON.stringify({
            "energyMix": [
                {
                    "energyType": "Renewable",
                    "percentage": this.state.renewable
                    // "percentage": 1
                },
                {
                    "energyType": "Fossil",
                    "percentage": this.state.fossils
                    // "percentage": 99
                }
            ],
            "ethHash": "0x112dc1cd0a6c50aae90bcb37f0377b510ede046dffb1e18cb32d33a6a4ab2710",
            "rskHash": "0x0bbaf7f86191c3c0461b5ee99508abcfc6c5067c3a82e43f8dcc2efd792cf070",
            "transactionType": "NFT Mint"
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://once-hackathon-api.herokuapp.com/carbon-intesity", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                this.setState({
                    ethGCO2e: result.ethGCO2e,
                    rskGCO2e: result.rskGCO2e
                })
            })
            .catch(error => console.log('error', error));

    }

    componentDidMount() {
        this.fetchGetHash()
        this.fetchCarbonIntensity()
    }

    renderEnergyPicker() {
        return (
            <Grid style={{ marginLeft: '15px' }}>
                <Grid.Row>
                    <Dropdown
                        placeholder='Energy Ratio'
                        selection
                        options={energyOptions}
                        defaultValue={'world-average'}
                        style={{ width: '300px', marginRight: '25px' }}
                        onChange={(e, { value }) => {
                            console.log('Energy Mix Value Changed to', value)
                            switch (value) {
                                case 'world-average':
                                    this.setState({ fossils: 72, renewable: 28, disableEnergyMixInput: true })
                                    break;
                                case 'eighty-twenty':
                                    this.setState({ fossils: 80, renewable: 20, disableEnergyMixInput: true })
                                    break;
                                case 'fifty-fifty':
                                    this.setState({ fossils: 50, renewable: 50, disableEnergyMixInput: true })
                                    break;
                                case 'twenty-eighty':
                                    this.setState({ fossils: 20, renewable: 80, disableEnergyMixInput: true })
                                    break;
                                case 'custom':
                                    this.setState({ disableEnergyMixInput: false })
                                    break;
                                default:
                                    this.setState({ fossils: 20, renewable: 80 })
                                    break;
                                // code block
                            }
                            this.fetchCarbonIntensity()
                        }}
                    />
                </Grid.Row>
                <Grid.Row>
                    <Label
                        style={{ width: '200px', textAlign: 'center', marginRight: '5px' }}
                        color={'brown'}
                        size={'big'}
                    >
                        Fossil Fuels
                    </Label>
                    <Input
                        label={{ basic: true, content: '%' }}
                        labelPosition='right'
                        placeholder='100'
                        style={{ width: '75px' }}
                        value={this.state.fossils}
                        onChange={(e, { value }) => {
                            console.log(value)
                            this.setState({ fossils: value, renewable: 100 - value })
                        }}
                        disabled={this.state.disableEnergyMixInput}
                    />
                </Grid.Row>
                <Grid.Row>
                    <Label
                        style={{ width: '200px', textAlign: 'center', marginRight: '5px' }}
                        color={'green'}
                        size={'big'}
                    >
                        Renewable Sources
                    </Label>
                    <Input
                        label={{ basic: true, content: '%' }}
                        labelPosition='right'
                        placeholder='100'
                        style={{ width: '75px' }}
                        value={this.state.renewable}
                        onChange={(e, { value }) => {
                            console.log(value)
                            this.setState({ fossils: 100 - value, renewable: value })
                        }}
                        disabled={this.state.disableEnergyMixInput}
                    />
                </Grid.Row>
            </Grid>
        )
    }

    renderPieChart() {
        return (
            <Chart
                width={'500px'}
                height={'300px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Energy Type', '%'],
                    ['Renewables', this.state.renewable],
                    ['Fossil Fuels', this.state.fossils],
                    // ['Other', 0]
                    // ['Solar', 10],
                    // ['Natural Gas', 10],
                    // ['Others', 20],
                ]}
                options={{
                    title: 'Energy Sources',
                    // Just add this option
                    is3D: true,
                }}
                rootProps={{ 'data-testid': '2' }}
            />
        )
    }

    renderFirstHalf() {
        return (
            <>
                <Dropdown
                    placeholder='Transaction Type'
                    selection
                    options={transactionOptions}
                    style={{ marginRight: '100px', width: '300px' }}
                    value={this.state.txType}
                    onChange={(e, { value }) => {
                        console.log('Tx Type State Changed to', value)
                        this.setState({ txType: value })
                    }}
                />
                <Input
                    placeholder='Ethereum Transaction Hash...'
                    style={{ marginRight: '25px', width: '400px' }}
                    value={this.state.ethHash}
                    onChange={(e, { value }) => {
                        console.log('ETH Tx Value Entered', value)
                        this.setState({ txType: 'custom' })
                        this.setState({ ethHash: value })
                    }}
                />
                <Input
                    placeholder='RSK Transaction Hash...'
                    style={{ width: '400px' }}
                    value={this.state.rskHash}
                    onChange={(e, { value }) => {
                        console.log('RSK Tx Value Entered', value)
                        this.setState({ txType: 'custom' })
                        this.setState({ rskHash: value })
                    }}
                />
                <Header as='h3'>Energy Mix</Header>
                <Grid columns={2}>
                    <Grid.Row>
                        <Grid.Column>
                            {this.renderEnergyPicker()}
                        </Grid.Column>
                        <Grid.Column>
                            {this.renderPieChart()}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

            </>
        )
    }

    renderBarChart() {
        return (
            <Chart
                width={'500px'}
                height={'250px'}
                chartType="BarChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Blockchain', 'gCO2e/kWh'],
                    ['Ethereum', this.state.ethGCO2e],
                    ['RSK', this.state.rskGCO2e]
                ]}
                options={{
                    title: "Blockchain's Carbon Cost",
                    chartArea: { width: '50%' },
                    hAxis: {
                        title: 'Total Consumption',
                        minValue: 0,
                    },
                    vAxis: {
                        title: 'Blockchain',
                    },
                }}
                // For tests
                rootProps={{ 'data-testid': '1' }}
            />
        )
    }

    renderSecondHalf() {
        return (
            <Grid columns={2}>
                <Grid.Row>
                    <Grid.Column width={6}>
                        {this.renderBarChart()}
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Card.Group>
                            <Card>
                                <FontAwesomeIcon
                                    style={{ color: '#3366CC', height: '100px', padding: '10px' }}
                                    icon={faCar}
                                />
                                <Card.Content>
                                    <Card.Header>
                                        178 miles
                                </Card.Header>
                                    <Card.Description>
                                        driven by a passenger car
                                </Card.Description>
                                </Card.Content>
                                {/* <Card.Content extra>
                                Any Extra Information
                            </Card.Content> */}
                            </Card>
                            <Card>
                                <FontAwesomeIcon
                                    style={{ color: '#109618', height: '100px', padding: '10px' }}
                                    icon={faTree}
                                />
                                <Card.Content>
                                    <Card.Header>
                                        23
                                </Card.Header>
                                    <Card.Description>
                                        fully grown trees
                                </Card.Description>
                                </Card.Content>
                            </Card>
                        </Card.Group>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }

    render() {
        return (
            <Layout>
                {this.renderFirstHalf()}
                {this.renderSecondHalf()}
            </Layout>
        )
    }
}

export default ComponentIndex