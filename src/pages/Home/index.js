import React, { useState, useEffect } from 'react';
import axios from "axios";
import './style.css';

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
        <div className="container">
            <div className="actions">
                <a href="http://localhost:3000/new"><button>Cadastrar nova empresa</button></a>
                <div className="search">
                    <input type="text" onChange={(e) => handleChange(e.target.value)} placeholder='Digite o CNPJ completo'></input>
                    <button onClick={handleActivate}>Pesquisar</button>
                </div>
            </div>
            {data.map((item) => (
                activate === false || item.cnpj === search && activate === true ?
                    <div key={item.cnpj} className="data">
                        <span><b>CNPJ:</b> {item.cnpj}</span>
                        <span><b>Nome da empresa:</b> {item.nome_empresa}</span>
                        <span><b>Nome do cliente:</b> {item.nome_cliente}</span>
                        <span><b>CEP:</b> {item.cep}</span>
                        <span><b>Endereço:</b> {`${item.endereco}, ${item.numero}`}</span>
                        <span><b>Telefone:</b> {item.telefone}</span>
                        <span><b>E-mail:</b> {item.email}</span>
                        <a href={`http://localhost:3000/company/${item.cnpj}`}><button>Visualizar individual</button></a>
                    </div>
                    :
                    ""
            ))}
        </div>

    );
}

export default Home;