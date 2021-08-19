export default {
  // custom types
  types: {
    // mapping the actual specified address format
    Address: "MultiAddress",
    // mapping the lookup
    LookupSource: "MultiAddress",
    Account: { nonce: "U256", balance: "U256" },
    Transaction: {
      nonce: "U256",
      action: "String",
      gas_price: "u64",
      gas_limit: "u64",
      value: "U256",
      input: "Vec<u8>",
      signature: "Signature",
    },
    Signature: "[u8; 65]", //{ v: "u64", r: "H256", s: "H256" },
    BlockWeights: "u64",
    BlockLength: "u64",
    ParachainInherentData: "u64",
    DataSource: "u64",
    EthAddress: "[u8; 20]",
    QueryKey: "u64",
    ClassId: "u32",
    ClassIdOf: "ClassId",
    TokenId: "u64",
    TokenIdOf: "TokenId",
    Properties: { _enum: ["Transferable", "Burnable"] },
    HashByte32: "[u8; 32]",
    CID: "Vec<u8>",
    ClassType: {
      _enum: {
        1: "u32",
        2: "HashByte32",
        3: "(CID, CID, bool)",
      },
    },
  },
  // custom rpc : api.rpc.kitties.getKittyPrice
  // rpc: {
  //     getKittyPrice:{
  //         description: 'Get Kitty price',
  //         params: [
  //             {
  //                 name: 'at',
  //                 type: 'BlockHash',
  //                 isHistoric: true,
  //                 isOptional: false
  //             },
  //             {
  //                 name: 'kittyIndex',
  //                 type: 'KittyIndex',
  //                 isOptional: false
  //             }
  //         ],
  //         type: 'Balance'
  //     }
  // }
};
