import {comandos}  from '../comando/comandos.js';
export const mensagem = ` *💻 Aplicativo Ativado 💻*
Aplicativo está iniciado.
Comandos:
${comandos.map(comando => `> ${comando.chatComando}`).join('\n')}`