'use strict'

const BaseJsonService = require('../core/base-service/base-json')

class GoodService extends BaseJsonService {
  static get category() {
    return 'build'
  }
}

module.exports = GoodService
