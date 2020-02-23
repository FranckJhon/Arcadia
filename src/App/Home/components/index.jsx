import React,{useEffect} from 'react';
import '../styles/Home.scss';

const Home = ({getCard,cards}) => {
    console.log(cards);
    
    useEffect(() => {
        const handleGetAllCards=()=>{
            getCard('Apprentice+Illusion+Magician')
            getCard('Armageddon+Knight')
            getCard('Danger%21+Mothman%21')
            getCard('Danger%21+Nessie%21')
            getCard('Danger%21%3F+Jackalope%3F')
        }
        handleGetAllCards()
    }, [getCard])
    return (
        <div>
          {cards&&cards.map(item=>
            <div className="ui container container-cards">
                <h2>{item.name}</h2>
                <h3>{item.type}</h3>
                <img src={item.card_images[0].image_url_small} />
                <p className="p-description">
                    <b>Descripcion:</b> {item.desc}
                </p>
                <br />
                <p className="p-atrib">
                    <b>Ataque:</b> {item.atk} &nbsp;
                    <b>Defensa:</b> {item.def} &nbsp;
                    <b>Nivel:</b> {item.level} &nbsp;
                </p>
            </div>
            
            )}
        </div>
    )
}

export default Home
