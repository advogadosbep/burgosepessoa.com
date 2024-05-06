import { CaretDown, WhatsappLogo } from '@phosphor-icons/react';
import sobre from '../asserts/sobre.png';
import textura from '../asserts/textura.png';
import { Button } from "@/components/ui/button"
import useWindowSize from '@/hooks/useWindowSize';

function About() {
    const size = useWindowSize();
    return (
        <div
            id='sobre'
            className='h-full px-5 md:px-80 py-5 md:py-20'
            style={{
                background: `url(${ textura })`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "repeat",
                backgroundAttachment: `${size.width > 768 && 'fixed'}`,
            }}
        >
            <h1 className='opacity-0'>Advogados Recife Pernambuco Advocacia Nordeste Processos jurídico Consultoria</h1>
            <div className='h-full flex flex-col md:flex-row justify-between items-center gap-8'>
                <div className='w-full md:w-1/3 flex justify-center'>
                    <div
                        className='w-full h-96 border-2 border-yellow-500'
                        style={{
                            background: `url(${ sobre })`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                        }}
                    />
                </div>
                <div className='md:w-2/3 h-full flex flex-col items-start gap-6'>
                    <div className='relative px-4 py-1 w-32 bg-yellow-500 font-bold text-gray-900'>
                        <CaretDown className='absolute -bottom-3 left-2 text-yellow-500' size={20} weight="fill"
                    />Sobre Nós</div>
                   <h2 className='text-lg font-bold text-gray-100'>Burgos & Pessoa Advogados</h2>
                   <p className='text-gray-100 font-light'>Nascemos no Recife e expandimos nossa atuação a diversas localidades do Nordeste, com escritórios parceiros também em Porto Alegre,
                    Brasília e São Paulo. Crescemos da especialização técnica de nossa equipe, qualidade no atendimento e cultura organizacional. Nossa excelência
                    é a segurança jurídica de nossos clientes.
                   </p>
                   <div>
                        <h2 className='font-semibold text-gray-100'>Manoel Burgos Nogueira Filho</h2>
                        <p className='text-sm text-gray-100'>- Advogado Civil e Trabalhista</p>
                        <h2 className='font-semibold text-gray-100 mt-4'>Breno Pessoa Marques da Silva</h2>
                        <p className='text-sm text-gray-100'>- Advogado Civil, Trabalhista e Criminal</p>
                   </div>
                   <Button variant="outline"><WhatsappLogo size={16} />&nbsp;Entre em Contato</Button>
                </div>
            </div>
        </div>
    )
}

export default About;