import { XCircle  } from "@phosphor-icons/react";

function Termos({ close }: any) {
    return (
        <div className="fixed mx-5 top-28 h-96 md:left-1/4 md:right-2/4 bg-slate-100 py-6 px-4 md:w-2/4 z-20 rounded-lg">
            <div className="flex w-full justify-between">
                <h2 className="font-bold text-center text-2xl text-gray-900">Termo de Privacidade</h2>
                <XCircle size={32} className="cursor-pointer hover:text-yellow-600" onClick={() => close()}/>
            </div>
            <br />
            <p className="text-gray-900 h-72 text-xs md:text-sm overflow-y-scroll">
                Sua privacidade é nossa preocupação. Temos o compromisso de preservá-la.
                <br />
                <br />
                O objetivo deste termo é informar de que maneira as informações obtidas são utilizadas. Esta política não se refere aos sites externos que por meio deste site possam vir a ser acessados, por meio de "links" ou outras formas de acesso, sendo necessário que você analise a política de cada um. Não nos responsabilizamos pelo conteúdo e pela política de privacidade de outros sites.
                <br />
                <br />
                Ao visitar nosso website você estará aceitando as práticas descritas nesta política de privacidade. É recomendável ainda que você reveja periodicamente esta política, pois ela pode ser alterada a qualquer momento se for necessário.
                <br />
                <br />
                Nossa política de privacidade visa assegurar a garantia de que, quaisquer informações relativas aos usuários não serão fornecidas, publicadas ou comercializadas em quaisquer circunstâncias, ou seja, suas informações estarão seguras conosco e não serão transmitidas a terceiros fora da nossa empresa.
                <br />
                <br />
                Você pode navegar pelo nosso site sem precisar fornecer seus dados. Todos os dados pessoais informados são armazenados em um banco de dados reservado e com acesso restrito à pessoas habilitadas que são obrigadas, por contrato, a manter a confidencialidade das informações e não utilizá-las inadequadamente.
                <br />
                <br />
                As informações solicitadas dos clientes e demais usuários deste website são as mínimas necessárias à realização dos serviços solicitados. Também podem ser utilizadas para finalidades estatísticas e para o aprimoramento dos nossos serviços.
                <br />
                <br />
                Adotamos certas medidas de segurança para proteger as informações pessoais que você envia para o site. Por exemplo, quando você fornece qualquer informação através de nossos formulários, nós usamos tecnologia Secure Socket Layer (SSL), um instrumento de criptografia que proporciona segurança ao transmitir esta informação por meio da internet.
                <br />
                <br />
                Nosso website utiliza o Google Analytics, um serviço web da Google Inc. O Google analisará o seu acesso a nossa página. As informações coletadas pelo Google em relação ao uso do nosso website (por exemplo, a URL de referência, quais as nossas páginas da Web que você visitou, o tipo de navegador, as configurações de idioma, o sistema operacional, a resolução da tela) serão transmitidas a um servidor do Google, onde serão armazenadas e analisadas; os respectivos resultados serão disponibilizados para nós de forma anônima.
                <br />
                <br />
                Caso tenha qualquer dúvida pode entrar em contato conosco por e-mail, WhatsApp ou através do formulário de nosso site.
            </p>
        </div>
    )
}

export default Termos;
