import React from 'react'
import { CodeItem, InfosContainer } from './styles';

const Card = () => {
    return (
        <InfosContainer>
            <CodeItem data-aos='zoom-in'>
                <span className='comment'># Informações pessoais</span>
                <div>
                    <span className='blue'>Olá, meu nome é Júlia Assunção, </span>
                </div>
                <div>
                    <span className='blue'>sou graduanda em Fisioterapia pela Unifanor.</span>
                </div>
            </CodeItem>
            <CodeItem data-aos='zoom-in'>
                <span className='comment'># Sobre</span>
                <div>
                    <span className='blue'>A fisioterapia do trabalho na ergonomia, atua </span>
                </div>
                <div>
                    <span className='blue'>na prevenção e tratamento de doenças </span>
                </div>
                <div>
                    <span className='blue'>ocupacionais, minimizando os efeitos desta </span>
                </div>
                <div>
                    <span className='blue'>patologia dentro e fora do ambiente laboral.</span>
                </div>
            </CodeItem>
        </InfosContainer>
    )
}

export default Card;