import {React} from 'react';

const InMyCart = ({inMyCartItem, selectItem, selectedItem}) => {

    return (<div className="side">
            <h3>In My Cart </h3>
            <div> {inMyCartItem.map(element => {
                    return <li 
                    onClick={()=>selectItem(element)} 
                    className={selectedItem.id === element.id? "selected-item": ""} 
                    key={element.id}> {element.item} </li>
                })}
            </div>
        </div>)
}

export default InMyCart