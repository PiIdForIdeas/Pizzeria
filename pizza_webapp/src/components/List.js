import '../Styles/styleList.css';
import {useState} from "react";
import Card from './Card.js';
import food from '../helpers/data.js';
import PageNotFound from '../helpers/PageNotFound.js';

/* let List = () => {
    const {food} = food;
    const [products,setProducts] = useState(food);
    if(products.length > 0){
        return (
    <div>
        {products.map((product) => {
        return(
            <div>
                <Card 
                    img={product.img}
                    key={product.id}
                    name={product.name} 
                    type={product.size} 
                    amount={product.amount}
                    price={product.price}
                />
            </div>
        )
    }
    )}
    </div>);
    } else{
        return(
            <div>
                <PageNotFound />
            </div>
        )  
    }
} */

const List = () => {
    return(
        <div>
            <p>Da error mostrar productos</p>
        </div>
    )
}

export default List;