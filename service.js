const moleculer = require("moleculer")

let broker = new moleculer.ServiceBroker({
    nodeID: `service`,
    logger: console,
    logLevel: process.env.LOGLEVEL || "info",
    transporter: "redis://localhost:6379",
});

broker.createService({
    name: "math",
    actions: {
        add(ctx) {
            return Number(ctx.params.a) + Number(ctx.params.b);
        }
    }
});

broker.start();