import { HardHat, CaretDown, Users, Money, BriefcaseMetal, HashStraight, CurrencyDollar, HouseLine, HandCoins  } from '@phosphor-icons/react';
import { Button } from "@/components/ui/button"
import textura from '../asserts/textura3.png';

const cards = 'group shadow-2xl relative hover:cursor-pointer sm:aspect-square flex flex-col justify-start items-center h-40 sm:h-auto gap-2 p-4 md:p-8 border border-yellow-500 bg-gray-900 ease-in-out duration-300 hover:bg-blue-950';
const titles = 'font-semibold text-yellow-500 md:text-lg text-center';
const descriptions = 'hidden sm:block text-center text-xs md:text-sm font-light text-gray-300 text-pretty';
const buttns = 'hidden group-hover:block absolute bottom-2 md:bottom-5';

function Atuacao() {
    return (
        <div
            id='atuacao'
            className='flex shadow-2xl flex-col md:items-center gap-10 h-full px-5 md:px-40 py-5 md:py-20'
            style={{
                background: `url(${ textura })`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
            }}
        >
            <div className='relative mt-5 w-28 px-4 py-1 text-center bg-yellow-500 font-bold text-gray-900'>
                <CaretDown className='absolute -bottom-3 left-2 text-yellow-500' size={20} weight="fill"
            />Atuação</div>
            <div className="grid h-full grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-1 md:gap-4">
                <div className={`${cards}`}>
                    <HardHat className="text-yellow-500" size={32} weight="fill" />
                    <h2 className={`${titles}`}>TRABALHISTA</h2>
                    <p className={`${descriptions}`}>Evite inseguranças na administração dos negócios. Trabalhamos na mitigação de cenários de riscos trabalhistas de forma a manter a competitividade de seu negócio.
                    </p>
                    <Button className={`${buttns}`} variant="outline">Saiba Mais</Button>
                </div>
                <div className={`${cards}`}>
                    <Users className="text-yellow-500" size={32} weight="fill" />
                    <h2 className={`${titles}`}>CIVIL E DO CONSUMIDOR</h2>
                    <p className={`${descriptions}`}>Com a complexidade crescente dos negócios, os contratos estão se tornando mais intricados. Assessoria jurídica experiente é crucial para elaborar contratos seguros, prevendo riscos e aproveitando oportunidades.
                    </p>
                    <Button className={`${buttns}`} variant="outline">Saiba Mais</Button>
                </div>
                <div className={`${cards}`}>
                    <Money className="text-yellow-500" size={32} weight="fill" />
                    <h2 className={`${titles}`}>TRIBUTÁRIO</h2>
                    <p className={`${descriptions}`}>No Brasil, a legislação tributária complexa e o rigor da fiscalização exigem que as empresas enfrentem desafios ao analisar os impactos fiscais, tomar decisões estratégicas sobre litígios e garantir segurança jurídica para benefícios tributários.
                    </p>
                    <Button className={`${buttns}`} variant="outline">Saiba Mais</Button>
                </div>
                <div className={`${cards}`}>
                    <BriefcaseMetal className="text-yellow-500" size={32} weight="fill" />
                    <h2 className={`${titles}`}>EMPRESARIAL</h2>
                    <p className={`${descriptions}`}>Advogados especializados em direito empresarial. Nossos agentes especializados e credenciados no INPI vão garantir o registro do maior patrimônio da sua empresa: a MARCA.
                    </p>
                    <Button className={`${buttns}`} variant="outline">Saiba Mais</Button>
                </div>
                <div className={`${cards}`}>
                    <HashStraight className="text-yellow-500" size={32} weight="fill" />
                    <h2 className={`${titles}`}>CRIMINAL</h2>
                    <p className={`${descriptions}`}>Oferecemos serviços na área criminal, desde a fase policial até recursos em instâncias superiores, incluindo sustentações orais, em todo o Brasil, abrangendo tanto a esfera estadual quanto federal.
                    </p>
                    <Button className={`${buttns}`} variant="outline">Saiba Mais</Button>
                </div>
                <div className={`${cards}`}>
                    <CurrencyDollar className="text-yellow-500" size={32} weight="fill" />
                    <h2 className={`${titles}`}>PREVIDENCIÁRIO</h2>
                    <p className={`${descriptions}`}>
                    Oferecemos suporte jurídico para previdência, abrangendo desde a assistência administrativa junto ao INSS até representação judicial. Auxiliamos na obtenção, análise e retomada de aposentadorias, pensões e outros benefícios.
                    </p>
                    <Button className={`${buttns}`} variant="outline">Saiba Mais</Button>
                </div>
                <div className={`${cards}`}>
                    <HouseLine className="text-yellow-500" size={32} weight="fill" />
                    <h2 className={`${titles}`}>DIREITO DA FAMÍLIA</h2>
                    <p className={`${descriptions}`}>Trabalhamos com suporte legal para estruturar, proteger e resolver questões familiares de forma colaborativa e construtiva desde separação judicial, divórcio, guarda de crianças, pensão alimentícia, adoção e mediação familiar.</p>
                    <Button className={`${buttns}`} variant="outline">Saiba Mais</Button>
                </div>
                <div className={`${cards}`} id='clientes'>
                    <HandCoins className="text-yellow-500" size={32} weight="fill" />
                    <h2 className={`${titles}`}>DIREITO DAS SUCESSÕES</h2>
                    <p className={`${descriptions}`}>
Atuamos em sucessões, abrangendo inventário, testamento e planejamento sucessório, que regulam a transferência de patrimônio de falecidos aos herdeiros, seja por Lei ou testamento.</p>
                    <Button className={`${buttns}`} variant="outline">Saiba Mais</Button>
                </div>
            </div>
        </div>
    )
}

export default Atuacao;
