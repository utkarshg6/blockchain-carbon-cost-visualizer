import React, { Component } from 'react'

class DisclaimerPopup extends Component {
    render() {
        return (
            <div
                style={{
                    top: '43%',
                    position: 'fixed',
                    color: 'white',
                    left: '-74px',
                    fontSize: 'x-large',
                    cursor: 'pointer',
                    maxWidth: '100%',
                    marginLeft: '20px',
                    transform: 'rotate(-90deg)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '0 0 4px 4px',
                    backgroundColor: '#2A2498',
                    padding: '0.5em 0.8em',
                }
                }
            >
                Disclaimer
            </div >
        )
    }
}

export default DisclaimerPopup
