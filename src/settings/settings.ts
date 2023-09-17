import TagLinkPlugin from "../main";
import { App, PluginSettingTab, Setting } from "obsidian";

export interface TagLinkSettings {
    baseUrl: string;
    prefix: string;
    keyRegex: string;
}

export const DEFAULT_SETTINGS: Partial<TagLinkSettings> = {
    baseUrl: "https://<host:port>",
    prefix: "PRE:",
    keyRegex: "([^\s]+)"
  };
export class TagLinkSettingTab extends PluginSettingTab {
  plugin: TagLinkPlugin;

  constructor(app: App, plugin: TagLinkPlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    let { containerEl } = this;

    containerEl.empty();

    new Setting(containerEl)
      .setName("Base Url")
      .setDesc("Base Url for Links")
      .addText((text) =>
        text
          .setPlaceholder("https://<host:port>")
          .setValue(this.plugin.settings.baseUrl)
          .onChange(async (value) => {
            this.plugin.settings.baseUrl = value;
            await this.plugin.saveSettings();
          })
      );

      new Setting(containerEl)
      .setName("Prefix")
      .setDesc("Text prefix to find text which is to be converted")
      .addText((text) =>
        text
          .setPlaceholder("PRE:")
          .setValue(this.plugin.settings.prefix)
          .onChange(async (value) => {
            this.plugin.settings.prefix = value;
            await this.plugin.saveSettings();
          })
      );

      new Setting(containerEl)
      .setName("Key Regex")
      .setDesc("Regex to get url path from match")
      .addText((text) =>
        text
          .setPlaceholder("([^\s]+)")
          .setValue(this.plugin.settings.keyRegex)
          .onChange(async (value) => {
            this.plugin.settings.keyRegex = value;
            await this.plugin.saveSettings();
          })
      );
  }
}

export const SettingsData: TagLinkSettings = {
  baseUrl:"https://<host:port>",
  prefix: "PRE:",
  keyRegex: "([^\s]+)"
}