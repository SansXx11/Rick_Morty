import useFetch from "../hooks/useFetch"
import { useEffect } from 'react'
import './styles/ResidentCard.css'

const ResidentCard = ({url}) => {
  
    const [ character, getCharacter ]= useFetch(url)

    useEffect(() => {
        getCharacter()
    },[])


    return (
        <article className="resident">
            <header className="resident__header">
                <img  className="resident__image" src={character?.image} alt="" />
                <div className="status">
                    <div className= {`status__circle ${character?.status}`} ></div>
                    <div className="status__value">{character?.status}</div>
                </div>
            </header>
            <section className="resident__body">
                <h3 className="resident__name">{character?.name}</h3>
                <hr className="resident__hr"/>
                <ul className="resident__ul">
                    <li className="resident__item"><span className="resident__label">Specie</span><span className="resident__value">{character?.specie}</span></li>
                    <li className="resident__item"><span className="resident__label">Origin</span><span className="resident__value">{character?.origin.name}</span></li>
                    <li className="resident__item"><span className="resident__label">Episodies where appear</span><span className="resident__value">{character?.episode.length}</span></li>
                </ul>
            </section>
        </article> 
  )
}
    
export default ResidentCard