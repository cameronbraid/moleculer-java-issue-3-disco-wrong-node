const moleculer = require("moleculer")

let broker = new moleculer.ServiceBroker({
    nodeID: `discovery`,
    logger: console,
    logLevel: process.env.LOGLEVEL || "info",
    transporter: "redis://localhost:6379",
});

broker.start();
