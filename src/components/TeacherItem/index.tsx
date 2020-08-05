import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/36082328?s=460&u=6cf087fae03195e82e2d352d70d754f5cdb5e51a&v=4" alt="Lucas Costa" />
                <div>
                    <strong>Lucas Costa</strong>
                    <span>Matemática</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor sit amet.
                <br /><br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in tempus nisi. Nunc congue finibus lacus nec bibendum. Cras convallis pharetra erat ut volutpat.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 70,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;