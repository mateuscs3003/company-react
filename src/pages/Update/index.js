import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Update() {
    const { cnpj } = useParams();

    const [data, setData] = useState({
        nome_empresa: null,
        nome_cliente: null,
        senha: null,
        cep: null,
        endereco: null,
        numero: null,
        telefone: null,
        email: null
    });

    useEffect(() => {
        const url = "http://localhost:3001/companies/" + cnpj;

        axios.get(url)
            .then(function (response) {
                console.log(response.data);
                const getData = {
                    nome_empresa: response.data.nome_empresa,
                    nome_cliente: response.data.nome_cliente,
                    senha: response.data.senha,
                    cep: response.data.cep,
                    endereco: response.data.endereco,
                    numero: response.data.numero,
                    telefone: response.data.telefone,
                    email: response.data.email
                }
                setData(getData);
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        try {
            const url = "http://localhost:3001/company/" + cnpj;
            event.preventDefault();

            axios.put(url, data);
            alert("Atualizado com sucesso!");
            window.location.replace("http://localhost:3000/");
        } catch (error) {
            console.log(error);
            alert("Verifique seus dados novamente!");
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Nome da empresa: </label> <input type="text" name="nome_empresa" value={data.nome_empresa} onChange={handleChange} />
                <label>Nome do cliente:</label> <input type="text" name="nome_cliente" value={data.nome_cliente} onChange={handleChange} /><br />
                <label>Senha:</label> <input type="password" name="senha" value={data.senha} onChange={handleChange} /><br />
                <label>CEP:</label> <input type="number" name="cep" value={data.cep} onChange={handleChange} /><br />
                <label>Endereço:</label> <input type="text" name="endereco" value={data.endereco} onChange={handleChange} /><br />
                <label>Número:</label> <input type="number" name="numero" value={data.numero} onChange={handleChange} /><br />
                <label>Telefone:</label> <input mask="(99)99999-9999" type="tel" name="telefone" value={data.telefone} onChange={handleChange} /><br />
                <label>E-mail:</label> <input type="text" name="email" value={data.email} onChange={handleChange} /><br />
                <button type="submit">Atualizar</button>
            </form>
        </div>
    )
}

export default Update;