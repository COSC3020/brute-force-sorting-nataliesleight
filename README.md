# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

The runtime complexity of my code is $O(2n*n!)$. 

I solved for it by analyzing each function. In my permutations function, it recursively calls itself in a for loop that decrements the input size for each loop, giving it an n! runtime (as it is n * (n-1) * (n-2)...). Once the if statement is triggered, the function calls on function isSorted to check if it is sorted. It does this by looping through the whole array, adding an n to our total. If it is sorted then a for loop that runs n times is used, adding another n before returning. Thus the permutations function has a runtime of 2n * n!. After permutations has been called in the main permutationSort funcion, another for loop is hit. This loop runs n times and then the end of the function is reached. Thus the runtime for this program is $2n * n!+n. The bound is big O because it is a "worst case" where every loop runs the maximum amount of times and thus an upper bound. 

A best case input would be an already sorted function. This would have a run time of 4n. It would run n times in permutations so that idx=arr.length, n times in isSorted, n times in the for loop after, and another n times outside of the permutations function in a for loop.

The worst case input would be a reverse sorted function. Its run time would be the $2n*n!+n$ that we solved for.

If the algorithm randomly generated permutations, it would become impossible to predict the runtime complexity. There is no guarantee that the correct permutation would even be generated. However, if very lucky, it could be possible to even generate the correct permutation first try. 

Sources: I received help from Lars Kothoff. 

“I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.” - Natalie Sleight
