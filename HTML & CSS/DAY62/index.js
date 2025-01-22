// Buisness namee generator by combining list of asdjectives and shop name and another word 
/*
    Adjectives :
    Crazy
    Amazing 
    Fire

    Shop Name:
    Engine
    Foods
    Garments

    Another word:

    Bros
    Limited 
    Hub
*/




function generateBusinessName() {
    const adjectives = 'Crazy Amazing Fire';
    const shopNames = 'Engine Foods Garments';
    const otherWords = 'Bros Limited Hub';
  
    const adjectiveList = adjectives.split(' ');
    const shopNameList = shopNames.split(' ');
    const otherWordList = otherWords.split(' ');
  
    const randomAdjective = adjectiveList[Math.floor(Math.random() * adjectiveList.length)];
    const randomShopName = shopNameList[Math.floor(Math.random() * shopNameList.length)];
    const randomOtherWord = otherWordList[Math.floor(Math.random() * otherWordList.length)];
  
    return randomAdjective + randomShopName + randomOtherWord;
  }
  
  console.log(generateBusinessName());