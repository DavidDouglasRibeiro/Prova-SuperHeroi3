import './index.scss'
import '../../commom/commom.scss'
import { useState, useEffect } from 'react'
import { InserirHerois, ConsultarTodosHerois } from '../../api/index.js'
import { Link } from "react-router-dom"

export default function Index() {
    const [nome, setNome] = useState('');
    const [super_poder, setSuper_poder] = useState('');
    const [voa, setVoa] = useState(false);
    const [superHerois, setSuperHerois] = useState([]);

    async function clicar() {
        try{
            await InserirHerois(nome, super_poder, voa)
            alert('Seu Heroizinho foi cadastrado!!')
        }
        catch(err) {
            alert(err.response.data.superHerois)
        }
    }

    async function Consultar() {
        const r = await ConsultarTodosHerois();
        setSuperHerois(r);
    }
    useEffect(() => {Consultar(); }, [])


    return(
        <main>
            <h1> Bem-Vindo  </h1>
            <p> Realize seus cadastros! </p>

            <div>
            <h1> Área Cadastro</h1>

                <div> 
                    <label> Nome: </label>
                    <input type="text" placeholder="Informe o nome" value={nome} onChange={e => setNome(e.target.value)} />
                </div>
                <div> 
                    <label> Super-Poder: </label>
                    <input type="text" placeholder="Informe o super-poder" value={super_poder} onChange={e => setSuper_poder(e.target.value)} />
                </div>
                <div> 
                    <label> Ele voa? </label>
                    <input type="checkbox" checked={voa} onChange={e => setVoa(e.target.checked)} />
                </div>
                <div>
                    <button onClick={clicar}> Cadastrar</button>
                </div>
            </div>

            <div>
                <h1> Área Consulta </h1>

                <div>
                    <table>
                        <thead>
                            <tr>
                                <th> Nome </th>
                                <th> Super-Poder </th>
                                <th> Ele voa? </th>
                            </tr>
                        </thead>

                        <tbody>
                            {superHerois.map(i => 
                            <tr>
                                <td> {i.nome} </td>
                                <td> {i.super_poder} </td>
                                <td> {i.voa ? 'Sim' : 'Não'} </td>

                            </tr>    
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            <Link className='navegar' to="/"> Ir para home </Link>
        </main>
    )
}