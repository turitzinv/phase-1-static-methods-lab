class Formatter {
  //add static methods here
  static capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }
  static sanitize(word) {
    return word.replace(/[^a-zA-Z0-9\s'-]/gi, "")
  }
  static titleize(word) {
    let array = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let sentence = word.split(' ').map(s => {
      if (!array.includes(s)) {
        return Formatter.capitalize(s)
      } else {
        return s
      }
    }).join(' ')
    return Formatter.capitalize(sentence)
  }
}