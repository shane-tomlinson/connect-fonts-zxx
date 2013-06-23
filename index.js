const path = require("path");

module.exports = {
  "root": path.join(__dirname, "fonts"),

  // Package info
  "package": {
    "name": "connect-fonts-zxx",
    "homepage": "https://github.com/shane-tomlinson/connect-fonts-zxx",
    "repourl": "https://github.com/shane-tomlinson/connect-fonts-zxx",
    "bugsurl": false
  },

  // Package author info
  "author": {
    "name": "Shane Tomlinson",
    "emails": "shane@shanetomlinson.com,stomlinson@mozilla.com,set117@yahoo.com",
    "urls": "https://shanetomlinson.com",
    "githubs": "https://github.com/shane-tomlinson,https://github.com/stomlinson",
    "twitter": "@shane_tomlinson"
  },


  // Common font information
  "font_common": {
    "description": "The name ZXX comes from the Library of Congress' Alpha-3 ISO 639-2 -- codes for the representation of names of languages. ZXX is used to declare No linguistic content; Not applicable. Free Open Type Font to open up governments. Download & disperse in your convenience",
    "names": "zxx-bold,zxx-camo,zxx-noise,zxx-sans,zxx-xed",
    "family": "ZXX Bold",
    "copyright": "Copyright (c) 2012 by Sang Mun. All rights reserved.",
    "designer": "Sang Mun",
    "url_designer": "http://www.sang-mun.com",
    "url_vendor": "http://z-x-x.org/"
  },


  // where to find a locale's fonts in the fonts directory
  "locale-to-subdirs": {
  },

  // what font types are enabled and what are the extensions of
  // the font files.
  //
  // valid types are embedded-opentype, woff, truetype, svg
  "enabled-types": [ "eot", "woff", "ttf", "svg" ],

  // The fonts. The name of the font must be the same as the font
  // in the fonts directory.
  "fonts": {
      "zxx-camo": {
        "fontFamily": "ZXX Bold",
        "fontStyle": "normal",
        "fontWeight": "400",
        "local": [ "ZXX-Camo", "ZXX-Camo" ]
      },
      "zxx-noise": {
        "fontFamily": "ZXX Bold",
        "fontStyle": "normal",
        "fontWeight": "400",
        "local": [ "ZXX-Noise", "ZXX-Noise" ]
      },
      "zxx-sans": {
        "fontFamily": "ZXX Bold",
        "fontStyle": "normal",
        "fontWeight": "400",
        "local": [ "ZXX-Sans", "ZXX-Sans" ]
      },
      "zxx-xed": {
        "fontFamily": "ZXX Bold",
        "fontStyle": "normal",
        "fontWeight": "400",
        "local": [ "ZXX-Xed", "ZXX-Xed" ]
      },
      "zxx-bold-regular": {
        "fontFamily": "ZXX Bold",
        "fontStyle": "normal",
        "fontWeight": "400",
        "local": [ "ZXX-Bold", "ZXX-Bold" ]
      }
  }
};
