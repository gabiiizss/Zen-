import React from 'react';
import '../santos/stars.css';
import Imagem1 from '../Imagem/imgapp.png';
import Imagem2 from '../Imagem/apps.png';

const StarRating = () => {
    return (
        <div id="app">



            <div className='titulo' Style="margin-top:50px;">
                <h3>
                    O melhor calendário menstrual do mundo <br />se chama <span style={{ color: '#f4436f' }}>ZEN</span>.
                </h3>
            </div>
            <div className='cel'>
                <div className='celular'>
                    <img src={Imagem1} className="celular" alt="celular" />
                </div>
                <p className='baixe'>Baixem o ZEN agora e comecem a cuidar da saúde feminina de um jeito simples e inteligente. A gente tá aqui pra acompanhar vocês em cada passo dessa jornada.</p>
                <div>

                </div>
            </div>
          
          
                <div className='avali' id="avaliacao">
                <img src={Imagem2} className="avali" alt="avali" /> 
                </div>
-

                        <h3 className='porque'>
                Por que milhões de mulheres usam o<br /> <span style={{ color: '#f4436f' }}>ZEN</span>?
            </h3>



        </div>
    );
};

export default StarRating;