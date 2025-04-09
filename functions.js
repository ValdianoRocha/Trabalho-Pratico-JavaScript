
import fs from "fs/promises"
const caminho = './tarefas.json'


async function lerConverterTarefa() {
    try {
        const dados = await fs.readFile(caminho, "utf-8")  // ler dados 
        return JSON.parse(dados) //converter em object
    } catch (erro) {
        console.error(`Erro ao ler o arquivo: ${erro.messege}`);
        return ["erro"]
    }
} // ler o arquivi e converte em object

console.log(await lerConverterTarefa());

