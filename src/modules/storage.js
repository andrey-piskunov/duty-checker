const fs = require("fs");

class Storage {
  constructor(storagePath, extension=".json") {
    this.path = storagePath;
    this.userStatuses = {};
    this.extension = extension;
  }

  save(userId, status) {
    if (!this.userStatuses[userId]) {
      this.userStatuses[userId] = [];
    }

    this.userStatuses[userId].push({
      date: new Date(),
      status,
    });
  }

  backup() {
    console.log("Backup")
    const date = Number(new Date());
    const fullFilePath = this.path + "-" + date + this.extension;
    console.log(fullFilePath)
    console.log(this.userStatuses)

    fs.writeFile(
      fullFilePath,
      JSON.stringify(this.userStatuses),
      err => {
        if (err) {
          console.log(err);
        }
      },
    );
  }
}

module.exports = Storage;
