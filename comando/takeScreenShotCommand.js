import screenshot from "screenshot-desktop";
import log4js from "log4js";

export async function takeScreenShot() {
  let logger=log4js.getLogger();
  await screenshot({ format: "jpeg", filename: "./fotos/screenshot.jpg" })
    .catch((error) => {
       logger.error(error);
    });  
}
