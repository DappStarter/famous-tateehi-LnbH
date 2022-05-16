require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena forward turtle crazy riot magic million grace drive equal gauge'; 
let testAccounts = [
"0xa0a79a63bd8fff9bf05990c8dfbede7cf5d3421adabf94a18b9dc0730dc49719",
"0xcc5c5c937394c5afba76328623cf30e2247302974bab29e9585e6d912a55c74a",
"0x2ea8a4e44cbddacf5057ac727885ed119418dbd1e2f625af1d380324d3e8b586",
"0x553a61bc3e363e42e9c84f766e09256e0454f849e40d04c184ac69c5a109e7fc",
"0x10217597f969a454c3de690b258317efe11b3bc690655e2cf5cefc4b79311e02",
"0x939cd42cd0a96a6c83c99839afe5bec42f7e84dd4c9f1b5851e4ee81de6453b1",
"0x2f0c008d992597cdd409402d3c54e005977eb9d1ac66671943c7265b2276c6a6",
"0x812f7ef7be7e86bdd95c925e12036238ab7b46a74817d7823cd4036619d18dd4",
"0xf14400c3676f9f15976983066a482996bf1bde43ca68a4e1374d27ae61099949",
"0xcff1317a324c1d1f4b085dfd7cea43f8a4b00d56d1b14348cfba6b32f06ff5c5"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


