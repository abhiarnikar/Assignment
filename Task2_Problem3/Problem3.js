// Find the longest palindrome from the given string

let calculateLPS =function(str){
    const n= str.length
   
    let dp = Array(n).fill(0).map(()=>Array(n).fill(0));

    for(let i=0;i<n;i++) dp[i][i]=1
    
    for(let c=2;c<=n;c++){
        for(let i=0;i<n-c+1;i++){
           
            a=i+c-1
           if(str[i]===str[a]){
              
            dp[i][a]= 2+dp[i+1][a-1];
            }
            else {
                dp[i][a] = Math.max(dp[i+1][a], dp[i][a-1])
            }
        }
    }
    return dp[0][n-1]
   
}

console.log('length of LPS is '+ calculateLPS('madam'))
console.log('length of LPS is '+ calculateLPS('babad'))
console.log('length of LPS is '+ calculateLPS('redivider'))
console.log('length of LPS is '+ calculateLPS('fhbcdjamadamproeu'))






