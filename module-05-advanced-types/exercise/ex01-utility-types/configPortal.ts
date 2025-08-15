/*
Define:

interface Config {
    host: string;
    port: number;
    secure: boolean;
}

Create a type ConfigUpdate that makes all properties optional (Partial).
Write a function updateConfig(current: Config, patch: ConfigUpdate): Config -> that merges them.
*/
interface Config {
  host: string;
  port: number;
  secure: boolean;
}

type ConfigUpdate = Partial<Config>;

const originalConfig: Config = {
  host: "http://localhost",
  port: 2000,
  secure: true,
};

const updatedConfig: ConfigUpdate = {
  host: "www.google.com",
};

function updateConfig(current: Config, patch: ConfigUpdate): Config {
  return { ...current, ...patch };
}

console.log(updateConfig(originalConfig, updatedConfig));
