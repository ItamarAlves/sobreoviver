import React from 'react';
import Menu from '../../components/Menu';
import './index.css';
import ImagemConteudo from '../images/FotoLiberdade.png';
import Contador from '../../components/Contador';
import SobreNos from '../../components/SobreNos';

const Home = () =>{
    return(
      <>
      <div>
        <Menu />
        <p>
          <figure>
            <img src={ImagemConteudo} alt="Foto Liberdade" id="image-body" className="img-fluid"></img>
            <div id="line-top"></div>
            <figcaption id="title-photo">Sobre O Viver</figcaption>
            <figcaption id="message-photo">Vamos ajuda a levantar vidas e dar esperanças para as pessoas que se encontram em uma 
            situação delicada ou passando por um momento difícil no qual não acha mais saída para sua vida.</figcaption>
            <div id="line-bottom"></div>
          </figure>
        </p>
      </div>
        <Contador></Contador>
        <SobreNos></SobreNos>
      </>
    );
  }

export default Home;
