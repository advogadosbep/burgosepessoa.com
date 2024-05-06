import { HardHat, CaretDown, Users, Money, BriefcaseMetal, HashStraight, CurrencyDollar, HouseLine, HandCoins  } from '@phosphor-icons/react';
import { Button } from "@/components/ui/button"
const cards = 'group relative hover:cursor-pointer aspect-square flex flex-col justify-start items-center gap-2 p-8 border border-yellow-500 bg-gray-900 ease-in-out duration-300 hover:bg-blue-950';

function Atuacao() {
    return (
        <div className='flex flex-col items-center gap-10 h-full px-5 md:px-40 py-5 md:py-20 bg-blue-950'>
            <div className='relative w-28 px-4 py-1 text-center bg-yellow-500 font-bold text-gray-900'>
                <CaretDown className='absolute -bottom-3 left-2 text-yellow-500' size={20} weight="fill"
            />Atuação</div>
            <div className="grid h-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className={`${cards}`}>
                    <HardHat className="text-yellow-500" size={32} weight="fill" />
                    <h2 className='font-semibold text-yellow-500 text-lg'>TRABALHISTA</h2>
                    <p className='text-center text-sm font-light text-gray-300'>Evite inseguranças na administração dos negócios. Trabalhamos na mitigação de cenários de riscos trabalhistas de forma a manter a competitividade de seu negócio.
                    </p>
                    <Button className='hidden group-hover:block absolute bottom-5' variant="outline">Solicitar Orçamento</Button>
                </div>
                <div className={`${cards}`}>
                    <Users className="text-yellow-500" size={32} weight="fill" />
                    <h2 className='font-semibold text-yellow-500 text-lg'>CIVIL E DO CONSUMIDOR</h2>
                    <p className='text-center text-sm font-light text-gray-300'>Com a complexidade crescente dos negócios, os contratos estão se tornando mais intricados. Assessoria jurídica experiente é crucial para elaborar contratos seguros, prevendo riscos e aproveitando oportunidades.
                    </p>
                    <Button className='hidden group-hover:block absolute bottom-5' variant="outline">Solicitar Orçamento</Button>
                </div>
                <div className={`${cards}`}>
                    <Money className="text-yellow-500" size={32} weight="fill" />
                    <h2 className='font-semibold text-yellow-500 text-lg'>TRIBUTÁRIO</h2>
                    <p className='text-center text-sm font-light text-gray-300'>No Brasil, a legislação tributária complexa e o rigor da fiscalização exigem que as empresas enfrentem desafios ao analisar os impactos fiscais, tomar decisões estratégicas sobre litígios e garantir segurança jurídica para benefícios tributários.
                    </p>
                    <Button className='hidden group-hover:block absolute bottom-5' variant="outline">Solicitar Orçamento</Button>
                </div>
                <div className={`${cards}`}>
                    <BriefcaseMetal className="text-yellow-500" size={32} weight="fill" />
                    <h2 className='font-semibold text-yellow-500 text-lg'>EMPRESARIAL</h2>
                    <p className='text-center text-sm font-light text-gray-300'>Advogados especializados em direito empresarial. Nossos agentes especializados e credenciados no INPI vão garantir o registro do maior patrimônio da sua empresa: a MARCA.
                    </p>
                    <Button className='hidden group-hover:block absolute bottom-5' variant="outline">Solicitar Orçamento</Button>
                </div>
                <div className={`${cards}`}>
                    <HashStraight className="text-yellow-500" size={32} weight="fill" />
                    <h2 className='font-semibold text-yellow-500 text-lg'>CRIMINAL</h2>
                    <p className='text-center text-sm font-light text-gray-300'>Oferecemos serviços na área criminal, desde a fase policial até recursos em instâncias superiores, incluindo sustentações orais, em todo o Brasil, abrangendo tanto a esfera estadual quanto federal.
                    </p>
                    <Button className='hidden group-hover:block absolute bottom-5' variant="outline">Solicitar Orçamento</Button>
                </div>
                <div className={`${cards}`}>
                    <CurrencyDollar className="text-yellow-500" size={32} weight="fill" />
                    <h2 className='font-semibold text-yellow-500 text-lg'>PREVIDENCIÁRIO</h2>
                    <p className='text-center text-sm font-light text-gray-300'>
                    Oferecemos suporte jurídico para previdência, abrangendo desde a assistência administrativa junto ao INSS até representação judicial. Auxiliamos na obtenção, análise e retomada de aposentadorias, pensões e outros benefícios.
                    </p>
                    <Button className='hidden group-hover:block absolute bottom-5' variant="outline">Solicitar Orçamento</Button>
                </div>
                <div className={`${cards}`}>
                    <HouseLine className="text-yellow-500" size={32} weight="fill" />
                    <h2 className='font-semibold text-yellow-500 text-lg'>DIREITO DA FAMÍLIA</h2>
                    <p className='text-center text-sm font-light text-gray-300'>Trabalhamos com suporte legal para estruturar, proteger e resolver questões familiares de forma colaborativa e construtiva desde separação judicial, divórcio, guarda de crianças, pensão alimentícia, adoção e mediação familiar.</p>
                    <Button className='hidden group-hover:block absolute bottom-5' variant="outline">Solicitar Orçamento</Button>
                </div>
                <div className={`${cards}`}>
                    <HandCoins className="text-yellow-500" size={32} weight="fill" />
                    <h2 className='font-semibold text-yellow-500 text-lg'>DIREITO DAS SUCESSÕES</h2>
                    <p className='text-center text-sm font-light text-gray-300'>
Atuamos em sucessões, abrangendo inventário, testamento e planejamento sucessório, que regulam a transferência de patrimônio de falecidos aos herdeiros, seja por Lei ou testamento.</p>
                    <Button className='hidden group-hover:block absolute bottom-5' variant="outline">Solicitar Orçamento</Button>
                </div>
            </div>
        </div>
    )
}

export default Atuacao;
