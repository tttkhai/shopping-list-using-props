import { React } from "react"
import InMyCart from "../components/InMyCart"
import NeedToBuy from "../components/NeedToBuy"
import ShoppingForm from "../components/ShoppingForm"
import { useSelector } from "react-redux"

const Dashboard = () => {
    const { wishList, cart } = useSelector((state) => ({ ...state }));

    return (
        <>
            <h1> Shopping List </h1>
            <ShoppingForm cart={cart} />
            <div className="myApp">
                <InMyCart wishList={wishList} cart={cart} />
                <NeedToBuy wishList={wishList} cart={cart} />
            </div>
        </>
    )
}

export default Dashboard
