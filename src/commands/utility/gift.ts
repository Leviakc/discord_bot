import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("gift")
  .setDescription("Replies with gift info");

export const execute = async (interaction: ChatInputCommandInteraction) => {
  await interaction.reply("gift");
};
