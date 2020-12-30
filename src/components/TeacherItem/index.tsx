import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem () {
    return(
        <article className="teacher-item">
                  <header>
                      <img src="https://avatars1.githubusercontent.com/u/52337256?s=460&u=c25fa42da294801fa558488f47e24e1f265ed2fa&v=4" alt="Davi"/>
                      <div>
                          <strong>Davi Correia</strong>
                          <span>Ciência da Computão</span>
                      </div>
                  </header> 
                  <p>
                      Entusiastas das melhores tecnologias
                      <br/><br/>
                      Apaixonador por Ciência da Computação
                  </p>

                  <footer>
                      <p>
                         Preço/hora
                         <strong>R$ 80,00</strong> 
                      </p>
                      <button type="button">
                          <img src={whatsappIcon} alt="whatsapp"/>
                          Entrar em contato
                      </button>
                  </footer>
               </article>
    );
}

export default TeacherItem;