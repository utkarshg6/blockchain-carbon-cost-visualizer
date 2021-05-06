This is a project by team O.N.C.E. (Operation Nifty Carbon Emissions)! The team is comprised of experienced software engineers from RSK and Indorse! 

## Project Scope

In every serious conversation about blockchains, in particular NFTs, there are always detractors who talk about how harmful the NFTs are for the environment. One of the rebuttals to this argument is the renewable energy sources used by miners across the world. Still, we do not have the actual numbers to prove our point and show how “green” the NFTs are. In this project, we assess the actual environmental impact of the NFTs by going drilled down all the way to the transaction level. Several projects showcase the environmental impact of a blockchain network as a whole. This project attempts to go further, by segregating the NFT transactions independently. 

We have used a sample Smart Contract for an NFT on the Ethereum blockchain and look at various types of transactions such as “deploy”, “mint”, and “transfer”. Each transaction will have a different gas cost associated with that, hence varying carbon emission impact. We also consider other factors like the energy mix used for mining these transactions and try to make it palatable and easy to understand by comparing these values against trees felled or miles travelled in a typical car. 

### Website
https://blockchain-carbon-cost-visualizer.vercel.app/

### Light paper
XXX

### Technology used

- Frontend - ReactJS
- Backend - NodeJS + web3.js
- Smart Contract - Solidity

### Project Structure

- We have created 2 repos for this project. This is the repo for the frontend of the SPA (Single Page App)
    - This repo is the main visualization of the project where we compare the different NFT transactions and showcase how much energy they consume as compared to cutting down trees or driving around in a car!
- The backend can be found in [this repo](https://github.com/vijaykrishnavanshi/once-hackathon-api)
    - This is the repo where we have APIs that feed data to the React visualization
    - This repo also connects to a script that calculates the estimated energy consumption and the carbon costs associated with the various transactions

### Team

1. Project Lead - Brendan Graetz, RSK
2. Gaurang Torvekar, Indorse
3. Vijay Krishnavanshi, Indorse
4. Utkarsh Gupta, Indorse

### License

This project is released under the [Apache 2 license](https://www.apache.org/licenses/LICENSE-2.0)

---

## Installation Instructions

## Summary

- [Getting Started](README.md#getting-started)
- [Dependencies](README.md#dependencies)
- [Tech Stack](README.md#tech-stack)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to install either `npm` or `yarn` to build this project. Here are the link to resources to get started.

- [`npm`](https://www.npmjs.com/get-npm)
- [`yarn`](https://classic.yarnpkg.com/en/docs/install/#windows-stable)

### Installing

First of all clone the repository using the following command.

```bash
git clone https://github.com/utkarshg6/blockchain-carbon-cost-visualizer.git
```

Traverse to the `blockchain-carbon-cost-visualizer`.

```bash
cd blockchain-carbon-cost-visualizer
```

#### Installing through `npm`

In case you are installing through `npm` follow the instructions below. If you are installing through `yarn` then jump ahead to [installation through `yarn`.](README.md#installation-through-yarn)

```bash
npm i
```

To run the app in development mode, use this command.

```bash
npm run dev
```

#### Installation through `yarn`

To install the dependencies you can do it by using the following command.

```bash
yarn
```

To run the app in development mode, use this command.

```bash
yarn dev
```

### Viewing it in the Browser

You can open [http://localhost:3000/](http://localhost:3000/) to view it in the browser.

## Dependencies

You may find the dependencies inside the [`package.json`](package.json) file.

## Tech Stack

1. React.js
2. Next.js

Vercel is used for hosting.
