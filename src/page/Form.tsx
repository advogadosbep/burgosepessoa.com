import { useState, useEffect } from 'react';
import textura from '../asserts/textura2.png';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { PaperPlaneRight } from '@phosphor-icons/react';

function Form() {
    const [isDisabled, setDisable] = useState(true);
    const [formInputs, setform] = useState({
        name: '',
        email: '',
        mensagem: '',
    });

    useEffect(() => {
        const emailRegex = /\S+@\S+\.\S+/;

        const {name, email, mensagem } = formInputs;
        if (!name || !email || !mensagem
        || !emailRegex.test(email)
        ) {
        setDisable(true);
        } else {
        setDisable(false);
        }
    }, [formInputs]);

    const handleChange = (event: any) => {
        const { id, value } = event.target;
        setform((prevstate) => ({
          ...prevstate,
          [id]: value,
        }));
    }

    const bttnSubmit = (e) => {
        e.preventDefault();
        console.log('Enviado')
        /*const {name, email, mensagem } = formInputs;
        const objParams = {
          from_name: name,
          email,
          mensagem
        }
        emailjs.send('aaaaaaa', 'aaaaaaaaaaa', objParams, 'aaaaaaaaaa')
        .then((response) => {
          setform({
            name: '',
            email: '',
            mensagem: '',
          });
          alert('mensagem enviada')
        }, (err) => {
          console.log('erro no envio' + err)
        })*/
      }

    return (
        <div
            className='h-full px-5 md:px-80 py-8 md:py-20'
            style={{
                background: `url(${ textura })`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
            }}
        >
            <form className='text-gray-100 flex flex-col items-center gap-4 md:gap-8'>
                <h2 className='font-bold text-lg pb-5 md:text-2xl'>Solicite um Orçamento</h2>
                <div className='flex flex-col md:flex-row gap-4 md:gap-8 w-full'>
                    <Input
                        type="name"
                        placeholder="Seu nome" 
                        onChange={ handleChange }
                        id="name"
                        value={formInputs.name}
                        required
                    />
                    <Input
                        type="email"
                        placeholder="Seu email"
                        onChange={ handleChange }
                        id="email"
                        value={formInputs.email}
                        required
                    />
                </div>
                <Textarea
                    placeholder="Mensagem"
                    onChange={ handleChange }
                    id="mensagem"
                    value={formInputs.mensagem}
                    required
                />
                <Button
                    className={`${!isDisabled && 'bg-yellow-600 text-black hover:bg-yellow-500'} hover:cursor-pointer`}
                    onClick={ bttnSubmit }
                    type="submit"
                    disabled={ isDisabled }
                >Enviar Mensagem&nbsp;<PaperPlaneRight size={14} /></Button>
            </form>
        </div>
    )
}

export default Form;
