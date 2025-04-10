import PromptSync from "prompt-sync";
const prompt = PromptSync()
import * as funcao from './functions.js';
let controlador;

do {
    console.log(`
1. Criar uma nova tarefa
2. Visualizar todas as tarefas
3. Visualizar apenas tarefas concluídas
4. Visualizar apenas tarefas não concluídas
5. Concluir uma tarefa
6. Sair
        `);
    controlador = +prompt(": ")
    switch (controlador) {
        case 1:
            await funcao.adicionarNovaTarefa()
            break;
        case 2:
            console.clear()
            console.log(await funcao.lerConverterTarefa());
            break;
        case 3:
            console.clear()
            console.log(await funcao.filtrarTarefasConcluidas());
            break;
        case 4:
            console.clear()
            console.log(await funcao.filtrarTarefasPendentes());
            break;
        case 5:
            console.clear()
            await funcao.concluirTarefa()
            break;
        case 6:
            console.log("Finalizando a execução do programa...")
            break;
        default:
            console.clear()
            console.log(`A opção digitada pelo usuario (${controlador}), não existe!`);
            break;
    }
} while (controlador !== 6);