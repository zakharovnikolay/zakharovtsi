import React, { PureComponent } from 'react'

class Footer extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="bg-blue-500 text-lg">
            <ul className="flex space p-4">
            <div className="flex-grow flex space-x-5">
                <a href="/" style={{ color: 'blue' }}>Home</a>
                <a href="/about" style={{ color: 'blue' }}>About</a>
                <a href="/blog" style={{ color: 'blue' }}>Blog</a>
            </div>
            </ul>
            </div>
        )
    }
}

export default Footer