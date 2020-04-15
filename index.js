module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function () {
     return Array.from(this).reverse().join("");
}
String.prototype.blank = function () {
     if (this.match(/^$/g)) {
          return true;
     }
     if (this.match(/^\s+$/g)) {
          return true;
     }
     return false;
}
Array.prototype.last = function () {
     return this.slice(-1);
}

function Phrase(content) {
     this.content = content;

     this.processor = function (string) {
          return string.toLowerCase();
     }
     // Returs lower case
     this.processedContent = function processedContent() {
          return this.processor(this.content);
     }

     this.louder = function () {
          return this.content.toUpperCase();
     }

     this.palindrome = function palindrome() {
          return this.processedContent() === this.processedContent().reverse();
     }
}

// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
     this.content = content;
     this.translation = translation;

     this.processedContent = function processedContent() {
          //return this.translation.toLowerCase();
          return this.processor(this.translation);
     }
}

TranslatedPhrase.prototype = new Phrase();