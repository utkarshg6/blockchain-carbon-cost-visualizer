import React, { Component } from 'react';
import Layout from '../components/layout';
import Chart from "react-google-charts";

import { Dropdown, Input, Header, Grid, Checkbox } from 'semantic-ui-react';

const transactionOptions = [
    {
        key: 'nft',
        text: 'Non Fungible Token (NFT)',
        value: 'nft'
    },
    {
        key: 'currency-transfer',
        text: 'Currency Transfer',
        value: 'currency-transfer'
    },
    {
        key: 'erc-20',
        text: 'ERC 20',
        value: 'erc-20'
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

    renderBarChart() {
        return (
            <Chart
                width={'800px'}
                height={'300px'}
                chartType="BarChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Blockchain', 'Energy Consumption (TWH)'],
                    ['Ethereum', 33],
                    ['RSK', 3]
                ]}
                options={{
                    title: "Blockchain's Energy Consumption",
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
                />
                <Input
                    placeholder='Ethereum Transaction Hash...'
                    style={{ marginRight: '25px', width: '300px' }}
                />
                <Input
                    placeholder='RSK Transaction Hash...'
                    style={{ width: '300px' }}
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

    render() {
        return (
            <Layout>
                {this.renderFirstHalf()}
                {this.renderBarChart()}
            </Layout>
        )
    }
}

export default ComponentIndex