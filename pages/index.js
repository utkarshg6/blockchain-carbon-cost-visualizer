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
    {
        key: 'custom',
        text: 'Custom',
        value: 'custom'
    },
]


class ComponentIndex extends Component {

    state = {
        txType: 'custom'
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
                    ['Coal', 50],
                    ['Hydro', 10],
                    ['Solar', 10],
                    ['Natural Gas', 10],
                    ['Others', 20],
                ]}
                options={{
                    title: 'Energy Consumption',
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
                    style={{ marginRight: '200px', width: '300px' }}
                    value={this.state.txType}
                    onChange={(e, { value }) => {
                        console.log('Tx Type State Changed to', value)
                        this.setState({ txType: value })
                    }}
                />
                <Input
                    placeholder='Ethereum Transaction Hash...'
                    style={{ marginRight: '25px', width: '300px' }}
                    onChange={(e, { value }) => {
                        console.log('ETH Tx Value Entered', value)
                        this.setState({ txType: 'custom' })
                    }}
                />
                <Input
                    placeholder='RSK Transaction Hash...'
                    style={{ width: '300px' }}
                    onChange={(e, { value }) => {
                        console.log('RSK Tx Value Entered', value)
                        this.setState({ txType: 'custom' })
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
                    ['Ethereum', 14930.00],
                    ['RSK', 170.00]
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