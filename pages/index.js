import React, { Component } from 'react';
import Layout from '../components/layout';
import Chart from "react-google-charts";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faTree } from '@fortawesome/free-solid-svg-icons';

import { Dropdown, Input, Header, Grid, Checkbox, Card } from 'semantic-ui-react';

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
        key: 'coal',
        text: 'Coal',
        value: 'coal'
    },
    {
        key: 'hydro',
        text: 'Hydro',
        value: 'hydro'
    },
    {
        key: 'solar',
        text: 'Solar',
        value: 'solar'
    },
    {
        key: 'natural-gas',
        text: 'Natural Gas',
        value: 'natural-gas'
    },
]


class ComponentIndex extends Component {

    state = {
        txType: 'custom'
    }

    renderEnergyPicker() {
        return (
            <Grid columns={3}>
                <Grid.Row>
                    <Checkbox
                        style={{ marginRight: '25px', padding: '10px' }}
                    />
                    <Dropdown
                        placeholder='Energy Type'
                        selection
                        options={energyOptions}
                        style={{ marginRight: '25px' }}
                    />
                    <Input
                        label={{ basic: true, content: '%' }}
                        labelPosition='right'
                        placeholder='100'
                        style={{ width: '75px' }}
                    />
                </Grid.Row>

                <Grid.Row>
                    <Checkbox
                        style={{ marginRight: '25px', padding: '10px' }}
                    />
                    <Dropdown
                        placeholder='Energy Type'
                        selection
                        options={energyOptions}
                        style={{ marginRight: '25px' }}
                    />
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
                    <Grid.Column>
                        {this.renderBarChart()}
                    </Grid.Column>
                    <Grid.Column>
                        <Card.Group>
                            <Card>
                                <FontAwesomeIcon
                                    style={{ height: '100px', padding: '10px' }}
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
                                    style={{ height: '100px', padding: '10px' }}
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