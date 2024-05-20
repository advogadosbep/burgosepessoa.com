import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import textura from '../asserts/textura.png';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { PaperPlaneRight, CircleNotch } from '@phosphor-icons/react';
import useWindowSize from '@/hooks/useWindowSize';

function Form() {
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    const size = useWindowSize();

    const [isLoading, setIsLoading] = useState(false);
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

    const bttnSubmit = (e: any) => {
        e.preventDefault();
        setIsLoading(true);  // Inicia o loading
        console.log('Enviado')
        const {name, email, mensagem } = formInputs;
        const objParams = {
          name: name,
          email,
          mensagem
        }
        emailjs.send(serviceId, templateId, objParams, publicKey)
        .then(() => {
          setform({
            name: '',
            email: '',
            mensagem: '',
          });
          setIsLoading(false);  // Termina o loading
          alert('mensagem enviada');
        }, (err) => {
          setIsLoading(false);  // Termina o loading
          console.log('erro no envio' + err);
        });
    }
    

    return (
        <div
            id='form'
            className='h-full px-5 md:px-80 py-8 md:py-40 bg-blue-950'
            style={{
                background: `url(${ textura })`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "repeat",
                backgroundAttachment: `${size.width > 768 && 'fixed'}`,
            }}
        >
            <form className='text-gray-100 flex flex-col items-center gap-4 md:gap-8'>
                <h2 className='font-bold text-lg pb-5 md:text-2xl text-gray-100'>Consulte Gratuitamente</h2>
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
                >Enviar Mensagem&nbsp;{isLoading ? <CircleNotch className='animate-spin' size={12} /> : <PaperPlaneRight size={12} />}</Button>
            </form>
        </div>
    )
}

export default Form;
