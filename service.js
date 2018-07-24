const moleculer = require("moleculer")

let broker = new moleculer.ServiceBroker({
    nodeID: `service`,
    logger: console,
    logLevel: process.env.LOGLEVEL || "info",
    transporter: {
        type: "TCP",
        options: {
            urls: ['localhost:4001/discovery'],
            udpDiscovery: false,
            port: 4002,
            useHostname: false,
        },
    },
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