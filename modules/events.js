const Events = require("events");
class Logger extends Events {
  log(a, b) {
    this.emit("calculate", a + b);
  }
}
const logger = new Logger();

logger.on("calculate", (data) => {
  console.log(data);
});
logger.log(8, 11);
logger.log(8, 1);
logger.log(8, 21);
logger.log(8, 111);
