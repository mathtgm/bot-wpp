export class ComandoBuilder {
    constructor() {
        this.path = null;
        this.chatComando = null;
        this.execute = null;
    }

    chatCommand(chatComando) {
        this.chatComando = chatComando;
        return this;
    }

    filePath(path) {
        this.path = path;
        return this;
    }

    callback(execute) {
        this.execute = execute;
        return this;
    }

    build() {
        if (!this.chatComando || !this.execute) {
            throw new Error("Todos os campos devem ser preenchidos.");
        }
        return {
            chatComando: this.chatComando,
            path: this.path,
            execute: this.execute
        };
    }
}