function fibonacci(n, prev = 1, twoBack = 0, count = 0) 
{
    //console.log(count + ", " + (prev+twoBack))
    if(count == n)
        return prev
    
    return fibonacci(n, prev+twoBack, prev, count+1)
}

//console.log(fibonacci(1000))