/**
  * Remove OSX apps - removes unwanted default OSX apps
  * @license MIT
  * @author jh3y
*/
const options = {
  name: 'remove macos apps',
  description: 'removes unwanted default macos apps',
  exec: function(resolve, reject, shell, log, config) {
    const space = new RegExp(' ', 'g');
    const apps = config.macosAppsToRemove;
    if (apps && apps.length > 0) {
      for (const app of apps) {
        const sanitizedApp = app.replace(space, '\\ ');
        shell.exec(`sudo rm -rf /Applications/${sanitizedApp}`);
        log.info(`${sanitizedApp} removed from system`);
      }
      log.success('default macos applications removed');
    } else
      log.info('no apps to remove');
    resolve();
  }
};

exports.options = options;
