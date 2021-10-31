var express = require('express');
var router = express.Router();
var fg = require("fast-glob")

/* GET articles. */
router.get('/', function (req, res, next) {
  const files = fg.sync(["*.md", "*.mdx"], { cwd: "../articles" });
  const urls = files.map(file => {
    // return req.protocol + '://' + req.get('host') + req.originalUrl + file
    return file;
  });
  res.send(urls);
});

module.exports = router;
