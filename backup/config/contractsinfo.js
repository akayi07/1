"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extraTokens = exports.Chains = exports.contractsInfo = void 0;
exports.contractsInfo = require("./contracts-info.json");
exports.Chains = {
    "15": "local-test-net1",
    "16": "local-test-net2",
    "5": "goerli",
    "97": "bsctestnet",
    "338": "cronostestnet",
    "2814": "rolluxtestnet"
};
exports.extraTokens = [
    {
        chainId: "97",
        name: "usdt",
        wei: 18,
        address: "337610d27c682E347C9cD60BD4b3b107C9d34dDd"
    },
    {
        chainId: "97",
        name: "usdc",
        wei: 18,
        address: "64544969ed7EBf5f083679233325356EbE738930"
    },
    {
        chainId: "5",
        name: "usdt",
        wei: 6,
        address: "c81c248c44e96D85a0eCddc104843cE55B1ff35c"
    },
    {
        chainId: "5",
        name: "usdc",
        wei: 6,
        address: "07865c6E87B9F70255377e024ace6630C1Eaa37F"
    },
    {
        chainId: "338",
        name: "usdt",
        wei: 6,
        address: "E912124f1204208e3EBA49BAbe3Fc1028351808d"
    },
    {
        chainId: "338",
        name: "usdc",
        wei: 6,
        address: "374AC6edeE4385411FF36BEf74D2c1723bD7A6e8"
    }
];
//# sourceMappingURL=contractsinfo.js.map