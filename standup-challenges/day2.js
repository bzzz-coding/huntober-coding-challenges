/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet
*/

function trimUrl(url){
  let arr = url.replace('www.', '').split('.')[0].split('//')
  // return arr.length > 1 ? arr[1] : arr[0]
  return arr[arr.length - 1]
}

function domainName(url){
  return url.replace('www.', '').split('.')[0].split('//').slice(-1)
}


