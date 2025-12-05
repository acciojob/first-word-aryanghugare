function firstWord(s) {
  // your code here
  s =s.trim();
  let ans = ""
  for(let i = 0 ; i < s.length ; i++){
      if(s[i]==" ") return ans ;
      ans+=s[i];
      
  }
  
  return ans ; 
}  

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
