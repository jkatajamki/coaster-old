const extendDefaultFields = (defaults, session) => ({
  data: defaults.data,
  expires: defaults.expires,
  userId: session.userId,
});

export {
  extendDefaultFields,
};
