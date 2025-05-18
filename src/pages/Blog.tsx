import { PureComponent, type ReactNode } from 'react'

interface Props {}
interface State {}

class Blog extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            
        }
    }

    render(): ReactNode {
        return (
            <div className="bg-cover bg-center h-screen p-6">
            <div className="text-black text-left text-2xl space-y-2 pl-8">
                <p>Принимаем заказы 24/7.</p>
                <p>Обработка заказов: 11:00-19:00 по МСК (ПН-СБ)</p>
                <p>Telegram чат: @futclubru</p>
                <p>Whatsapp: +7 914 826-71-46</p>
                <p>Телефон: +7 914 826-71-46</p>
                <p>Email: zkhrvnikolay@mail.ru</p>
                <p>Группа ВК: vk.com/futclubshop</p>
                <p>Телеграм канал: @futclubshop</p>
                </div>
            </div>
        )
    }
}

export default Blog