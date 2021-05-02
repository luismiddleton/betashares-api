const defaults = {
  noheaders: true
};

export const withOptions = opts => Object.assign({ ...opts }, defaults);
