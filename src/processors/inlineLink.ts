import { MarkdownPostProcessorContext } from "obsidian"
import { SettingsData } from "src/settings/settings";

export const InLineLinker = async (el:HTMLElement, ctx: MarkdownPostProcessorContext) =>{
    let match
    while (match = new RegExp(SettingsData.prefix+SettingsData.keyRegex).exec(el.innerHTML)) {
        const issueId = match[0];
        const issueIdTkt = issueId.replace(SettingsData.prefix, "");
        const div = document.createElement("a");
        div.style.display = "inline-block";
        div.style.outline = "0";
        div.style.border = "none";
        div.style.cursor = "pointer";
        div.style.padding = "5px 5px 5px 5px";
        div.style.borderRadius = "20px";
        div.style.minWidth = "20px";
        div.style.textDecoration ="none";
        div.style.fontSize = "14px";
        div.style.lineHeight = "14px";
        div.style.backgroundColor = "#fd0";
        div.style.fontWeight = "500";
        div.style.color = "#222";
        div.innerText = "#"+issueIdTkt.toLowerCase();
        div.href =`${SettingsData.baseUrl}${issueIdTkt}`
        el.innerHTML = el.innerHTML.replace(issueId, div.outerHTML);
    } 
}