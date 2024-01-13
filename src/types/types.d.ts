import {
  CacheType,
  ChatInputCommandInteraction,
  Collection,
  SlashCommandBuilder,
} from "discord.js";

declare module "discord.js" {
  interface Client {
    commands: Collection<string, unknown>;
  }
}

export interface Command {
  data: SlashCommandBuilder;
  execute: (interaction: ChatInputCommandInteraction<CacheType>) => {};
}
