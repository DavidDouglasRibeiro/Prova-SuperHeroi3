import { con } from './connection.js'

export async function InserirHeroi(heroi) {
    const comando =
    ` insert into tb_super_heroi(nm_super_heroi, ds_super_poder, bt_voa)
            values (?, ?, ?)`
    
    const [resposta] = await con.query(comando, [heroi.nome, heroi.super_poder, heroi.voa]);
    heroi.id = resposta.insertId;
    return heroi; 
}

export async function ConsultarTodosHerois() {
    const comando = 
    `
    select  id_super_heroi  id,
            nm_super_heroi  nome,
            ds_super_poder	super_poder,
            bt_voa			voa
    from tb_super_heroi
    `;

    const [linhas] = await con.query(comando);
    return linhas;
}

