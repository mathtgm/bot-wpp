import player from "node-wav-player";
import log4js from "log4js"

export function playSound(soundPath) {
    let logger = log4js.getLogger();
    player
        .play({
          path: soundPath,
        })
        .catch((error) => {
          logger.error(error);
        });

}