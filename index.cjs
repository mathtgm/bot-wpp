const { Client, LocalAuth, MessageMedia } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const { comandos } = require("./comando/comandos");
const { mensagem } = require("./messagens/mensagem");
var log4js = require("log4js");
var logger = log4js.getLogger();

log4js.configure({
  appenders: {
    everything: { type: "file", filename: "bot-wpp.log" },
  },
  categories: {
    default: { appenders: ["everything"], level: "debug" },
  },
});

const client = new Client({
  authStrategy: new LocalAuth({
    dataPath: "./auth",
  }),
});

client.once("ready", async () => {
  console.log("Cliente conectado!");
});

client.on("authenticated", () => {
  console.log("Cliente autenticado!");
  
});

client.on("message", async (chat) => {
  let contato = (await chat.getContact()).name;
  comandos.forEach(async (comando) => {
    if (comando.chatComando === chat.body.toLowerCase()) {
      try {
        await comando.execute({ client: chat });
      } catch (error) {
        logger.error(error);
      }

      if (comando.path != "") {
        let messageMedia = MessageMedia.fromFilePath(comando.path);
        await client.sendMessage(chat.from, messageMedia);
      }

      logger.info(
        `Comando ${comando.chatComando} executado ${
          chat.from
        } ${contato}`
      );
    }
  });
});

client.on("qr", (qr) => {
  console.log("QR Code gerado!");
  qrcode.generate(qr, { small: true });
});

client.initialize();
