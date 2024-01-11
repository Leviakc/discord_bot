import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("help")
  .setDescription("Creates a new help ticket.")
  .addStringOption((option) =>
    option
      .setName("description")
      .setDescription("Describre your problem")
      .setRequired(true)
  );

export const execute = async (
  interaction: ChatInputCommandInteraction<"cached">
) => {
  // interaction.user is the object representing the user who ran the command
  // interaction.member is the guildmember object, which represents the user in the specific guild
  await interaction.reply(
    `this command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`
  );
};
