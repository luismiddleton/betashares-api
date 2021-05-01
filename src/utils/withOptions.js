const defaults = {
  noheaders: true
};

const withOptions = opts => Object.assign({ ...opts }, defaults);

module.exports = withOptions;
