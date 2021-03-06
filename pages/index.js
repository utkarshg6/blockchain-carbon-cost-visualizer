import React, { Component } from "react";
import Layout from "../components/layout";
import Chart from "react-google-charts";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faTree } from "@fortawesome/free-solid-svg-icons";

import { Dropdown, Input, Header, Grid, Card, Label, Placeholder } from "semantic-ui-react";

const transactionOptions = [
    {
        key: "nft-deploy",
        text: "NFT Deploy",
        value: "NFT Deploy",
    },
    {
        key: "nft-mint",
        text: "NFT Mint",
        value: "NFT Mint",
    },
    {
        key: "nft-transfer",
        text: "NFT Transfer",
        value: "NFT Transfer",
    },
];

const energyOptions = [
    {
        key: "worldAverage",
        text: "World Average",
        value: "worldAverage",
    },
    {
        key: "fossil80Renewable20",
        text: "80% Fossil and 20% Renewable",
        value: "fossil80Renewable20",
    },
    {
        key: "fossil50Renewable50",
        text: "50% Fossil and 50% Renewable",
        value: "fossil50Renewable50",
    },
    {
        key: "fossil20Renewable80",
        text: "20% Fossil and 80% Renewable",
        value: "fossil20Renewable80",
    },
];

const nftOptions = [
    {
        key: "mypt-nft",
        text: "Mypt NFT",
        value: "Mypt NFT",
    },
    {
        key: "crypto-coins",
        text: "CryptoCoins",
        value: "CryptoCoins",
    },
    {
        key: "k-compound",
        text: "KCompound",
        value: "KCompound",
    },
];

class ComponentIndex extends Component {
    state = {
        txType: "NFT Deploy",
        nftType: "Mypt NFT",

        ethNFT: [],

        ethHash: "0xb78615d79cf590588c055319f96617c842040db9",

        energyType: "worldAverage",

        deployGCO2e: 0,
        mintGCO2e: 0,
        transferGCO2e: 0,
        loading: true,

        fossils: 99,
        renewable: 1,
        coal: 72,
        oil: 6,
        gas: 21,
    };

    fetchGetHash() {
        var raw = "";

        var requestOptions = {
            method: "POST",
            body: raw,
            redirect: "follow",
        };

        fetch("https://once-hackathon-api.herokuapp.com/get-hash", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                this.setState({ ethNFT: result.ethNFT });
            })
            .catch((error) => console.log("error", error));
    }

    changeNFTHash(nft) {
        const { ethNFT } = this.state;
        for (let item of ethNFT) {
            if (item.name == nft) {
                this.setState({ ethHash: item.address });
            }
        }
    }

    fetchCarbonCost(energy, nftName) {
        this.setState({ loading: true });

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Access-Control-Allow-Origin", "http://localhost:3000");
        myHeaders.append("Access-Control-Allow-Credentials", "true");

        console.log("Send API For", energy, nftName);

        var raw = JSON.stringify({
            energyProfile: energy,
            nftName: nftName,
        });

        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };

        fetch("https://once-hackathon-api.herokuapp.com/carbon-cost", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                // console.log(result)
                this.setState({
                    deployGCO2e: parseFloat(result.deployGCO2e),
                    mintGCO2e: parseFloat(result.mintGCO2e),
                    transferGCO2e: parseFloat(result.transferGCO2e),
                    loading: false,
                });
            })
            .catch((error) => console.log("error", error));
    }

    componentDidMount() {
        this.fetchGetHash();
        this.fetchCarbonCost(this.state.energyType, this.state.nftType);
    }

    renderEnergyPicker() {
        return (
            <Grid style={{ marginLeft: "15px" }}>
                <Grid.Row>
                    <Dropdown
                        placeholder="Energy Ratio"
                        selection
                        options={energyOptions}
                        defaultValue={"worldAverage"}
                        style={{ width: "542px", marginRight: "25px", marginTop: "30px" }}
                        onChange={(e, { value }) => {
                            // console.log('Energy Mix Value Changed to', value)
                            this.setState({ energyType: value });
                            switch (value) {
                                case "worldAverage":
                                    this.setState({
                                        coal: 72,
                                        oil: 6,
                                        gas: 21,
                                        renewable: 1,
                                        fossils: 99,
                                    });
                                    break;
                                case "fossil80Renewable20":
                                    this.setState({
                                        coal: 57,
                                        oil: 6,
                                        gas: 17,
                                        renewable: 20,
                                        fossils: 80,
                                    });
                                    break;
                                case "fossil50Renewable50":
                                    this.setState({
                                        coal: 36,
                                        oil: 3,
                                        gas: 11,
                                        renewable: 50,
                                        fossils: 50,
                                    });
                                    break;
                                case "fossil20Renewable80":
                                    this.setState({
                                        coal: 15,
                                        oil: 1,
                                        gas: 4,
                                        renewable: 80,
                                        fossils: 20,
                                    });
                                    break;
                                case "custom":
                                    this.setState({
                                        coal: 72,
                                        oil: 6,
                                        gas: 21,
                                        renewable: 1,
                                        fossils: 99,
                                    });
                                    break;
                                default:
                                    this.setState({
                                        coal: 72,
                                        oil: 6,
                                        gas: 21,
                                        renewable: 1,
                                        fossils: 99,
                                    });
                                    break;
                            }
                            this.fetchCarbonCost(value, this.state.nftType);
                        }}
                    />
                </Grid.Row>
                <Grid.Row>
                    <div style={{ width: "20px", margin: "10px", backgroundColor: "#0052CC", marginRight: "5px" }}></div>
                    <Label style={{ width: "200px", textAlign: "left", marginRight: "5px", backgroundColor: "white", color: "black" }} size={"big"}>
                        Fossil Fuels
					</Label>
                    <div
                        style={{
                            backgroundColor: "#0052CC",
                            width: String(3 * this.state.fossils) + "px",
                        }}
                    ></div>
                    <div
                        style={{
                            backgroundColor: "#EFF2F7",
                            width: String(300 - 3 * this.state.fossils) + "px",
                        }}
                    ></div>
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
                    <div style={{ width: "20px", margin: "10px", backgroundColor: "#00B1A4", marginRight: "5px" }}></div>
                    <Label style={{ width: "200px", textAlign: "left", marginRight: "5px", backgroundColor: "white", color: "black" }} size={"big"}>
                        Renewable Sources
					</Label>
                    <div
                        style={{
                            backgroundColor: "#0052CC",
                            width: String(3 * this.state.renewable) + "px",
                        }}
                    ></div>
                    <div
                        style={{
                            backgroundColor: "#EFF2F7",
                            width: String(300 - 3 * this.state.renewable) + "px",
                        }}
                    ></div>
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
        );
    }

    renderPieChart() {
        return (
            <Chart
                width={"500px"}
                height={"300px"}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ["Energy Type", "%"],
                    ["Coal", this.state.coal],
                    ["Oil", this.state.oil],
                    ["Gas", this.state.gas],
                    ["Renewables", this.state.renewable],
                ]}
                options={{
                    title: "Energy Sources",
                    // Just add this option
                    // is3D: true,
                    slices: {
                        3: { color: "#00B1A4" },
                    },
                }}
                rootProps={{ "data-testid": "2" }}
            />
        );
    }

    renderPieChartPlaceholder() {
        return (
            <Placeholder style={{ height: 300, width: 500 }}>
                <Placeholder.Image />
            </Placeholder>
        );
    }

    renderFirstHalf() {
        return (
            <>
                <div style={{ display: "flex", margin: "auto" }}>
                    <Label
                        color='black'
                        size='big'
                    >
                        Action
                    </Label>
                    <Dropdown
                        placeholder="Transaction Type"
                        selection
                        options={transactionOptions}
                        style={{ marginRight: "25px", width: "264px" }}
                        value={this.state.txType}
                        onChange={(e, { value }) => {
                            // console.log('Tx Type State Changed to', value)
                            this.setState({ txType: value });
                        }}
                    />
                    <Label
                        color='black'
                        size='big'
                    >
                        NFT Contract
                    </Label>
                    <Dropdown
                        placeholder="NFT Type"
                        selection
                        options={nftOptions}
                        style={{ marginRight: "25px", width: "264px" }}
                        value={this.state.nftType}
                        onChange={(e, { value }) => {
                            // console.log('NFT Type State Changed to', value)
                            this.setState({ nftType: value });
                            this.fetchCarbonCost(this.state.energyType, value);
                            this.changeNFTHash(value);
                        }}
                    />
                    <Label
                        color='black'
                        size='big'
                    >
                        Transaction Hash
                    </Label>
                    <Label
                        style={{
                            // backgroundColor: 'white',
                            fontSize: "16px",
                            color: "black",
                            border: "1px solid #808080",
                            background: "white",
                        }}
                    >
                        {/* <strong>Tx Hash: </strong> */}
                        {this.state.ethHash.slice(0, 20) + "..."}
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
                <Header as="h3" style={{ marginBottom: "-20px" }}>
                    Energy Mix
				</Header>
                <Grid columns={2}>
                    <Grid.Row>
                        <Grid.Column>{this.renderEnergyPicker()}</Grid.Column>
                        <Grid.Column>{this.state.loading ? this.renderPieChartPlaceholder() : this.renderPieChart()}</Grid.Column>
                    </Grid.Row>
                </Grid>
            </>
        );
    }

    renderBarChart() {
        return (
            <Chart
                width={"500px"}
                height={"250px"}
                chartType="BarChart"
                loader={<div>Loading Chart</div>}
                data={[
                    [
                        "Blockchain",
                        "gCO2e",
                        { role: "style" },
                        {
                            sourceColumn: 0,
                            role: "annotation",
                            type: "string",
                            calc: "stringify",
                        },
                    ],
                    ["NFT Deploy", this.state.deployGCO2e, "#f3b338", null],
                    ["NFT Mint", this.state.mintGCO2e, "#0C60C5", null],
                    ["NFT Transfer", this.state.transferGCO2e, "#00B1A4", null],
                ]}
                options={{
                    title: "Carbon Cost Per Transaction (gCO2e)",
                    width: 500,
                    height: 250,
                    bar: { groupWidth: "50%" },
                    legend: { position: "none" },
                }}
                // For tests
                rootProps={{ "data-testid": "6" }}
            />
        );
    }

    getGco2eValue() {
        const { txType } = this.state;

        switch (txType) {
            case "NFT Deploy":
                return this.state.deployGCO2e;
            case "NFT Mint":
                return this.state.mintGCO2e;
            case "NFT Transfer":
                return this.state.transferGCO2e;
            default:
                return 0;
        }
    }

    getCarPollutionValue() {
        const factor = 397;
        const pollutionValue = this.getGco2eValue() / factor;

        return String(pollutionValue.toFixed(2));
    }

    getTreePollutionValue() {
        const factor = 22000;
        const pollutionValue = this.getGco2eValue() / factor;

        return String(pollutionValue.toFixed(2));
    }

    renderCards() {
        const cardStyle = {
            boxShadow: "none",
            backgroundColor: "#EFF2F7",
            width: "300px",
        };

        const headerStyle = {
            fontSize: "30px",
            fontWeight: "bold",
        };

        const contentStyle = {
            fontSize: "14px",
            marginTop: "14px",
            color: "#929FB3",
        };

        const labelStyle = {
            textAlign: 'center',
            width: '100px',
            marginTop: "10px",
        };

        return (
            <Card.Group style={{ marginLeft: "100px", marginTop: "30px" }}>
                <Card style={cardStyle}>
                    <div style={{ padding: "20px" }}>
                        <FontAwesomeIcon
                            style={{
                                color: "#3366CC",
                                height: "65px",
                                padding: "10px",
                            }}
                            icon={faCar}
                        />
                        <Card.Header style={headerStyle}>{this.getCarPollutionValue() + " Miles"}</Card.Header>
                        <Card.Content style={contentStyle}>Driven by a Passenger Car</Card.Content>
                        <Label color='black' style={labelStyle}>{this.state.txType}</Label>
                    </div>
                </Card>
                <Card style={cardStyle}>
                    <div style={{ padding: "20px" }}>
                        <FontAwesomeIcon
                            style={{
                                color: "#00B1A4",
                                height: "65px",
                                padding: "10px",
                            }}
                            icon={faTree}
                        />
                        <Card.Header style={headerStyle}>{this.getTreePollutionValue() + " Trees"}</Card.Header>
                        <Card.Content style={contentStyle} extra>
                            Equivalent
						</Card.Content>
                        <Label color='black' style={labelStyle}>{this.state.txType}</Label>
                    </div>
                </Card>
            </Card.Group>
        );
    }

    renderBarChartPlaceholder() {
        return (
            <Placeholder style={{ height: 250, width: 1000 }}>
                <Placeholder.Image />
            </Placeholder>
        );
    }

    renderCardsPlaceholder() {
        const cardStyle = {
            boxShadow: "none",
            backgroundColor: "#DFE2E8",
            width: "300px",
        };
        return (
            <Card.Group style={{ marginLeft: "100px", marginTop: "30px" }}>
                <Card style={cardStyle}>
                    <Placeholder style={{ height: 160, width: 300 }}>
                        <Placeholder.Image />
                    </Placeholder>
                </Card>
                <Card style={cardStyle}>
                    <Placeholder style={{ height: 160, width: 300 }}>
                        <Placeholder.Image />
                    </Placeholder>
                </Card>
            </Card.Group>
        );
    }

    renderSecondHalf() {
        return (
            <Grid columns={2} style={{ marginBottom: "100px" }}>
                <Grid.Row>
                    <Grid.Column width={6}>{this.state.loading ? this.renderBarChartPlaceholder() : this.renderBarChart()}</Grid.Column>
                    <Grid.Column width={10}>{this.state.loading ? this.renderCardsPlaceholder() : this.renderCards()}</Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }

    render() {
        return (
            <Layout>
                {this.renderFirstHalf()}
                {this.renderSecondHalf()}
            </Layout>
        );
    }
}

export default ComponentIndex;
