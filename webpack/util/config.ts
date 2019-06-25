import path from "path";
import fs from "fs";
import yaml from "js-yaml";

const configDir = path.resolve(process.cwd(), "config");

export function loadConfig(env: string) {
  const envConfigFilePath = path.resolve(configDir, `${env}.yml`);
  const envConfigFile = fs.readFileSync(envConfigFilePath).toString();
  return yaml.safeLoad(envConfigFile);
}
