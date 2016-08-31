'use strict'

let verseIndex = ['fly','spider'];
let verses = {
  fly:{
    comment:'I know an old lady who swallowed a fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.',
  },

  spider:{
    comment:'I know an old lady who swallowed a spider.\nIt wriggled and jiggled and tickled inside her.\nShe swallowed the spider to catch the fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n',
  }
}

// let verses = new Object();
// verses.fly = 'I know an old lady who swallowed a fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.';
// verses.spider = 'I know an old lady who swallowed a spider.\nIt wriggled and jiggled and tickled inside her.\nShe swallowed the spider to catch the fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';


console.log(verses[Object.keys(verses)[0]].comment)


class Song {
  statis verse()


}
