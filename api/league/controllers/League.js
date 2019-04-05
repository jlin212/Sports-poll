'use strict';

/**
 * League.js controller
 *
 * @description: A set of functions called "actions" for managing `League`.
 */

module.exports = {

  /**
   * Retrieve league records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.league.search(ctx.query);
    } else {
      return strapi.services.league.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a league record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.league.fetch(ctx.params);
  },

  /**
   * Count league records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.league.count(ctx.query);
  },

  /**
   * Create a/an league record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.league.add(ctx.request.body);
  },

  /**
   * Update a/an league record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.league.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an league record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.league.remove(ctx.params);
  }
};
