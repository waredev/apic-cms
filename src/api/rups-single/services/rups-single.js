'use strict';

/**
 * rups-single service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rups-single.rups-single');
