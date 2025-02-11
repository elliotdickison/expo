"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_plugins_1 = require("@expo/config-plugins");
const withAdMobAndroid_1 = require("./withAdMobAndroid");
const withAdMobIOS_1 = require("./withAdMobIOS");
const pkg = require('expo-ads-admob/package.json');
const withAdMob = (config, props) => {
    config = withAdMobAndroid_1.withAdMobAndroid(config);
    config = withAdMobIOS_1.withAdMobIOS(config);
    config = withAdMobIOS_1.withUserTrackingPermission(config, props);
    return config;
};
exports.default = config_plugins_1.createRunOncePlugin(withAdMob, pkg.name, pkg.version);
