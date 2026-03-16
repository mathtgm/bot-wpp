import { ComandoBuilder } from "./comandoBuilder.js";
import { takeShotWebCam } from "./takeShotWebCamCommand.js";
import { takeScreenShot } from "./takeScreenShotCommand.js";
import { playSound } from "./playSoundCommand.js";
import { filesPathsWAV } from "./filePathEnum.js";

export const comandos = [
  new ComandoBuilder()
    .chatCommand("!fotinha")
    .filePath("./fotos/foto.jpg")
    .callback(takeShotWebCam)
    .build(),

  new ComandoBuilder()
    .chatCommand("!tela")
    .filePath("./fotos/screenshot.jpg")
    .callback(takeScreenShot)
    .build(),

  new ComandoBuilder()
    .chatCommand("!vacuo")
    .filePath("")
    .callback(() => playSound(filesPathsWAV.vacuo))
    .build(),

  new ComandoBuilder()
    .chatCommand("!sad")
    .filePath("")
    .callback(() => playSound(filesPathsWAV.sad))
    .build(),
];
