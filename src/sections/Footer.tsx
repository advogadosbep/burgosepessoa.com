import logo from '../asserts/logo-branca.png';
import { WhatsappLogo, FacebookLogo, YoutubeLogo, InstagramLogo, LinkedinLogo, MapPin  } from "@phosphor-icons/react";


function Footer({ open }: any) {
    return (
        <div className='bg-gray-700 flex flex-col items-center px-5 py-10'>
            <img className='h-36' src={logo} alt="logo-burgosepessoa" />
            <div className='flex items-center gap-1'>
                <FacebookLogo size={20} weight="fill" className='text-yellow-500 ease-in-out duration-300 hover:cursor-pointer hover:text-gray-100'/>
                <InstagramLogo size={20} weight="fill" className='text-yellow-500 ease-in-out duration-300 hover:cursor-pointer hover:text-gray-100'/>
                <YoutubeLogo size={20} weight="fill" className='text-yellow-500 ease-in-out duration-300 hover:cursor-pointer hover:text-gray-100'/>
                <LinkedinLogo size={20} weight="fill" className='text-yellow-500 ease-in-out duration-300 hover:cursor-pointer hover:text-gray-100'/>
            </div>
            <div className='flex flex-col items-center'>
                <div className='flex flex-col items-center'>
                    <div className='flex text-gray-100 text-sm font-semibold items-center gap-1'>
                        <WhatsappLogo size={16} weight="bold" className='text-yellow-500'/>
                        <p>(81) 9 9606-1149</p>
                    </div>
                    <div className='flex text-gray-100 text-sm font-semibold items-center gap-1'>
                        <MapPin size={16} weight="bold" className='text-yellow-500'/>
                        <p>R. Padre Carapuceiro, 858 - Boa Viagem, Recife</p>
                    </div>
                </div>
                <p className='text-gray-100 font-normal text-center'>advogados@burgosepessoa.com</p>
                <p className='text-gray-100 font-semibold text-center py-2 text-sm'>
                    Atendimento ao público de Segunda a Sexta, das 09h às 18h.<br />
                    Horários alternativos são possíveis, desde que previamente agendados.
                </p>
                <p className='text-gray-100 hover:cursor-pointer ease-in-out duration-300 hover:text-blue-400 hover:underline decoration-blue-400 text-xs md:text-sm'
                    onClick={() => open()}
                >Termos de Privacidade</p>
            </div>
        </div>
    )
}

export default Footer;
