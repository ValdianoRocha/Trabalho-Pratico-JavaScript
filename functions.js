import fs from "fs/promises"
const caminho = './tarefas.json'


export async function lerConverterTarefa() {
    try {
        const dados = await fs.readFile(caminho, "utf-8")  // ler dados 
        return JSON.parse(dados) //converter em object
    } catch (erro) {
        console.error(`Erro ao ler o arquivo: ${erro.messege}`);
        return ["erro"]
    }
} // ler o arquivi e converte em object

async function escreverTarefa(dados) {
    try { //serve para tratar erro
        dados = JSON.stringify(dados, null, 2);
        await fs.writeFile(caminho, dados, 'utf-8')
        console.log("Arquivo atualizado com sucesso!")
    } catch (erro) {
        console.error("Erro ao escrever no arquivo: ", erro);
    }
} //reescreve o  arquivo e organiza 





// console.log(await lerConverterTarefa());

