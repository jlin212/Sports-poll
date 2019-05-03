'use strict';

/**
 * Command.js controller
 *
 * @description: A set of functions called "actions" for managing `Command`.
 */

module.exports = {

  /**
   * Retrieve command records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.command.search(ctx.query);
    } else {
      return strapi.services.command.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a command record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.command.fetch(ctx.params);
  },

  /**
   * Count command records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.command.count(ctx.query);
  },

  /**
   * Create a/an command record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.command.add(ctx.request.body);
  },

  /**
   * Update a/an command record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.command.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an command record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.command.remove(ctx.params);
  }
};
