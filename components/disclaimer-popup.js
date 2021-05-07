import React, { Component } from 'react'

class DisclaimerPopup extends Component {
    render() {
        return (
            <div
                style={{
                    top: '43%',
                    position: 'fixed',
                    color: 'white',
                    right: '-42px',
                    fontSize: '18px',
                    cursor: 'pointer',
                    maxWidth: '100%',
                    marginLeft: '20px',
                    transform: 'rotate(270deg)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '4px',
                    backgroundColor: '#2A2498',
                    padding: '0.8em 1.2em',
                }
                }
            >
                Disclaimer
            </div >
        )
    }
}

export default DisclaimerPopup
