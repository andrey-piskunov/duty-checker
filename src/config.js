const join = require("path").join;
const dotenv = require("dotenv");

dotenv.config({
  path: join(__dirname, "../.env"),
  encoding: "utf-8",
});

module.exports = {
  loopTimeout: process.env.LOOP_TIMEOUT ? process.env.LOOP_TIMEOUT : 1000 * 60 * 30,
  backupTimeout: process.env.BACKUP_TIMEOUT ? process.env.BACKUP_TIMEOUT: 1000 * 60 * 60 * 2,
  users: process.env.USERS ? process.env.USERS.split(", ") : [],
  storagePath: process.env.STORAGE_PATH ?? "",
  slackToken: process.env.SLACK_TOKEN ?? "",
};
