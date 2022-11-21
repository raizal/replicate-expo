import React from 'react';
import { SvgFromXml } from 'react-native-svg';

const xml = `<?xml version="1.0" encoding="iso-8859-1"?>
<svg xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px"
y="0px"
viewBox="0 0 192.729 192.729" style="enable-background:new 0 0 192.729 192.729;" xml:space="preserve">
<g>
<g>
<g>
<rect y="124.916" width="8" height="56"/>
<rect x="16" y="88.916" width="8" height="92"/>
<rect x="32" y="80.916" width="8" height="99.637"/>
<rect x="48" y="68.916" width="8" height="111.637"/>
<rect x="64" y="44.916" width="8" height="136"/>
<rect x="80" y="40.916" width="8" height="140"/>
<rect x="96" y="56.846" width="8" height="124.07"/>
<rect x="112" y="72.914" width="8" height="107.558"/>
<rect x="128" y="80.914" width="8" height="99.558"/>
<rect x="144" y="124.916" width="8" height="56"/>
<rect x="160" y="108.916" width="8" height="72"/>
<rect x="176" y="120.723" width="8" height="60.193"/>
<path d="M192.699,69.335l-3.918-31.909c-0.27-2.193-2.266-3.723-4.459-3.482c-2.192,0.27-3.752,2.266-3.482,4.459l3.297,26.837
l-68.385-53.428l-4.926,6.305l63.312,49.466l-16.754,2.056c-2.192,0.27-3.752,2.266-3.482,4.457
c0.25,2.027,1.975,3.514,3.965,3.514c0.164,0,0.328-0.01,0.492-0.029l30.858-3.787c1.053-0.129,2.01-0.672,2.664-1.508
C192.533,71.45,192.828,70.39,192.699,69.335z"/>
</g>
</g>
</g>
</svg>`;

const MarketIcon = () => {
  return <SvgFromXml xml={xml} width={16} height={16} fill="#333" />;
};

export default MarketIcon;
