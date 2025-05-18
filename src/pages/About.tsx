import { PureComponent, type ReactNode } from 'react'

interface Props {}
interface State {}

class About extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            
        }
    }

    render(): ReactNode {
        return (
            <div className="bg-cover bg-center h-screen p-6">
            <div className="text-black text-left text-2xl space-y-2 pl-8">
                <p>Футзалки Puma Ultra 5 Play IN Junior</p>
                <p>Футзалки adidas Top Sala Competition IN</p>
                <p>Футзалки Nike Gato</p>
                </div>
            </div>
        )
    }
}

export default About