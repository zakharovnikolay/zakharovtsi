import { PureComponent } from 'react'

class Footer extends PureComponent {
    render() {
        return (
            <div className="bg-green-700 text-white py-8 px-8">
                <div className="max-w-screen-xl mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Контактная информация</h2>
                    
                    <div className="space-y-4">
                        <div>
                            <p className="text-lg">677009, Якутск, ул. Кулаковского, 46</p>
                        </div>
                        
                        <div className="space-y-2">
                            <p className="text-lg">+7 (914) 826-71-46</p>
                            <p className="text-lg">zkhrvnikolay@mail.ru</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer