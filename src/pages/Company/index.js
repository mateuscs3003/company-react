import React, { useState } from 'react';
import axios from 'axios';

function Company() {
    const [data, setData] = useState({
        nome_empresa: '',
        nome_cliente: '',
        senha: '',
        cnpj: null,
        cep: null,
        endereco: '',
        numero: null,
        telefone: null,
        email: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({
            ...data,
            [name]: value,
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const url = "http://localhost:3001/company";
        axios.post(url, data);
    }

    return (
        <div>
            <h2>Cadastro</h2>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Nome da empresa:</label> <input type="text" name="nome_empresa" value={data.nome_empresa} onChange={handleChange}/><br/>
                    <label>Nome do cliente:</label> <input type="text" name="nome_cliente" value={data.nome_cliente} onChange={handleChange}/><br/>
                    <label>Senha:</label> <input type="password" name="senha" value={data.senha} onChange={handleChange}/><br/>
                    <label>CNPJ:</label> <input type="number" name="cnpj" value={data.cnpj} onChange={handleChange}/><br/>
                    <label>CEP:</label> <input type="number" name="cep" value={data.cep} onChange={handleChange}/><br/>
                    <label>Endereço:</label> <input type="text" name="endereco" value={data.endereco} onChange={handleChange}/><br/>
                    <label>Número:</label> <input type="number" name="numero" value={data.numero} onChange={handleChange}/><br/>
                    <label>Telefone:</label> <input type="number" name="telefone" value={data.telefone} onChange={handleChange}/><br/>
                    <label>E-mail:</label> <input type="text" name="email" value={data.email} onChange={handleChange}/><br/>
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}

export default Company;