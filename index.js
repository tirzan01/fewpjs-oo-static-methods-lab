class Formatter {
  //add static methods here

  static capitalize (string){
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize (string){
    let arrayTosanitize = string.split(' ')    
    return arrayTosanitize.map(word => word.replace(/[^A-Za-z0-9-']+/g, '')).join(' ')
  }

  static titleize (string){
    let wordToCapitalize = string.split(' ')
    const exeptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by',  'from']
    let titleizeWords = []
    for (let i = 0; i < wordToCapitalize.length; i++) {
      if(i === 0){
        titleizeWords.push(wordToCapitalize[i][0].toUpperCase() + wordToCapitalize[i].slice(1))
      }else if(!exeptions.includes((wordToCapitalize[i]))){
        titleizeWords.push(wordToCapitalize[i][0].toUpperCase() + wordToCapitalize[i].slice(1))
      }else{
        titleizeWords.push(wordToCapitalize[i])
      }
    }
    return titleizeWords.join(' ')
      
    
  }
}
