import React, { Component } from 'react';
import Layout from '../components/layout';
import Chart from "react-google-charts";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faTree } from '@fortawesome/free-solid-svg-icons';

import { Dropdown, Input, Header, Grid, Card, Label, Statistic } from 'semantic-ui-react';

const transactionOptions = [
    {
        key: 'nft-deploy',
        text: 'NFT Deploy',
        value: 'nft-deploy'
    },
    {
        key: 'nft-mint',
        text: 'NFT Mint',
        value: 'nft-mint'
    },
    {
        key: 'nft-transfer',
        text: 'NFT Transfer',
        value: 'nft-transfer'
    },
]

const energyOptions = [
    {
        key: 'worldAverage',
        text: 'World Average (2018) gC02e/kWh',
        value: 'worldAverage'
    },
    {
        key: 'fossil80Renewable20',
        text: '80% Fossil and 20% Renewable (2018) gC02e/kWh',
        value: 'fossil80Renewable20'
    },
    {
        key: 'fossil50Renewable50',
        text: '50% Fossil and 50% Renewable (2018) gC02e/kWh',
        value: 'fossil50Renewable50'
    },
    {
        key: 'fossil20Renewable80',
        text: '20% Fossil and 80% Renewable (2018) gC02e/kWh',
        value: 'fossil20Renewable80'
    },
]

const nftOptions = [
    {
        key: 'rare-nft',
        text: 'Rare NFT',
        value: 'rare-nft'
    },
    {
        key: 'mypt-nft',
        text: 'Mypt NFT',
        value: 'mypt-nft'
    },
]

class ComponentIndex extends Component {

    state = {
        txType: 'nft-deploy',
        nftType: 'rare-nft',
        ethHash: '0x112dc1cd0a6c50aae90bcb37f0377b510ede046dffb1e18cb32d33a6a4ab2710',
        // rskHash: '',
        renewable: 28,
        fossils: 72,
        disableEnergyMixInput: true,

        energyType: 'worldAverage',

        deployGCO2e: 0,
        mintGCO2e: 0,
        transferGCO2e: 0,
    }

    fetchGetHash() {
        var raw = "";

        var requestOptions = {
            method: 'POST',
            body: raw,
            redirect: 'follow'
        };

        fetch("https://once-hackathon-api.herokuapp.com/get-hash", requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    fetchCarbonIntensity(energy, nft) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        myHeaders.append('Access-Control-Allow-Credentials', 'true');

        const nftName = (nft == 'mypt-nft' ? 'Mypt NFT' : 'Rare NFT');
        console.log('Send API For', energy, nftName)

        var raw = JSON.stringify({
            "energyProfile": this.state.energyType,
            "nftName": nftName
            // "nftName": "Mypt NFT"
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
                    deployGCO2e: parseFloat(result.deployGCO2e),
                    mintGCO2e: parseFloat(result.mintGCO2e),
                    transferGCO2e: parseFloat(result.transferGCO2e),
                })
            })
            .catch(error => console.log('error', error));

    }

    componentDidMount() {
        this.fetchGetHash()
        this.fetchCarbonIntensity(this.state.energyType, this.state.nftType)
    }

    renderEnergyPicker() {
        return (
            <Grid style={{ marginLeft: '15px' }}>
                <Grid.Row>
                    <Dropdown
                        placeholder='Energy Ratio'
                        selection
                        options={energyOptions}
                        defaultValue={'worldAverage'}
                        style={{ width: '500px', marginRight: '25px' }}
                        onChange={(e, { value }) => {
                            console.log('Energy Mix Value Changed to', value)
                            this.setState({ energyType: value })
                            switch (value) {
                                case 'worldAverage':
                                    this.setState({ fossils: 72, renewable: 28, disableEnergyMixInput: true })
                                    break;
                                case 'fossil80Renewable20':
                                    this.setState({ fossils: 80, renewable: 20, disableEnergyMixInput: true })
                                    break;
                                case 'fossil50Renewable50':
                                    this.setState({ fossils: 50, renewable: 50, disableEnergyMixInput: true })
                                    break;
                                case 'fossil20Renewable80':
                                    this.setState({ fossils: 20, renewable: 80, disableEnergyMixInput: true })
                                    break;
                                case 'custom':
                                    this.setState({ disableEnergyMixInput: false })
                                    break;
                                default:
                                    this.setState({ fossils: 20, renewable: 80 })
                                    break;
                            }
                            this.fetchCarbonIntensity(value, this.state.nftType)
                        }}
                    />
                </Grid.Row>
                <Grid.Row>
                    <div
                        style={{ width: '20px', margin: '10px', backgroundColor: '#00B1A4', marginRight: '5px' }}
                    ></div>
                    <Label
                        style={{ width: '200px', textAlign: 'left', marginRight: '5px', backgroundColor: 'white', color: 'black' }}
                        size={'big'}
                    >
                        Fossil Fuels
                    </Label>
                    <div
                        style={{
                            backgroundColor: '#0052CC',
                            width: String(3 * this.state.fossils) + 'px'
                        }}
                    >
                    </div>
                    <div
                        style={{
                            backgroundColor: '#EFF2F7',
                            width: String(300 - (3 * this.state.fossils)) + 'px'
                        }}
                    >
                    </div>
                    {/* <Input
                        label={{ basic: true, contentf: '%' }}
                        labelPosition='right'
                        placeholder='100'
                        style={{ width: '75px' }}
                        value={this.state.fossils}
                        onChange={(e, { value }) => {
                            console.log(value)
                            this.setState({ fossils: value, renewable: 100 - value })
                        }}
                        disabled={this.state.disableEnergyMixInput}
                    /> */}
                </Grid.Row>
                <Grid.Row>
                    <div
                        style={{ width: '20px', margin: '10px', backgroundColor: '#0052CC', marginRight: '5px' }}
                    ></div>
                    <Label
                        style={{ width: '200px', textAlign: 'left', marginRight: '5px', backgroundColor: 'white', color: 'black' }}
                        size={'big'}
                    >
                        Renewable Sources
                    </Label>
                    <div
                        style={{
                            backgroundColor: '#0052CC',
                            width: String(3 * this.state.renewable) + 'px'
                        }}
                    >
                    </div>
                    <div
                        style={{
                            backgroundColor: '#EFF2F7',
                            width: String(300 - (3 * this.state.renewable)) + 'px'
                        }}
                    >
                    </div>
                    {/* <Input
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
                    /> */}
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
                    ['Fossil Fuels', this.state.fossils],
                    ['Renewables', this.state.renewable],
                ]}
                options={{
                    title: 'Energy Sources',
                    // Just add this option
                    // is3D: true,
                    slices: {
                        0: { color: '#00B1A4', offest: 0.2 },
                        1: { color: '#0052CC' },
                    },
                }}
                rootProps={{ 'data-testid': '2' }}
            />
        )
    }

    renderFirstHalf() {
        return (
            <>
                <div
                    style={{ display: 'flex', margin: 'auto', }}
                >
                    <Dropdown
                        placeholder='Transaction Type'
                        selection
                        options={transactionOptions}
                        style={{ marginLeft: '15px', marginRight: '25px', width: '200px' }}
                        value={this.state.txType}
                        onChange={(e, { value }) => {
                            console.log('Tx Type State Changed to', value)
                            this.setState({ txType: value })
                        }}
                    />
                    <Dropdown
                        placeholder='NFT Type'
                        selection
                        options={nftOptions}
                        style={{ marginRight: '25px' }}
                        value={this.state.nftType}
                        onChange={(e, { value }) => {
                            console.log('NFT Type State Changed to', value)
                            this.setState({ nftType: value })
                            this.fetchCarbonIntensity(this.state.energyType, value)
                        }}
                    />

                    <Label
                        style={{
                            // backgroundColor: 'white',
                            fontSize: '16px',
                            color: 'black',
                            border: '1px solid #808080',
                            background: 'white'
                        }}
                    >
                        {/* <strong>Tx Hash: </strong> */}
                        {this.state.ethHash.slice(0, 25) + '...'}
                    </Label>
                </div>
                {/* <Input
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
                /> */}
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
                    [
                        'Blockchain',
                        'gCO2e/kWh',
                        { role: 'style' },
                        {
                            sourceColumn: 0,
                            role: 'annotation',
                            type: 'string',
                            calc: 'stringify',
                        },
                    ],
                    ['NFT Deploy', this.state.deployGCO2e, '#f3b338', null],
                    ['NFT Mint', this.state.mintGCO2e, '#0C60C5', null],
                    ['NFT Transfer', this.state.transferGCO2e, '#00B1A4', null],
                ]}
                options={{
                    title: "Carbon Cost Per Transaction",
                    width: 500,
                    height: 250,
                    bar: { groupWidth: '25%' },
                    legend: { position: 'none' },
                }}
                // For tests
                rootProps={{ 'data-testid': '6' }}
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
                        <Card.Group
                            style={{ marginLeft: '100px' }}
                        >
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