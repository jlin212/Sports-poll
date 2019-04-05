'use strict';

/**
 * Poll.js controller
 *
 * @description: A set of functions called "actions" for managing `Poll`.
 */

module.exports = {

  /**
   * Retrieve poll records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.poll.search(ctx.query);
    } else {
      return strapi.services.poll.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a poll record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.poll.fetch(ctx.params);
  },

  /**
   * Count poll records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.poll.count(ctx.query);
  },

  /**
   * Create a/an poll record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.poll.add(ctx.request.body);
  },

  /**
   * Update a/an poll record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.poll.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an poll record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.poll.remove(ctx.params);
  }
};
