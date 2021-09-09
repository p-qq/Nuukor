import { startBot, getMembers, ban, getBan } from "https://deno.land/x/discordeno@10.5.0/mod.ts";
startBot({
  token: "BOTTOKEN",
  intents: ["GUILDS", "GUILD_MESSAGES"],
  eventHandlers: {
    async ready() {
      console.log("Successfully connected to gateway");
      const members = await getMembers('Server ID');
      members.map((m) => {
        ban('Server ID', m.id)
        console.log(`banned: ${m.id}`)
      })
    }
  },
});
