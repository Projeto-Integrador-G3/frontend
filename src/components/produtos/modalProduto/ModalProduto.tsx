import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import './ModalProduto.css';
import FormularioProduto from '../formularioProduto/FormularioProduto';

function ModalProduto() {
  return (
    <>
      <Popup 
      trigger={<button className='border rounded px-4 bg-green-300 hover:bg-green-300 text-white font-bold'>CADASTRAR NOVO PRODUTO</button>} modal>
        <div>
          <FormularioProduto />
        </div>
      </Popup>
    </>
  );
}

export default ModalProduto;