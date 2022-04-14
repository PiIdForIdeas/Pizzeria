import '../Styles/styleInvoice.css';
import '../App.css';
/* import ListOfProducts from '../Helpers/ListOfProducts.js'; */

function Buy(props) {
    const {foodItems, onAdd, onRemove} = props;
    const price = 1000;
    const subtotal = price;
    const delivery_cost = price*0.3;
    const total = subtotal+delivery_cost;
    const payment_method = ['efectivo','MasterCard','VISA','MercadoPago'];
  return (
    <>
    <div className='invoice'>
        <div>
            <p>Detalles de la compra:</p>
            <p>Producto</p>
            <p>$ {price}</p>
        </div>
        <div>
            <p>Subtotal:</p>
            <p>$ {subtotal}</p>
            <p>Envio</p>
            <p>$ {delivery_cost}</p>
        </div>
        <div>
            <p>Total</p>
            <p>$ {total}</p>
        </div>
        <div>
            <p>Medio de pago:</p>
            <select name="select">
                <option value="payment_method[0]" selected>{payment_method[0]}</option>
                <option value="payment_method[1]">{payment_method[1]}</option>
                <option value="payment_method[2]">{payment_method[2]}</option>
                <option value="payment_method[3]">{payment_method[3]}</option>
            </select>
            {/* <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button> */}
        </div>
        
        <button onClick={() => alert("Exito!! Su envío esta en camino. Llegará pronto. Disfrute su día!")}>Pagar</button>
    </div>
    </>
  );
}

export default Buy;