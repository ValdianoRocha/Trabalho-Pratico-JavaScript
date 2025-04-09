import fs from "fs/promises"
const caminho = './tarefas.json'
import PromptSync from "prompt-sync"
const prompt = PromptSync()


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
    // let dadosInformados = await adicionar()
    const tarefa = await lerConverterTarefa()
    const ultimoId = tarefa.length > 0 ? tarefa[tarefa.length - 1].id + 1 : 1; //pegar o ultimo id 
    // let id = object['animais'].length+1
    let novaTarefa = {
        "id": ultimoId,
        "titulo": prompt("nome: "),
        "descricao": prompt("tipo: "),
        "concluida": false
    }

    tarefa.push(novaTarefa)
    await escreverTarefa(tarefa)

} //adicionar um novo arquivo no final da lista de objeto usando a função escreverArquivo


// console.log(await lerConverterTarefa());

