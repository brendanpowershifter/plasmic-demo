
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['imt14t3PvaASwxmg4fwYY3'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  