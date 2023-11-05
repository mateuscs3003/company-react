import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
        } catch(error) {
            alert("Algo deu errado... =(");
            console.log(error);
        }
    }

    return (
        <div>
            {data.map((item) => (
                <div key={item.cnpj} className="table-row">
                    <span>CNPJ:</span> <span>{item.cnpj}</span>
                    <span>Nome da empresa:</span> <span>{item.nome_empresa}</span>
                    <span>Nome do cliente:</span> <span>{item.nome_cliente}</span>
                    <span>CEP:</span> <span>{item.cep}</span>
                    <span>Endereço:</span> <span>{`${item.endereco}, ${item.numero}`}</span>
                    <span>Telefone:</span> <span>{item.telefone}</span>
                    <span>E-mail:</span> <span>{item.email}</span>
                    <button onClick={deleteButton}>Deletar empresa</button>
                    <a href={`http://localhost:3000/${item.cnpj}/update`}><button>Atualizar</button></a>
                </div>
            ))}
        </div>
    );
}

export default Individual;