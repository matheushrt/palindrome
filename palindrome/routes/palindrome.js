const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  const str = req.query.string;

  const isPalindrome = (string) => string === string.split('').reverse().join('') ? true : false;

  const spaceRemovalFromEdges = (string) => string.trim();
  const spaceRemovalFromWithin = (string) => string.replace(' ', '');
  const toLocaleLowerCase = (string) => string.toLocaleLowerCase();
  const wordDividerRemoval = (string) => string.replace(/-|_|\//ig, '');
  const punctuationRemoval = (string) => string.replace(/[^\w]/ig, '');

  const clearedStr = spaceRemovalFromEdges(spaceRemovalFromWithin(toLocaleLowerCase(wordDividerRemoval(punctuationRemoval(str)))));

  const result = isPalindrome(clearedStr);
  const response = ({ isPalindrome: result });

  result ? res.status(200).json(response) : res.status(400).json(response);
});

module.exports = router;
