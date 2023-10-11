const fs = require('fs');

const content = new Date().toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" });

fs.writeFile('./data/file.txt', content, err => {
    if (err) {
        console.error(err);
    }
});