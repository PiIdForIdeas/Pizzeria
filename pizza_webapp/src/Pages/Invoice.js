import CartEmpty from '../helpers/CartEmpty.js';
import '../Styles/styleInvoice.css';
import '../App.css';
/* import ListOfProducts from '../Helpers/ListOfProducts.js'; */

function Buy(props) {
  const {foodItems, onAdd, onRemove} = props;
  const name = "Producto";
  const amount = 0;
  const price = 1000;
  const priceAmount = price*amount;
  const sumAmount = amount;
  const subtotal = price;
  const deliveryCost = price*0.3;
  const total = subtotal+deliveryCost;
  const payment_method = ['efectivo','MasterCard','VISA','MercadoPago'];
  if (sumAmount > 0){
    return (
  <>
  <div className='invoice'>
      <div>
          <p>Detalles de la compra:</p>
          <p>Producto: {name}</p>
          <p>Cantidad: {amount}</p>
          <p>Precio individual: $ {price}</p>
          <p>Precio: $ {priceAmount}</p>
      </div>
      <div>
          <p>Subtotal:</p>
          <p>$ {subtotal}</p>
          <p>Envio</p>
          <p>$ {deliveryCost}</p>
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
      <div>
        <p>Comentarios</p>
        <textarea placeholder="Inserte un comentario para el cocinero o repartidor :) Ej: No funciona el timbre, golpee la puerta por favor." />
      </div>
      <button onClick={() => alert("Exito!! Su envío esta en camino. Llegará pronto. Disfrute su día!")}>Pagar</button>
  </div>
  </>
  );
  } else{
    return(
      <>
      <div className="CartEmpty">
        <h3>Vacío</h3>
        <p>La canasta está vacía.</p>
        <p>Seleccione productos primero.</p>
        <button type="submit">Inicio</button>
      </div>
      </>
    );
  }
}

export default Buy;