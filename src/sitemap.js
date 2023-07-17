import { createSitemap } from 'react-router-sitemap';
import { StaticRouter } from 'react-router-dom';

const sitemap = createSitemap({
  hostname: 'https://sugartech.io',
  routes: [
    '/',
    '/productAr',
    '/productMeta',
    '/productJoint',
    '/productWatch',
    '/productShoes',
    '/productClooth',
    '/productCarpet',
    '/productTable',
    '/productBathroom',
    '/productWhiteGoods',
    '/productDecoration',
    '/productTextile',
    '/aboutUs',
    '/sugarBlog1',
    '/sugarBlog2',
    '/sugarBlog3',
    '/sugarBlog4',
    '/blogs',
    '/contactUs',
    '/contactCv',
  ],
});

const xml = sitemap.toXML();

const fs = require('fs');

fs.writeFileSync('sitemap.xml', xml);