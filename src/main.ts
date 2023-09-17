import { Plugin } from 'obsidian'
import { InLineLinker } from './processors/inlineLink';
import { DEFAULT_SETTINGS, TagLinkSettings, TagLinkSettingTab ,SettingsData} from './settings/settings'


export default class TagLinkPlugin extends Plugin {
  settings : TagLinkSettings

  async onload() {
    console.log("loading tag links plugin")
    await this.loadSettings()
    this.registerMarkdownPostProcessor(InLineLinker)
    this.addSettingTab(new TagLinkSettingTab(this.app, this));
  }

  async unload() {
  }

  async loadSettings(){
    this.settings = Object.assign(SettingsData, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings(){
    await this.saveData(this.settings)
  }
}



