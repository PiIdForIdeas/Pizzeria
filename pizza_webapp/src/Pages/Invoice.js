import CartEmpty from '../helpers/CartEmpty.js';
import ListOfProducts from '../helpers/data';
import '../Styles/styleInvoice.css';
import '../App.css';

/* const ListOfProducts = 
  food :[
  {
      id:1,
      name:'Muzzarella',
      type:'pizzas',
      size:'1 Mtrs',
      price:2000,
      amount:1,
      
  },
  {
      id:2,
      name:'Napolitana',
      type:'pizzas',
      size:'Grande',
      price:2000,
      amount:2,
      
  },
  {
      id:3,
      name:'Jamón y morrones',
      type:'pizzas',
      size:'Pequeña',
      price:800,
      amount:0,
      
  },
  {
      id:4,
      name:'Empanadas de carne',
      type:'empanadas',
      size:'standard',
      price:2000,
      amount:0,
      
  },
  {
      id:5,
      name:'Empanadas de jamón y queso',
      type:'empanadas',
      size:'standard',
      price:2000,
      amount:0,
      
  },
  {
      id:6,
      name:'Empanadas de atún',
      type:'empanadas',
      size:'standard',
      price:2000,
      amount:0,
      
  },
  {
      id:7,
      name:'Coca Cola 2.5Lts',
      type:'bebidas',
      size:'2.5 Lts',
      price:1000,
      amount:0,
      
  },
  {
      id:8,
      name:'Agua',
      type:'bebidas',
      size:'2.5 Lts',
      price:1000,
      amount:0,
      
  },
  {
      id:9,
      name:'Cerveza',
      type:'bebidas',
      size:'1 Lts',
      price:1200,
      amount:0,
      
  },
  {
      id:10,
      name:'Almendrado',
      type:'postres',
      size:'1 Kgs',
      price:2000,
      amount:0,
      
  },
  {
      id:11,
      name:'helado',
      type:'postres',
      size:'1 unidad',
      price:2000,
      amount:0,
      
  },
  {
      id:12,
      name:'Bombones',
      type:'postres',
      size:'100 Grs',
      price:2000,
      amount:0,
      
  },
  {
      id:13,
      name:'faina',
      type:'fainas',
      size:'1 rebanada',
      price:2000,
      amount:0,
      
  },
]; */

function Buy(props) {
  //const {foodItems, onAdd, onRemove} = props;
  function sumProperty(arr, type) {
    return arr.reduce((total, obj) => {
      return total + obj[type];
    }, 0);
  };

  const name = "Producto";
  const amount = 0;
  const price = 1000;
  const priceAmount = price*amount;
  //const sumAmount = amount;
  const sumAmount = sumProperty(ListOfProducts, "amount");
  //const subtotal = price;
  const subtotal = sumProperty(ListOfProducts, "price");
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
          <p>Total cantidad: {sumAmount} </p>
          <p>Precio individual: $ {price}</p>
          <p>Precio: $ {priceAmount}</p>
      </div>
      <div>
          <p>Subtotal: $ {subtotal}</p>
          <p>Envio $ {deliveryCost}</p>
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
      <button>Vaciar carrito</button>
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