import Map from "@/components/Map";
import { CaretDown, WhatsappLogo, MapPin, Scales  } from '@phosphor-icons/react';
import office from '../asserts/office.png';

function Office() {
    return (
        <div
            id="office"
            className='flex shadow-2xl flex-col md:items-center gap-10 h-full px-5 md:px-40 py-5 md:py-20 bg-blue-950'
            style={{
                background: `url(${ office })`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className='relative mt-5 w-32 px-4 py-1 text-center bg-yellow-500 font-bold text-gray-900'>
                <CaretDown className='absolute -bottom-3 left-2 text-yellow-500' size={20} weight="fill"
            />Escritório</div>
            <div className="flex flex-col md:flex-row gap-4 text-gray-100">
                <Map />
                <div className="md:w-1/2 flex flex-col justify-between">
                    <p className="flex flex-col items-center pb-4 text-sm md:text-base">Nossa equipe é comprometida, experiente e criativa e apoia empresas nacionais em operações altamente complexas.
                        <br />
                        <br />
                        Nosso trabalho nos desafia
                        permanentemente a oferecer soluções inovadoras, com agilidade e segurança. Por isso, investimos permanentemente no desenvolvimento e atualização
                        de nossos profissionais.
   
                        <Scales size={32} weight="fill" className="text-yellow-500"/>
                  
                        Desenvolvemos inteligência jurídica para ajudar nossos clientes a viabilizar negócios e ir mais longe. Nesse processo, seguimos crescendo com eles.
                        <br />
                        <br />
                        Ao trabalhar conosco, você terá a chance de atuar ao lado dos melhores advogados, ampliar seus horizontes e se desenvolver.
                    </p>
                    <div className='flex flex-col md:flex-row gap-4'>
                    <div className='flex flex-col md:flex-row text-blue-950 text-xs md:text-sm font-bold items-center gap-1 bg-yellow-500 py-2 px-4'>
                        <WhatsappLogo size={16} weight="bold" className='text-blue-950'/>
                        <p>(81) 9 9606-1149</p>
                    </div>
                    <div className='flex flex-col md:flex-row text-blue-950 text-xs md:text-sm font-bold items-center gap-1 bg-yellow-500 py-2 px-4'>
                        <MapPin size={16} weight="bold" className='text-blue-950'/>
                        <p>R. Padre Carapuceiro, 858 - Boa Viagem, Recife</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Office;
