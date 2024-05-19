import headerBg from '../asserts/header.png';
import logo from '../asserts/logo-branca.png';
import useWindowSize from '../hooks/useWindowSize';
import useWindowScroll from '../hooks/useWindowScroll';
import { Phone, WhatsappLogo, MapPin, FacebookLogo, YoutubeLogo, InstagramLogo, LinkedinLogo, List, X  } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button"
import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

function Header() {
    const [mobileNav, setMobileNav] = useState(false);
    const titleRef = useRef(null);
    const subTitleRef = useRef(null);
    const areaBtnRef = useRef(null);

    const homeRef = document.getElementById('home');
    const sobreRef = document.getElementById('sobre');
    const atuacaoRef = document.getElementById('atuacao');
    const formRef = document.getElementById('form');
    const officeRef = document.getElementById('office');
    
    const scrollToSection = (section: any) => {
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setMobileNav(false)
    };

    const size = useWindowSize();
    const heigthEl = useWindowScroll();

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { duration: 0.8 }})

        const title = titleRef.current;
        const subTitle = subTitleRef.current;
        const areaBtn = areaBtnRef.current;

        tl.fromTo(title, {
            opacity: 0,
            y: 100,
        }, {
            opacity: 1,
            y: 0
        }).fromTo(subTitle, {
            opacity: 0,
            y: 100,
        }, {
            opacity: 1,
            y: 0
        }).fromTo(areaBtn, {
            opacity: 0,
            x: -100,
        }, {
            opacity: 1,
            x: 0
        })

    }, [])

    return (
        <div
            id="home"
            style={{
                background: `url(${ headerBg })`,
                backgroundPosition: "right",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPositionX: "50%",
                backgroundPositionY: "50%",

            }}
            className="relative w-full h-80 md:h-[80vh] flex flex-col shadow-2xl">
            <div className='hidden lg:flex h-10 bg-gray-900 justify-between items-center px-5 md:px-40'>
                <div className='flex gap-4'>
                    <div className='flex text-gray-100 text-sm font-light items-center gap-1'>
                        <Phone size={16} weight="light" className='text-yellow-500'/>
                        <p>(81) 3059-4374</p>
                    </div>
                    <div className='flex text-gray-100 text-sm font-light items-center gap-1'>
                        <MapPin size={16} weight="light" className='text-yellow-500'/>
                        <p>R. Padre Carapuceiro, 858 - Boa Viagem, Recife</p>
                    </div>
                </div>
                <div className='flex items-center gap-1'>
                    <a target='blank' href="https://m.facebook.com/burgosepessoaadvogados"><FacebookLogo size={20} weight="fill" className='text-yellow-500 ease-in-out duration-300 hover:cursor-pointer hover:text-gray-100'/></a>
                    <a target='blank' href="https://www.instagram.com/burgos_pessoa/"><InstagramLogo size={20} weight="fill" className='text-yellow-500 ease-in-out duration-300 hover:cursor-pointer hover:text-gray-100'/></a>
                    <a target='blank' href=""><YoutubeLogo size={20} weight="fill" className='text-yellow-500 ease-in-out duration-300 hover:cursor-pointer hover:text-gray-100'/></a>
                    <a target='blank' href="https://www.linkedin.com/in/burgos-e-pessoa-advogados-3229a6147/?originalSubdomain=br"><LinkedinLogo size={20} weight="fill" className='text-yellow-500 ease-in-out duration-300 hover:cursor-pointer hover:text-gray-100'/></a>
                </div>
            </div>
            <div className={`${heigthEl > size.height * 0.2 ? 'fixed bg-gray-950 px-5 py-2 top-0 left-0 z-30' : ''} flex ease-in-out duration-300 w-full items-center justify-between px-5 md:px-40`}>
                <img className='h-20 hover:cursor-pointer' src={logo} alt="logo" onClick={() => scrollToSection(homeRef)}/>
                <List
                    size={32}
                    className='md:hidden text-gray-100 hover:cursor-pointer'
                    onClick={() => setMobileNav(true)}
                />
                <ul className={`ease-in-out duration-300 ${mobileNav ? 'right-0' : '-right-60'} z-20 flex absolute flex-col top-0 p-8 w-60 md:w-auto h-screen bg-slate-800 md:sticky md:flex-row md:bg-transparent md:items-center md:justify-center gap-2 text-gray-100 md:p-0 md:h-10`}>
                    <X
                        size={32}
                        className='md:hidden absolute right-5 top-5 text-gray-100 hover:cursor-pointer'
                        onClick={() => setMobileNav(false)}
                    />
                    <img className='md:hidden h-20 mt-8' src={logo} alt="logo" />
                    <li><Button variant="link" onClick={() => scrollToSection(sobreRef)}>Sobre</Button></li>
                    <li><Button variant="link" onClick={() => scrollToSection(atuacaoRef)}>Atuação</Button></li>
                    <li><Button variant="link" onClick={() => scrollToSection(officeRef)}>Escritório</Button></li>
                    <li><Button variant="outline" onClick={() => scrollToSection(formRef)}>Consulte Gratuitamente</Button></li>
                </ul>
                <button className={` ${mobileNav ? 'block' : 'hidden'} w-screen h-screen absolute z-10 top-0 left-0 bg-gray-900 opacity-90`} onClick={() => setMobileNav(false)}/>
            </div>
            <div className='flex flex-col items-between justify-center h-full px-5 md:pl-40 gap-4 md:gap-8'>
                <p ref={titleRef} className='text-gray-100 font-bold text-2xl md:text-4xl lg:text-6xl'>ONDE A EXPERIÊNCIA<br/> CONTA MAIS FORTE!</p>
                <div ref={subTitleRef} className='text-gray-100 font-light text-xs md:text-sm lg:text-base -mt-2 text-balance'>
                    <p>Nossa missão é
                    proporcionar segurança jurídica eficaz ao patrimônio de nossos clientes.</p>
                    <p>Que nossa causa seja sempre justa!</p>
                </div>
                <a target='blank' href="https://wa.me/558196061149"><Button ref={areaBtnRef} className='w-52' variant="preOutline"><WhatsappLogo size={20} />&nbsp; Agende uma Reunião</Button></a>
            </div>
        </div>
    )
}

export default Header;
