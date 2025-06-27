'use strict';

/**
 * insect service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::insect.insect');
