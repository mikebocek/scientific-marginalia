How to think about math 
#######################

:date: 2024-11-23 12:00
:modified: 2024-11-23 12:00
:tags: math
:category: math
:slug: math-intro
:authors: Michael Bocek
:summary: How to think about math

Oh no - math
============

I think most of us have a rocky relationship with math at best (myself included). For most people I think this probably started with our experiences in elementary and middle school - where math is a mix of memorization (i.e. knowing that 6 times 7 is 42), and manually doing things with pen and paper that a computer can do better (long dividing 6336 by 72). None of this is exactly riveting (especially when you're 10), and worse, there's nothing you can really build off of. Knowing that :math:`6336/72 = 88` doesn't help you solve any other problems (unless your next problem is :math:`72 * 88`).

The situation doesn't really improve much in middle school and high school. There, we move from algorithms that manipulate numbers directly to rules for moving symbols around in equations. So we get to solve such riveting problems as showing that you can re-write :math:`(x + 1)^3 = 3x^2 + 3x - 18 ` as `x^3 - 19 = 0`. If you're feeling really crazy, maybe you get to solve this to show that x is the cube root of 19. But this again isn't exactly exciting - and in fact it's still work that computers are quite a bit better at than we are.

The problem of course is that these are important skills - and not necessarily easy ones to pick up. 

One of the toughest things is to get used to the idea that higher level math is about *abstraction* most of the time - meaning that we're trying to create less (not more) work for ourselves by recognizing patterns, and building tools for ourselves. 

An example
==========

A nice place to start undertanding the power of abstraction is to start with one of the simplest non-trivial [#]_ examples of a pattern in numbers that I can think of. Let's start with two definitions that you're probably familiar with. An *odd number* is a number that can't be evenly divided by two (i.e. 1, 3, 5, 7), and a *perfect square* is a number that can be re-written as a whole number times itself (i.e. 4 = 2*2, 9 = 3*3, 16 = 4*4, etc.). Here's an intersting pattern 

    - 1 + 3 = 4 
    - 1 + 3 + 5 = 9
    - 1 + 3 + 5 + 7 = 16

Based on the first few numbers, it looks an awful lot like if we sum up odd numbers together, we end up getting perfect squares. The first step is to try to take this pattern, and to try to get it phrased a little more exactly. Notice that the first relationship is the first two odd numbers, and we get the square of two. The second relationship is the sum of the first three odd numbers, and we get the square of three. So generalizing this, we could guess that 

    The sum of the first N odd numbers is equal to N squared.

Of course, in math, we generally like to write things in shorthand using equations, rather than writing out our statements in English. Let's express this same statement as an equation - the shorthand for summing up is a captial sigma (:math:`\Sigma`). 

Of course, like scientists, mathemticians want to sound smart. So instead of "guess," they like to say "conjecture." Let's see if we can turn this "conjecture" into an actual fact. It might seem like we could just continue to list numbers here, and that would work "up to" a certain number. But this isn't very satifsying - there's a lot of mathematical statments you could make that seem to be true for a lot of numbers, but suddenly fall apart at some point. After all, if we claimed 

    `All numbers are less than one million`

This is obviously not a true statement, but we'd be stuck counting for a long time before we found a number that could disprove our claim. 

Our first proof
===============

Let's sketch a proof out - we'll use a technique that mathemiticians call *induction*. To do this, we have to prove two things 

    1. The statment is true for some number 
    2. If the statement is true for a number, it's also true for the next number.

The first statment is often called the "base case," while the second statment is called the "inductive case." Usually the base case is easy - in our case, we'll start with the first odd number, one. The sum of all odd numbers up to one is ... one. And the square of one is 1 * 1 which is equal to - also one! So our proof of the base case boils down to 

:math:` 1 = 1 * 1 = 1`

Not a very intereting statment. But it's critical to make sure it's true - people often compare induction to a staircase, where we have to have a place to stand before we can move up to the next stair. Our second step requires us to show that if we've got a square number that is the sum of all existing odd numbers, we can get another square number by adding another odd number. We'll do this with a little algebra. If we have a perfet square N ^ 2, the next perfect square will be (N + 1)^2. Breaking this next number down we get  

:math:`(n + 1)^2 = (n + 1) * (n + 1) = (n^2 + n + n + 1) = (n^2 + 2n + 1) = (n ^ 2) + (2n + 1)`

So the next square number is always going to be 2n + 1 larger than the existing perfect square, which is exactly the next odd number in our series. Using induction, we have shown that as we continue to add odd numbers together, we will continue to produce perfect squares.

This is technically a proof - but in a lot of ways it's unsatisfying. We've shown the fact that we set out to show, but it doesn't feel really like we've understood *why* this has to be true. 

A better proof
==============

Let's turn to a proof that doesn't require any words at all. We'll continue to use an "inductive approach," but instead of using algebra, we'll draw some pictures. The base case is easy - a single square: 

Let's go one step further - if we want to create the next perfect square, we have to add 3 "squares" to the drawing - one on top of our original square, one to the right, and then one on the corner: 

For the next square, we'll add 5 squares - two on top, two to the right, and one on the corner: 

So we can abstract this logic a little: for a square with a side length of N, we'll need to add N squares on top, N squares to the right, and then one square in the corner. 

This makes 2N + 1, which is the next odd number in the series, which completes the proof as above. 

Is this proof better? I think unambiguously yes. We can visually see a pattern here - in a way, we've taken a fact that seemed maybe a little surprising, and shown that it is actually inevitable. Even though both of these proofs technically get us to the same fact, the second one shows us *why* rather than just providing a way to show that it must be true. 


How to go further
=================

So we've shown that the sum of the first N odd numbers is the square of N. That's not a generally useful fact - although (spoiler alert) we will see this come up later when we discuss the total number of quantum-mechanical orbitals in a hydrogen atom. Let's see if we can take this fact a little further, and figure out what the sum of *every number* up to a certain number is. Basicaly we're trying to generalize the sum

    - 1 = 1
    - 1 + 2 = 3
    - 1 + 2 + 3 = 6
    - ...

These numbers are called the *triangular numbers*, since 

We already know that the sum of the first N odd numbers is N ^ 2. This leaves us to calculate the sum of the first N even numbers. Are we back to square one? Of course not! Let's think about it - the first few odd numbers are 

    - 1, 3, 5, 7, 9 

And the first few even numbers are 

    - 2, 4, 6, 8, 10

So the even numbers are just one larger than the odd numbers. Meaning that if we add the first N even numbers, it's the same as the first N odd numbers, but with one added to each number. Now if we have to add one to a number N times, that's just :math`N * 1`, which is obviously just N. So the sum of the first N odd numbers, and the first N even numbers, is just 

:math:`N ^2 + N ^ 2 + 1 = 2N^2 + N`

Are we done? Not quite - let's think about it. We're actually double-counting here - we've phrased the problem as the sum of the "first N odd numbers and the first N even numbers." But really what we'd like is the sum of all of the numbers up to a certain number - not the combination of odd and even numbers. To fix this, all we need to do is divide our number by two. So the sum of all numbers up to a certain number is 

:math:`\frac{N^2 + N}{2}`

What we've done here is taken a result, and then extended it to show something a little more powerful. In math terms, our first result (the sum of all odd numbers) is often called a "lemma", meaning an intermediate statment that we'll rely on to prove something stronger. Our final result (the sum of all the numbers up to N) we'll call a "*theorem*".

A child's proof
===============

Here's a story that is often told to be true [#]_, but has a distinct "and then everyone clapped" sort of ring to it. In the 1780's, there was a German schoolteacher now known only by the very German last name of Büttner who was famously mean. When he wanted to punish his students, he would make them use a small piece of chalkboard to add up all of the numbers from one to one-hundred - a tedious task for the poor primary school students who don't know the trick that we've just discovered. 

Of course, like any mean teacher, this man was about to meet his match. In his case, the match is an actual historical figure, the (then) seven-year-old mathemtician Karl Friedrich Gauss. Instead of struggling for hours with the problem, Gauss is reported to have came up with the correct number within seconds. The teacher, assuming that he must have cheated, asked Gauss to explain his solution. Gauss said that he noticed this pattern: instead of adding the numbers, he noticed that they formed pairs that all added to the same number 

    - 1 + 100 = 101
    - 2 + 99 = 101
    - 3 + 98 = 101

And so on and so forth until we reach the mid-point 

    - 50 + 51 = 101

So all we really have to do in the end is multiply 101 (the sum of the first and last numbers) by 50 (the number of pairs of additions), and we get our answer. If we follow this pattern to its logical conclusion the sum of all numbers between one and N can be re-written as 

:math:`\frac{N}{2}{N + 1}`

Which you'll recognize as the same equation from above. Again, we've found yet another way to get to the same result - but (to me at least) this is a more *satisfying* proof. It seems to not only show that our statement is correct, but provide some sort of explanation for *why* it's correct. 

Why don't we always prove things intuitively? 
==============================================

Based on these examples, you'd probably prefer the "intuitive" argument in both cases - and I would too! These sorts of arguments feel like neat sorts of puzzles - and for pure mathemiticians, this sort of puzzle-solving is hugely motivating. It's amazing that we can come up with arguments that are equally rigorous, while providing us with some additional insight into the problem itself.

Of course, these sorts of intuitive proofs also have their limitations. Say we wanted to figure out what sorts of numbers generate perfect cubes (i.e. numbers that can be written as N * N * N). Of course, it's pretty straightforward to extend this argument to a cube - instead of filling out the sides and the corners, we would instead be filling out the sides of the cube, the edges of the cube, and the remaining corner piece. 

The problem would come if we wanted to extend a similar argument to numbers that are "perfect fourth powers" (i.e. N * N * N * N) In general, we don't see these sorts of numbers come up as often, which is partially shown in that there's no catchy name for them. Here we start to run into a problem for this "geometric/intutive" approach to a proof - we can pretty easily visualize squares and cubes, but I think most of us have a much harder time grappling with 4-dimensional shapes. The problem just gets worse as we climb to higher and higher dimensions - although in some ways, it's not really any harder to visualize 73 dimension than it is 5 dimensions. In both cases, it's so far removed from our experience that we just don't really have the tools to grapple with it. 

Because of this, there's a lot of power in our ability to use math to reason about things totally abstractly. We can always write down the algrebraic expression for the difference between adjacent numbers 

:math:`(n + 1)^4 - (n)^4`

And through (increasingly) tedious work solve out the answers. Although it's definitely not as much fun, having these sorts of tools in our toolbox is incredibly useful for the sorts of places where our human intuition breaks down. We can't really hope to grapple with spaces with more than three dimensions, infinitely small (or large) quantities, or sums with infinite numbers of terms. But we'll see all of these things come up repeatedly in physics, so it's important to always have a firmer ground that we can fall back on when our intuition doesn't work. 

How we'll deal with math in these posts
=======================================

In writing these posts, I want to try to strike a balance. It's difficult (or impossible in a lot of cases) to really understand the spirit of what scientists are doing without being able to grapple with at least some of the math. And honestly some of the math that we'll see is genuinely cool - even by the standards of someone that doesn't really care about math. 

.. [#] Mathematicians use "trivial" as a sort of pejorative term for things that *they* think are obvious 
.. [#] The actual truth of this story is apparently a little shakier than I thought - see `this article <https://www.americanscientist.org/article/gausss-day-of-reckoning#:~:text=The%20teacher's%20aim%20was%20to,candidates%20for%20greatest%20mathematician%20ever.>` for a nice overview on the actual historicity of the story. 
