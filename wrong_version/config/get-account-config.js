"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("@polkadot/api");
const util_crypto_1 = require("@polkadot/util-crypto");
const ss58 = require("substrate-ss58");
const accountConfig = require("./substrate-account-config.json");
function getAccountConfig() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, util_crypto_1.cryptoWaitReady)();
        const keyring = new api_1.Keyring({ type: "sr25519" });
        let regExp = new RegExp("/", "g");
        //admins
        let secretKeyUri = accountConfig.secret_key_uri;
        let admins = "vec![";
        for (var i = 0; i < secretKeyUri.length; i++) {
            let pubKey = ss58.addressToAddressId(keyring.addFromUri(secretKeyUri[i]).address);
            if (i != secretKeyUri.length - 1) {
                admins = admins + "AccountId::from(hex_literal::hex![\"" + pubKey.slice(2) + "\"]),";
            }
            else {
                admins = admins + "AccountId::from(hex_literal::hex![\"" + pubKey.slice(2) + "\"])]";
            }
        }
        //authorities_seeds  
        let authSeeds = accountConfig.authorities_seeds;
        let authorities_seeds = "authorities_seeds: \\&[";
        for (var i = 0; i < authSeeds.length; i++) {
            if (i != authSeeds.length - 1) {
                authorities_seeds = authorities_seeds + "\"" + authSeeds[i].replace(regExp, "\\/") + "\",";
            }
            else
                authorities_seeds = authorities_seeds + "\"" + authSeeds[i].replace(regExp, "\\/") + "\"],";
        }
        //pre_funded_seeds
        let preSeeds = accountConfig.pre_funded_seeds;
        let pre_funded_seeds = "pre_funded_seeds: \\&[";
        for (var i = 0; i < preSeeds.length; i++) {
            if (i != preSeeds.length - 1) {
                pre_funded_seeds = pre_funded_seeds + "\"" + preSeeds[i].replace(regExp, "\\/") + "\",";
            }
            else
                pre_funded_seeds = pre_funded_seeds + "\"" + preSeeds[i].replace(regExp, "\\/") + "\"],";
        }
        //sudo_account_seeds
        let sudo_account_seed = "sudo_account_seed: \"" + accountConfig["sudo_account_seed"].replace(regExp, "\\/") + "\"";
        console.log(admins);
        console.log(authorities_seeds);
        console.log(pre_funded_seeds);
        console.log(sudo_account_seed);
    });
}
getAccountConfig();
//# sourceMappingURL=get-account-config.js.map