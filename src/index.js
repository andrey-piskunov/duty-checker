const config = require("./config");
const Slack = require("./modules/slack");
const Storage = require("./modules/storage")

console.log(config)

async function loop(slack, storage) {
  console.log("Run loop " + (new Date()).toISOString());
  for (const user of config.users) {
    const status = await slack.getUserStatus(user);
    storage.save(user, status);
  }
}

async function main() {
  const slack = new Slack(config.slackToken);
  const storage = new Storage(config.storagePath);

  loop(slack, storage);
  setInterval(() => {
    loop(slack, storage);
  }, config.loopTimeout);

  storage.backup();
  setInterval(() => {
    storage.backup();
  }, config.backupTimeout);
}

main().catch(console.log);
