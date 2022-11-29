import React, { useEffect, useState } from "react";
import { getCarro } from '../../Serviços/serviçoCarro';
import CardCarro from '../../components/CardCarro/CardCarro';
import './ClienteCSS.css';
import Header from "../../components/Header/Header";
    
function Cliente() {

    const [dataCarro, setDataCarro] = useState([]);

    const carrosGet = async () => {
   try {
       const { data } = await getCarro();
       setDataCarro(data);
   } catch (error) {
     alert(error.response.data);
   }
  }

  useEffect(() => {
        carrosGet()
  },[])

    return (
        <div>
            <Header />
            <div className='cardBlock'>
                {dataCarro.map((dataCarro) => <CardCarro dataCarro={dataCarro} />)}
            </div>
        </div>
    );

}

export default Cliente;