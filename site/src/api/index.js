import axios from 'axios'
const api = axios.create({
    baseURL: "http://localhost:5000"
})

export async function InserirHerois(nome, super_poder, voa) {
    const r = await api.post('/superheroi', {
        nome: nome,
        super_poder: super_poder,
        voa: voa
    })
    return r.data;
}

export async function ConsultarTodosHerois() {
    const r = await api.get('/superheroi')
    return r.data;
}