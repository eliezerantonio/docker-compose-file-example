const cron = require("node-cron");
const { syncDB } = require("./tasks/async-db");

console.log("running");

cron.schedule("1-59/5 * * * * *", syncDB);
