import {handleNovoItem} from "./componentes/criaTarefa.js";
import {carregaTarefa} from "./componentes/carregaTarefa.js";

const novaTarefaBotao = document.querySelector('[data-form-button]');
novaTarefaBotao.addEventListener('click', handleNovoItem);

carregaTarefa();
