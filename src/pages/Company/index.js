import React, { useState } from 'react';
import axios from 'axios';
import './style.css';

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
        <div class="containerForm">
            <div className="cardForm">
                <h2>Cadastro</h2>
                <form class="dataForm" onSubmit={handleSubmit}>
                    <div><label>Nome da empresa:</label> <input type="text" name="nome_empresa" value={data.nome_empresa} onChange={handleChange}/> </div>
                    <div><label>Nome do cliente:</label> <input type="text" name="nome_cliente" value={data.nome_cliente} onChange={handleChange}/> </div>
                    <div><label>Senha:</label> <input type="password" name="senha" value={data.senha} onChange={handleChange}/> </div>
                    <div><label>CNPJ:</label> <input type="number" name="cnpj" value={data.cnpj} onChange={handleChange}/> </div>
                    <div><label>CEP:</label> <input type="number" name="cep" value={data.cep} onChange={handleChange}/> </div>
                    <div><label>Endereço:</label> <input type="text" name="endereco" value={data.endereco} onChange={handleChange}/> </div>
                    <div><label>Número:</label> <input type="number" name="numero" value={data.numero} onChange={handleChange}/> </div>
                    <div><label>Telefone:</label> <input type="number" name="telefone" value={data.telefone} onChange={handleChange}/> </div>
                    <div><label>E-mail:</label> <input type="text" name="email" value={data.email} onChange={handleChange}/> </div>
                    <div class="buttonForm"><button type="submit">Cadastrar</button> </div>
                </form>
            </div>
        </div>
    );
}

export default Company;