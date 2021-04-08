'use strict';

const project = require('./project');

class tafSuiteQLProject extends project {
  constructor() {
    super();
  }

  async createTAFSuiteQL(options) {
    super.create(option);
    this.createRecords(options);
  }

  async createRecords(options) {
    const filename = 'str_localized_reports.json';
    const opts = {
      srcFile: 'suiteql/' + filename,
      filename: filename,
      folder: options.srcPath + 'records/',
      replaceContents: [
        [/UUID/g, options.uuid],
        [/COUNTRY/g, options.country],
        [/PROJECT/g, options.project]
      ]
    };
    await this.createFileFromTemplate(opts);
  }

  async createScriptFile(options, filename, folder) {
    const opts = {
      srcFile: 'suiteql/' + filename,
      filename: filename,
      folder: options.srcPath + folder,
      replaceContents: []
    };
    await super.createFileFromTemplate(opts);
  }
}
module.exports = tafSuiteQLProject;
