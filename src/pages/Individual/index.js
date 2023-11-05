import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './style.css';

function Individual() {

    const { cnpj } = useParams();

    const [data, setData] = useState([]);

    useEffect(() => {
        const url = "http://localhost:3001/companies/" + cnpj;

        axios.get(url)
            .then(function (response) {
                console.log(response.data);
                setData(response.data);
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])

    const deleteButton = (event) => {
        try {
            const url = "http://localhost:3001/company/" + cnpj;
            event.preventDefault();

            axios.delete(url);
            alert("Cadastro excluído com sucesso!");
            window.location.replace("http://localhost:3000/");
        } catch (error) {
            alert("Algo deu errado... =(");
            console.log(error);
        }
    }

    return (
        <div className="individualContainer">
            {data.map((item) => (
                <div key={item.cnpj} className="individualData">
                    <span><b>CNPJ:</b> {item.cnpj}</span>
                    <span><b>Nome da empresa:</b> {item.nome_empresa}</span>
                    <span><b>Nome do cliente:</b> {item.nome_cliente}</span>
                    <span><b>CEP:</b> {item.cep}</span>
                    <span><b>Endereço:</b> {`${item.endereco}, ${item.numero}`}</span>
                    <span><b>Telefone:</b> {item.telefone}</span>
                    <span><b>E-mail:</b> {item.email}</span>
                    <div className="individualButtons">
                        <button onClick={deleteButton}>Deletar empresa</button>
                        <a href={`http://localhost:3000/${item.cnpj}/update`}><button>Atualizar</button></a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Individual;