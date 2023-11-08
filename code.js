function fibonacci(n, prev = 1, twoBack = 0, count = 1) 
{
    //console.log(count + ", " + (prev+twoBack))
    if(n == 0)
    {
        return 0
    }
    if(count == n)
        return prev
    
    return fibonacci(n, prev+twoBack, prev, count+1)
}

//console.log(fibonacci(5))