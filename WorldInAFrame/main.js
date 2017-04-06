const array =  ['Hello','World','in','a','frame']

const framing = (arr) => {
  arr.forEach((item, index) => {
    document.getElementById(index.toString()).appendChild(document.createTextNode(item))
  })
}

framing(array)
