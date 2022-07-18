const WebClient = require("@slack/web-api").WebClient;

class Slack {
  constructor(token) {
    this.client = new WebClient(token);
  }

  async getUserStatus(user) {
    const response = await this.client.users.getPresence({ user });
    if (!response.ok) {
      return undefined;
    }

    return response.presence;
  }
}

module.exports = Slack;
