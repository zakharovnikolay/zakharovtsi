import React, { PureComponent } from 'react'

class Header extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
        <div className="bg-black text-lg">
        <ul className="flex space p-4">
            <li className="font-bold text-white" style={{ display: 'flex', alignItems: 'center' }}></li>
            <div className="flex-grow flex space-x-5">
                <li><a href="/" style={{ color: 'white' }}>Home</a></li>
                <li><a href="/about" style={{ color: 'white' }}>About</a></li>
                <li><a href="/blog" style={{ color: 'white' }}>Blog</a></li>
            </div>
        </ul>
        </div>
        //
        )
    }
}

export default Header