import { configure, setAddon } from "@storybook/react";
import JSXAddon from "./addons";

setAddon(JSXAddon);
configure(() => require("./stories"), module);
