import { saveAs } from "file-saver";
import { OS } from '../../components/Platform/Platform';

const download = () => {
    if (OS(window) === "Windows"){
        saveAs(
            "https://cdn.rondayapp.com/installers/Ronday+Installer.msi",
            "Ronday+Installer.msi"
        );
    } else {
        saveAs(
            "https://cdn.rondayapp.com/installers/Ronday+Installer.dmg",
            "Ronday+Installer.dmg"
        );
    }
}

export default download;

