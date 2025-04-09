import fs from "fs/promises"
const caminho = './tarefas.json'
import PromptSync from "prompt-sync"
const prompt = PromptSync()
const dados = await lerConverterTarefa()


export async function lerConverterTarefa() {
    try {
        const dados = await fs.readFile(caminho, "utf-8")  // ler dados 
        return JSON.parse(dados) //converter em object
    } catch (erro) {
        console.error(`Erro ao ler o arquivo: ${erro.messege}`);
        return ["erro"]
    }
} // ler o arquivi e converte em object

export async function escreverTarefa(dados) {
    try { //serve para tratar erro
        dados = JSON.stringify(dados, null, 2);
        await fs.writeFile(caminho, dados, 'utf-8')
        console.log("Arquivo atualizado com sucesso!")
    } catch (erro) {
        console.error("Erro ao escrever no arquivo: ", erro);
    }
} //reescreve o  arquivo e organiza 

export async function adicionarNovaTarefa() {
    const ultimoId = dados.length > 0 ? dados[dados.length - 1].id + 1 : 1; //pegar o ultimo id 
    // let id = object['animais'].length+1
    let novaTarefa = {
        "id": ultimoId,
        "nome": prompt("nome: "),
        "titulo": prompt("titulo: "),
        "descricao": prompt("descricao: "),
        "concluida": false
    }

    tarefa.push(novaTarefa)
    await escreverTarefa(tarefa)

} //adicionar um novo arquivo no final da lista de objeto usando a função escreverArquivo

export async function filtrarTarefasComcluidas() {
    let filtado = dados.filter(tarefa => tarefa["concluida"] == true)
    return filtado
}
export async function filtrarTarefasPendentes() {
    let filtado = dados.filter(tarefa => tarefa["concluida"] == false)
    return filtado
}

export async function comcluirTarefa() {
    console.log(await filtrarTarefasPendentes());
    const id = +prompt("qual id você quer comcluir: ")
    let tarefaEncontrada = dados.find((tarefa) => (id == tarefa.id))
    if (tarefaEncontrada) {
        tarefaEncontrada['concluida'] = true
    }
    console.log(tarefaEncontrada);
    await escreverTarefa(dados);

} //modificar habitat