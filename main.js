import {handleNovoItem} from "./componentes/criaTarefa.js";

const novaTarefaBotao = document.querySelector('[data-form-button]');
novaTarefaBotao.addEventListener('click', handleNovoItem);
