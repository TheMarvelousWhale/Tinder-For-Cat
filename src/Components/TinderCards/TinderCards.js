import React, {useState,useEffect} from 'react'
import TinderCard from 'react-tinder-card'
import "./TinderCards.css"
import database from "../../firebase_clf"
import {collection,getDocs} from "firebase/firestore/lite"

function TinderCards() {

    const [cats,setCats] = useState([]);

    const fetchCats = async () => {
        const catCol = collection(database,"cats")
        const catSnapshot = await getDocs(catCol);
        const catData = catSnapshot.docs.map((cat) => cat.data());
        return catData
    } 

    //@dev: shuffle algo from os
    //      https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    const shuffle = (array) => {
        let currentIndex = array.length,  randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        
        return array;
          
    }

    useEffect(() => {
        const getCats = async () => {
            const catsFromServer = await fetchCats();
            setCats(shuffle(catsFromServer));
        }
        getCats()
        
    }, []); 

    return (
        <div>
            <div className="tinderCards__cardContainer">
            {cats.map((cat) => (

                <TinderCard
                    className="swipe"
                    key={cat.name}
                    preventSwipt={['up','down']}
                >

                    <div 
                        style={{ backgroundImage: `url(${cat.url})`}}
                        className='card'>
                        <h3>{cat.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    )
}

export default TinderCards
