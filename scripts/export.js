const { writeFile, mkdirSync } = require('fs');
const { RichContentValidator, Channels, Types } = require('../dist');

const channel = Channels[process.argv[2]];

const validator = new RichContentValidator({ channel });

const bdy = validator.exportSchema({ type: Types.BDY, channel });
const mtd = validator.exportSchema({ type: Types.MTD, channel });
const qur = validator.exportSchema({ type: Types.QUR, channel });

mkdirSync('./scripts/tmp', { recursive: true }, (err) => console.log(err));

writeFile('./scripts/tmp/bdy.json', JSON.stringify(bdy, null, 2), (err) => console.log(err || 'bdy: success'));
writeFile('./scripts/tmp/mtd.json', JSON.stringify(mtd, null, 2), (err) => console.log(err || 'mtd: success'));
writeFile('./scripts/tmp/qur.json', JSON.stringify(qur, null, 2), (err) => console.log(err || 'qur: success'));
