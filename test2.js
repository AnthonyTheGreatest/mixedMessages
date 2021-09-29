  
  const collectiveWisdom = {
    signInfo: ['star', 'moon', 'sun', 'comet'],
    fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    advice: ['go out and eat', 'not read this', 'play more', 'trust no one']
  }
  
  let personalWisdom = []
  
  for(let prop in collectiveWisdom) {
    switch(prop) {
      case 'signInfo':
        personalWisdom.push(1)
        break
      case 'fortuneOutput':
        personalWisdom.push(2)
        break
      case 'advice':
        personalWisdom.push(3)
        break
      default:
        personalWisdom.push('There is not enough info.')
    }
  }
  
/*
  function formatWisdom(wisdom) {
    // Add some ASCII here?
    // Add in more symbols to the array? like emojies or what not?
    const formatted = personalWisdom.join('\n')
    console.log(formatted)
  }
  
  formatWisdom(personalWisdom);
*/

console.log(personalWisdom);