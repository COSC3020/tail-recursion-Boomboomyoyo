[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12760251&assignment_repo_type=AssignmentRepo)
# Tail Recursion

In the lectures, we've seen code for a recursive implementation for computing
the Fibonacci numbers. Make this implementation tail-recursive. I have not
provided a template; depending on how you choose to implement the function, it
will have a different signature. I have also not provided any test code, but you
can base yours on test code from other exercises.

Hint: It may help to have a look at the iterative dynamic programming
implementation. What changes between iterations of the loop?

## Runtime Analysis

Is the asymptotic complexity of tail-recursive Fibonacci different from the
non-tail-recursive version? Why, or why not? Add your answer, including your
reasoning, to this markdown file.


# Response

The asymptotic complexity of tail-recursive Fibonacci isn't different.

The asymptotic complexity of non-tail recursive can be expressed by the following:
$T(n) = T(n-1) + T(n-2)$
$= 2T(n-2) + T(n-3)$
$= 3T(n-3)+2T(n-4)$
$= 5T(n-4)+3T(n-5)$
Interestingly enough, this actually follows the size of the Fibonacci Sequence itself. Since each iteration of the Fibonnaci sequence calls itself twice, therefore scaling at $2^n$. However, a smarter implementation using memoization like I did for the Fibonnaci Invariants exercise avoids this problem, as it simply passes one array between its recursions and builds a list of Fibonnaci elements that it can simply grab from, making it a linear complexity as it isn't redoing any calculations.

The way I have implemented it here is also linear in time complexity, as it saves the past two elements in the sequence and calculates forward to the desired number. However, this has the advantage of also being in-place, as it only fetches the single element of the sequence that is required instead of all elements up to that.