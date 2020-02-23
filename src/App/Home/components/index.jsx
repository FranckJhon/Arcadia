import React,{useEffect} from 'react'

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
            <div>
                <h4>{item.name}</h4>
                <img src={item.card_images[0].image_url} />
            </div>
            
            )}
            home
        </div>
    )
}

export default Home
