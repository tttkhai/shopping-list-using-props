import {React, useEffect} from 'react';

const NeedToBuy = ({wishListItem, selectItem, selectedItem}) => {

    useEffect(()=> {

    },[wishListItem])
    return <div className="side">
        <h3>Need To Buy </h3>
        <div> {wishListItem.map(element => {
                    return <li 
                    onClick={()=>selectItem(element)} 
                    className={selectedItem.id === element.id? "selected-item": ""} 
                    key={element.id}> {element.item} </li>
                })}
            </div>
    </div>
}

export default NeedToBuy