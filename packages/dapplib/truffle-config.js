require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install inhale fresh turn bitter birth ranch common gesture opera tail slab'; 
let testAccounts = [
"0xb0254fd858f15f5ceac0abc64016e7323b8eebdd6d701d9ba1f2a9474a843665",
"0xbdf62137ee2b4e8317fe40e4f7f2cee0fd755a543d000b89d49b8d2b4886eabd",
"0xda87d2e33a24b1e9169518eba2a0e9bc5e31521d616556a200ed6e8c94ef2c67",
"0xbca6c980d91b757e319084874cd0d26b9183f24c2a08703d10687f506de9081d",
"0xec0e635f831fe9909826be70c7a61636f4f4e1ef3d905993dd7dc09d587ea7a2",
"0x5b626924057ef9ec26b503e6eeb51853c0e82af499dd22865b3c07c6d05b7c11",
"0xf51245ba6f6d1f7d65c0bd87fd57d1bfb422c5cb0fdc82589fc8cb0701d2b230",
"0x06003b3c721bb07211e80fa242a23854e28e782c02e44f261bd72e2f9ec28bac",
"0x9a229484df4cc955134479b2db082f8127ba52247aab79582294d2ec190f4ca0",
"0x71fbc3554d89ae9cee8ef6049748713f645683b425025697e5fd26739246b4d5"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
