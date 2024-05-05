import headerBg from '../asserts/header.png';
import logo from '../asserts/logo-branca.png';
import { WhatsappLogo, MapPin, FacebookLogo, InstagramLogo, LinkedinLogo  } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button"

function Header() {
    return (
        <div
            style={{
                background: `url(${ headerBg })`,
                height: `70vh`,
            }}
            className="w-full flex flex-col">
            <div className='h-10 bg-slate-800 justify-between flex items-center px-40'>
                <div className='flex gap-4'>
                    <div className='flex text-gray-100 text-sm font-light items-center gap-1'>
                        <WhatsappLogo size={16} weight="light" className='text-yellow-600'/>
                        <p>(81) 9 9676-4688</p>
                    </div>
                    <div className='flex text-gray-100 text-sm font-light items-center gap-1'>
                        <MapPin size={16} weight="light" className='text-yellow-600'/>
                        <p>Av Domingos Ferreira, 401 - Boa Viagem</p>
                    </div>
                </div>
                <div className='flex items-center gap-1'>
                    <FacebookLogo size={20} weight="fill" className='text-yellow-600 ease-in-out duration-300 hover:cursor-pointer hover:text-yellow-500'/>
                    <InstagramLogo size={20} weight="fill" className='text-yellow-600 ease-in-out duration-300 hover:cursor-pointer hover:text-yellow-500'/>
                    <LinkedinLogo size={20} weight="fill" className='text-yellow-600 ease-in-out duration-300 hover:cursor-pointer hover:text-yellow-500'/>
                </div>
            </div>
            <div className='flex items-center justify-between px-40'>
                <img className='h-20 hover:cursor-pointer' src={logo} alt="logo" />
                <ul className='flex items-center justify-center gap-2 text-gray-100 h-10'>
                    <li><Button variant="link">Sobre</Button></li>
                    <li><Button variant="link">Atuação</Button></li>
                    <li><Button variant="link">Serviços</Button></li>
                    <li><Button variant="link">Casos</Button></li>
                    <li><Button variant="preOutline">Consultoria</Button></li>
                </ul>
            </div>
            <div className='flex flex-col items-between justify-center h-full px-40 w-1/2 gap-4'>
                <p className='text-gray-100 font-bold text-6xl'>ONDE A EXPERIÊNCIA<br/> CONTA MAIS FORTE</p>
                <p className='text-gray-100'>Com nossa experiência e conhecimento, temos em nossa missão é
                 proporcionar segurança jurídica eficaz ao patrimônio de nossos clientes.</p>
                 <Button className='w-48' variant="preOutline">Agende uma Reunião</Button>
            </div>
        </div>
    )
}

export default Header;
