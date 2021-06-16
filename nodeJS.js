// Write a function which, taking in a positive integer n as input, returns an array of all primes lower than
// n.
// sample expected output:
// getPrimes(5); ⇒ array(2, 3)
// getPrimes(10); ⇒ array(2, 3, 5, 7)

function getPrimes(n) {
  if(n <= 2) return []

	let primeNum = [2] //prime number array, starting with 2
	let candidate = 3 //candidate to be tested

  //Loop until candidate to be tested reach n number
	while(candidate < n){
    let max = Math.sqrt(candidate) 
		//check the next num whether it is a prime number,
		//by checking whether it is diviseable by primeNum array 
		for(let m = 0; m < primeNum.length; m++){
			let tester = primeNum[m]
      
      //if the mods is 0, move on to the next candidate number
			if(candidate % tester == 0) break 

      //https://proofwiki.org/wiki/Composite_Number_has_Prime_Factor_not_Greater_Than_its_Square_Root
      //if the tester value is more than the square root of the candidate,			
			if(tester > max){ 
				primeNum.push(candidate); //add that candidate to primeNum array because that number is a prime
				break  //move on to the next candidate number
			}
		} 
	  candidate += 2 //increment of 2 because all even number aside 2 is not a prime
	}
  return primeNum
}

console.log(getPrimes(5))
console.log(getPrimes(10))
console.log(getPrimes(100))