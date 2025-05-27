import { useState, useEffect, use } from 'react';
import axios from 'axios';  

export function Exemplo2() {
    const [cep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [bairro, setBairro] = useState('');
    const [localidade, setLocalidade] = useState('');
    const [estado, setEstado] = useState('');
    const [uf, setUf] = useState('');

    useEffect(() => {
        if (cep.length === 8) {
            axios.get(`https://viacep.com.br/ws/${cep}/json/`).then(response => {
                setLogradouro(response.data.logradouro);
                setBairro(response.data.bairro);
                setLocalidade(response.data.localidade);
                setEstado(response.data.uf);
                setUf(response.data.uf);
            
            
            });
        }
    }, [cep]);

    return (
        <section>
            <h2>Exemplo 2: Busca CEP</h2>

            <div>
                <input type="number" id="cep" placeholder="Digite seu CEP" onChange={(input) => setCep(input.target.value)}/>
            

            {cep.length === 8 && (
                <>
                    <h3>CEP: {cep}</h3>
                    <p>Logradouro: {logradouro}</p>
                    <p>Bairro: {bairro}</p>
                    <p>Localidade: {localidade}</p>
                    <p>Estado: {estado}</p>
                    <p>UF: {uf}</p>
                </>
            )}

            </div>  
        </section>

    )
}
