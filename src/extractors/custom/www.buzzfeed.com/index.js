// Rename CustomExtractor
// to fit your publication
// (e.g., NYTimesExtractor)
export const BuzzfeedExtractor = {
  domain: 'www.buzzfeed.com',
  title: {
    selectors: [
      'h1[id="post-title"]',
      // enter title selectors
    ],
  },

  author: {
    selectors: [
      'a[data-action="user/username"]', 'byline__author',
      // enter author selectors
    ],
  },

  content: {
    selectors: [
      '#buzz_sub_buzz', '.bf_dom', 'div[rel:gt_cat="[ttp]:content"]',

      // enter content selectors
    ],

    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: [
    ],

    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [

    ],
  },

  date_published: {
    selectors: [
      '.buzz-datetime',
      // enter author selectors
    ],
  },

  lead_image_url: {
    selectors: [
      ['meta[name="og:image"]', 'value'],
    ],
  },

  dek: {
    selectors: [
      ['meta[name="description"]', 'value'],
    ],
  },

  next_page_url: null,

  excerpt: null,
};