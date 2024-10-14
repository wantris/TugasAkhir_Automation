const fs = require('fs');
const path = require('path');

const pathsToDelete = [
    path.join(__dirname, 'allure-report', 'data'),
    path.join(__dirname, 'allure-report', 'history'),
    path.join(__dirname, 'reports', 'allure-results'),
    path.join(__dirname, 'reports', 'cucumber_report.json')
];

function deletePath(pathToDelete) {
    return new Promise((resolve, reject) => {
        fs.rm(pathToDelete, { recursive: true, force: true }, (err) => {
            if (err) {
                return reject(`Error deleting ${pathToDelete}: ${err}`);
            }
            console.log(`Deleted: ${pathToDelete}`);
            resolve();
        });
    });
}

async function cleanup() {
    for (const pathToDelete of pathsToDelete) {
        await deletePath(pathToDelete);
    }
    console.log('Cleanup complete.');
}

cleanup().catch(err => console.error(err));
