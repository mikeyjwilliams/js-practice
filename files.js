const fse = require('fs-extra');


// fse options
const directory = 'sorted'



async function directoryExistsElseCreate(directory) {
    try {
        await fse.ensureDir(directory)
        console.log('success'); //! remove later
    } catch (err) {
        console.log(err);
    }
}

// directoryExistsElseCreate(directory);

let name = 'file.jpg';

if (name.endsWith('jpg')) {
    fse.move('file.jpg', 'sorted/file.jpg'), err => {
        if (err) return console.error(err)
        console.log(err);
    };
    console.log('successfully moved'); //! remove later
}
