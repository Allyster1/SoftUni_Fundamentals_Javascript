function isPalindrome(array){
    for (let element of array) {
        let stringElement = element.toString()
        let reversedElement = stringElement.split("").reverse().join("")

        if(stringElement === reversedElement){
            console.log(true);
        }
        else {
            console.log(false);
            
        }
    }
}

isPalindrome([123,323,421,121])