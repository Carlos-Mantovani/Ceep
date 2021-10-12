import BotaoConclui from "./componentes/concluiTarefa.js";
import BotaoDeleta from "./componentes/deletaTarefa.js";

const handleNovoItem = (evento) => {
    evento.preventDefault();

    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;

    const calendario = document.querySelector('[data-form-date]');
    const data = moment(calendario.value).format('DD/MM/YYYY');

    const dados = {
        valor,
        data
    }

    const criaTarefa = criarTarefa(dados)

    lista.appendChild(criaTarefa);
    input.value = " ";
}

const criarTarefa = ({valor, data}) => {
    const tarefa = document.createElement('li');
    tarefa.classList.add('task');
    const conteudo = `<p class="content">${data} * ${valor}</p>`;

    tarefa.innerHTML = conteudo;

    tarefa.appendChild(BotaoConclui());
    tarefa.appendChild(BotaoDeleta());

    return tarefa;
}

const novaTarefaBotao = document.querySelector('[data-form-button]');
novaTarefaBotao.addEventListener('click', handleNovoItem);
