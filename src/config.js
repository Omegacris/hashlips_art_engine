const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Grillz-Bunny RichClub";
const description = "Meet the first, unique 1:1, and rich Grillz-Bunny (G-Bunny) NFTs of the new Metaverse and Realverse. Exclusively and manually designed pixel-by-pixel crypto art #PixelArt";
const baseUri = "ipfs://NewUriToReplace"; // This will be replaced automatically

const solanaMetadata = {
  symbol: "GBRC",  // default "YC"
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "", // https://www.grillzbunny.com
  creators: [
    {
      address: "0x2Dfb1f897fBe960CD201c99B98BE96380a1f7FB2",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 10, // cate imagini in total va genera programul
    layersOrder: [
      { name: "Background" },
      { name: "Base" },
      { name: "Eyes" },
      { name: "Glasses" },
      { name: "Hat" },
      { name: "Eyebrows" },
      { name: "Mouth" },
      { name: "Grillz" },
      { name: "Moustache" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 500,
  height: 500,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: false,
  brightness: "80%",
  static: false,
  default: "#000000",
};

//const extraMetadata = {};
const extraMetadata = {
  creator: "G-Bunny Omega",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 9000;

const preview = {
  thumbPerRow: 50, //default 5
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
