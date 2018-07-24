const moleculer = require("moleculer")

let broker = new moleculer.ServiceBroker({
    nodeID: `discovery`,
    logger: console,
    logLevel: process.env.LOGLEVEL || "info",
    transporter: {
        type: "TCP",
        options: {
            udpDiscovery: false,
            port: 4001,
            useHostname: false,
        },
    },
});

broker.start();
