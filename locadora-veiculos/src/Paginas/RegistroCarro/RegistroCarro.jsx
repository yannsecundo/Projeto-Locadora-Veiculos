import React, {useState, useEffect} from "react";
import './RegistroCarroCSS.css';
import Header from "../../components/Header/Header";
import { createCarro, getCarro, deletCarro } from "../../Serviços/serviçoCarro";
import CardCarroFuncionario from "../../components/CardCarro/CardCarroFuncionario";

function RegistroCarro() {

    const [atributo, setAtributo] = useState({
        modelo: '',
        ano: 0,
        marca: '',
        valor: 0,
        
    });

    const [dataCarro, setDataCarro] = useState([]);

    const carrosGet = async () => {
        try {
            const { data } = await getCarro();
            setDataCarro(data);
        } catch (error) {
        alert(error.response.data);
        }
    }

    const handlesubmit = async () => {
        try {
            const { modelo, ano, marca, valor } = atributo; 
            const {data} = await createCarro({ modelo, ano, marca, valor });
            console.log(data);
            carrosGet();
        } catch (error) {
            alert(error.response.data)
        }
    };

    const handleDelete = async (id) => {
        try {
            await deletCarro(id);
            carrosGet();
        } catch (error) {
            alert(error.response.data)
        }
    }

      useEffect(() => {
        carrosGet()
      }, [])
    
    return (
        <div>
            <Header />
            <div className='form-carro'>
                <br />
                <form>
                    <label>Modelo</label>
                    <br />
                    <input
                        type="text"
                        onChange={(e) => setAtributo({...atributo, modelo: e.target.value})}
                    />
                    <br />
                    <label>Ano</label>
                    <br />
                    <input
                        type="number"
                        onChange={(e) => setAtributo({...atributo, ano: Number(e.target.value) })}
                    />
                    <br />
                    <label>Marca</label>
                    <br />
                    <input
                        type="text"
                        onChange={(e) => setAtributo({...atributo, marca: e.target.value})}
                    />
                    <br />
                    <label>Valor</label>
                    <br />
                    <input
                        type="number"
                        onChange={(e) => setAtributo({ ...atributo, valor: Number(e.target.value) })}
                    />
                </form>
                <div className='button-carro-registro'>
                    <button
                        type="button"
                        id='confirmar-button'
                        onClick={() => {handlesubmit()}}
                    >
                        Confirmar
                    </button> 
                    <button
                        type="button"
                        id='cancelar-button'
                    >
                        Cancelar
                    </button>
                </div>
            </div>
            <div>
                <div className='cardBlock'>
                {dataCarro.map((dataCarro) => <CardCarroFuncionario handleDelete={handleDelete} dataCarro={dataCarro} />)}
            </div>
            </div>
        </div>
    );

}

export default RegistroCarro;