import { PureComponent } from 'react'
import logo from '../assets/logo.svg';

class Header extends PureComponent {
    render() {
        return (
            <div className="bg-green-700">
                <ul className="flex p-4 items-center justify-between">
                  <li className="flex items-center">
                      <img src={logo} alt="App Logo" className='w-16 h-16' />
                  </li>
                  <div className="flex-grow flex justify-center space-x-16 text-4xl">
                      <li><a href="/" className='text-white hover:text-gray-300 text-3xl font-serif'>Главная</a></li>
                      <li><a href="/about" className="text-white hover:text-gray-300 text-3xl font-serif">Каталог</a></li>
                      <li><a href="/blog" className='text-white hover:text-gray-300 text-3xl font-serif'>Контакты</a></li>
                  </div>
              </ul>
            </div>
        )
    }
}

export default Header