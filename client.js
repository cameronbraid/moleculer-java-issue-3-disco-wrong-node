const moleculer = require("moleculer")

let broker = new moleculer.ServiceBroker({
    nodeID: `client`,
    logger: console,
    logLevel: process.env.LOGLEVEL || "info",
    transporter: {
        type: "TCP",
        options: {
            urls: ['localhost:4001/disco'],
            udpDiscovery: false,
            port: 4003,
            useHostname: false,
        },
    },
});

broker.start();

broker.repl()
