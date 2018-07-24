const moleculer = require("moleculer")

let broker = new moleculer.ServiceBroker({
    nodeID: `client`,
    logger: console,
    logLevel: process.env.LOGLEVEL || "info",
    transporter: "redis://localhost:6379",
});

broker.start();

broker.repl()
