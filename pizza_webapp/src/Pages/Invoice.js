import '../Styles/styleInvoice.css';
import '../App.css';


function Buy() {
  return (
    <>
    <div className='invoice'>
        <div>
            <p>Detalles de la compra:</p>
            <p>Producto</p>
            <p>$ precio</p>
        </div>
        <div>
            <p>Subtotal:</p>
            <p>Envio</p>
            <p>$ precio</p>
        </div>
        <div>
            <p>Total</p>
            <p>$ precio</p>
        </div>
        <div>
            <p>Medio de pago:</p>
            <p>$ precio</p>
        </div>
        <button>Pagar</button>
    </div>
    </>
  );
}

export default Buy;