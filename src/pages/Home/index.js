import React, { useState, useEffect } from 'react';
import axios from "axios";

function Home() {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [activate, setActivate] = useState(false);

    useEffect(() => {
        const url = "http://localhost:3001/companies";

        axios.get(url)
            .then(function (response) {
                console.log(response.data);
                setData(response.data);
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])

    const handleChange = (event) => {
        setSearch(event);
        setActivate(false);
    }

    const handleActivate = () => {
        setActivate(true);
    }

    return (
        <div>
            <div>
                <a href="http://localhost:3000/new"><button>Cadastrar nova empresa</button></a> <br />
                <input type="text" onChange={(e) => handleChange(e.target.value)}></input>
                <button onClick={handleActivate}>Pesquisar</button>
            </div>
            {data.map((item) => (
                activate === false || item.cnpj === search && activate === true ?  
                <div key={item.cnpj} className="table-row">
                    <span>CNPJ:</span> <span>{item.cnpj}</span>
                    <span>Nome da empresa:</span> <span>{item.nome_empresa}</span>
                    <span>Nome do cliente:</span> <span>{item.nome_cliente}</span>
                    <span>CEP:</span> <span>{item.cep}</span>
                    <span>Endereço:</span> <span>{`${item.endereco}, ${item.numero}`}</span>
                    <span>Telefone:</span> <span>{item.telefone}</span>
                    <span>E-mail:</span> <span>{item.email}</span>
                    <a href={`http://localhost:3000/company/${item.cnpj}`}><button>Visualizar individual</button></a>
                </div> 
                : 
                ""
            ))}
        </div>

    );
}

export default Home;