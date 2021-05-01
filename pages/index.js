import React, { Component } from 'react';
import Layout from '../components/layout';
import Chart from "react-google-charts";

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

    render() {
        return (
            <Layout>
                {this.renderBarChart()}
            </Layout>
        )
    }
}

export default ComponentIndex