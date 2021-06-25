module.exports = {
  plugins: {
    navigation: {
      additionalFields: ['audience'],
      allowedLevels: 2,
      contentTypesNameFields: {
        'blog_posts': ['altTitle'],
        'pages': ['title'],
      },
    },
  },
}