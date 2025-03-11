Re-learning the numbers
#######################

:date: 2025-02-16 12:00
:modified: 2025-02-16 12:00
:tags: math
:category: math
:slug: relearning-numbers
:authors: Michael Bocek
:summary: Re-introduction to numbers

=================
Learning to count
=================

    The above proposition is occasionally useful ... 

    -- `Russell and Whitehead <https://en.wikipedia.org/wiki/Principia_Mathematica>`_, on the equation 1 + 1 = 2

In a lot of posts on this blog, we'll have to learn new (or at least "higher-level" math). But I think one thing that makes it a lot more difficult than necessary to learn this math is that we both are trying to learn new concepts, and get used to thinking about math in a more abstract way. What I hope to do here (and on our previous post about math) is to help lay some groundwork to make it easier to get used to some of the more abstract/challenging concepts that we'll deal with later.

So instead of introducing something new, what I'm hoping to do here is to re-contextualize something we've already all learned - basic arithmetic. Up until the end of high school, you've usually only met mathematical objects that are either numbers, or functions that operate on numbers. Before we introduce any other objects, I hope to make the numbers unfamiliar so that we'll feel less nervous when we meet our new mathematical friends (like vectors, matrices, complex numbers, and more).

What I'd like to do is get a more formal understanding of the "natural" numbers - the list of numbers :math:`0, 1, 2, 3, \ldots` continuing out forever. These are obviously "simple", in the sense that we learn basically all of the rules for doing math with them by about the third grade. But their simplicity makes them a great foundation to build off of as we learn more math, and in spite of their simplicity the natural numbers are useful for modeling a huge number of situations. Essentially any time we have a collection of objects (apples, bricks, stars, atoms) - the whole numbers are the tool that we'll reach for to describe them.

============
How to count
============

As a kid, I remember my grandpa telling me that advanced mathematics involved being able to explain *why* :math:`1 + 1 = 2`. This was one of those things that troubled me for years as a kid, since the idea even that you would have to prove that :math:`1 + 1 = 2` seemed like having to prove that water is wet. In this section, we'll develop (at a high level) some of the things that we'll need to actually prove simple facts like this about the whole numbers. We'll start by re-learning how to count - something that we're hopefully all pretty familiar with at this point.

Ultimately the simplest operation we can do with numbers (and not surprisingly the first one we learn as children) is how to list out the numbers in order - to count them. The way that most mathematicians like to formalize this is as a two-part definition 

1. We start counting at 0 [#]_
2. Given a number (including zero), we always have a way of getting the next number 

This description of the problem should ring some alarm bells in your head - the idea of getting a "next" element is usually a fertile ground for using induction. This is exactly how mathematicians usually define the counting numbers. If you remember, induction has two parts 

1. A starting point of 0 (the base case)
2. A way of getting a "next" element (the inductive step)

The usual way that mathematicians notate the "next" element is to use what's called a "successor operator", usually written as S. So :math:`S(0)` represents the next element after :math:`0` (i.e. :math:`1`), :math:`S(S(0))` is the next element after the next element after :math:`0` (:math:`2`), etc. We'll also need the concept of "equality," since without that it's not possible to make any really interesting statements about the numbers. With the general framework in place, let's dive into some of the details: 

The Peano Axioms 
================

This formal system is called Peano arithmetic after the italian Mathematician Giusseppi Peano. He came up with a set of 9 simple rules and assumptions (in fancy math language, *axioms*) that we can use to formalize the idea of counting. If you've never seen a list of axioms before, it's important to understand that while the list of ideas might *seem* obvious, it's actually incredibly tricky to boil down something even deeply familiar (like counting) into a list of rules. 

While I usually wouldn't do this deep of a dive, I think it's sort of fun to actually break down the axioms for the natural numbers. They're simple enough to understand, and it's a chance to really look under the hood at the way that modern mathematics works. 

The first axiom is familiar based on our description of the system above 

1. Axiom 1 defines the existence of 0 as a natural number - this gives us our starting point for induction

Axioms dealing with equality
----------------------------

Axioms 2, 3, 4, and 5 define the idea of equality between two numbers - so that we have the ability to start making comparisons between different expressions. We'll state these ideas using the same sort of language that you see in algebra classes - equality with the equals sign (=), and distinct natural numbers with the variables x, y and z. 

One more piece of notation that we'll use - a common way to refer to the whole set of natural numbers is to abbreviate it as :math:`\mathbb{N}` [#]_. To say that something is a natural number, we can use another symbol :math:`\in`, which means "is a part of the set" and is frequently read out loud as "in". So the English statement "x is a natural number" is identical to the mathematical statement :math:`X \in \mathbb{N}`. We can specify multiple numbers are natural numbers like this - :math:`(X, Y) \in \mathbb{N}` [#]_.

2. For :math:`X \in \mathbb{N}`, :math:`X = X` - meaning X always equals itself (in mathematical language, equality is *reflexive*)
3. For :math:`(X, Y) \in \mathbb{N}` if :math:`X = Y` then :math:`Y = X` (equality is *symmetric*)
4. For three natural numbers :math:`(X, Y, Z) \in \mathbb{N}`, if :math:`X = Z` and :math:`Y = Z`, then :math:`X = Y` (equality is *transitive*)
5. If x is a natural number (:math:`X \in \mathbb{N}`) and :math:`X = Y`, then Y is a natural number (:math:`Y \in \mathbb{N}`) (closure of equality)

Axiom 5 is a little weird - it defines a property that mathematicians call *closure*, which means that we can't "escape" the natural numbers through equality. For some of these, the easiest way to understand why they're important is to see a counter-example. In a lot of programming languages, the natural numbers are modeled differently than numbers with decimals, so we think of 2 and 2.0 as distinct things. But these languages also define equality so that 2 = 2.0, even though 2 is *not the same* as 2.0 . For our system, this would be a problem - we don't want to be able to end up in some other number system just by trying to say that two things are equal. We'll see *closure* over and over when we work in formal mathematics - without it, we're not able to prove much of anything.

Axioms dealing with succession
------------------------------

The next 3 axioms deal with the successor operator (:math:`S`) - remember this is our way of getting the "next" natural number in a list of numbers. One way to think about these axioms is that they plug holes in our current concept of the idea of a successor. To start, we know the numbers are never-ending, but we haven't really *defined* that - at the moment, we'd be fine with a system where 10 is the largest possible number. Maybe even worse, we could have a system where 11 doesn't exist, and instead 10 jumps straight to some random new "thing" (let's call it :math:`\mathfrak{Brian}`) that's not a number at all. We can prevent that with a statement like this that defines *closure* again, but this time for the successor function: 

6. If :math:`X \in \mathbb{N}`, than :math:`S(X) \in \mathbb{N}` (No escape and no stop)

Sorry :math:`\mathfrak{Brian}` - not your day! 

Here's another problem that I certainly wouldn't think of right away - what if the natural numbers "branched" at some point? Say when we got to 11, we suddenly split into :math:`11` and :math:`11_{EVIL\_TWIN}` - and from that point onwards had to worry about handling the "evil twin" numbers which are basically the same, but evil and we have to write them differently. We can solve this with something like axiom 7 

7. For :math:`(X, Y) \in \mathbb{N}`, if :math:`S(X) = S(Y)` then :math:`X = Y` (No branching)

You might wonder why we didn't phrase this the other way - and instead say that if :math:`X = Y` then :math:`S(X) = S(Y)`, but this still doesn't explicitly forbid the existence of branches - it just says that any branching has to still be equal. This sort of distinction is really important to mathematicians, and it's why (like plumbing or electric), you hire a professional for these things. There's some other counter-examples handled by this one as well (i.e. a system where a number is its own successor, so that we count :math:`0, 1, 2, 3, 4, 4, 4, \ldots`)

One more successor axiom - and this one is sort of fun. Technically, we still have one way to break the natural numbers and make sure that they don't continue on to infinity. It's sneaky, but we could make the successor to some number (let's say 5) be 0. So we'd end up counting :math:`0, 1, 2, 3, 4, 5, 0, 1, 2, 3, \ldots` just looping around forever and ever. This is as it turns out a totally valid mathematical system - people will sometimes call it "clock" arithmetic after the idea that a 12-hour clock "loops back" to 1 after 12, but usually in math it's called *modular arithmetic*. While this might be a useful model for some situations, it's just not the way that the natural numbers work. We need a new rule: 

8. For all :math:`X \in \mathbb{N}`, S(X) is not 0. (No loops)

As an aside - this sort of thinking is often really productive in math. Axioms set up the specific formal system that we're working with - but that doesn't mean that there's other interesting formal systems that you could create with a slightly different set of axioms.

The induction axiom 
-------------------

There's one last axiom that we'll need - and it's probably the most difficult to state. Basically, we've come up with a system that can generate things that seem to be the natural numbers in every meaningful way. The issue though is that we don't really have the confidence to say that this system generates *every* natural number - for this, we'll need the assumption that we can use induction. There's two different ways to state this axiom, but most modern formulations will just basically state the idea of induction - essentially that if a property holds for 0, and it holds for the next number in a series, then the property holds for all numbers. In formal language 

9. For any property :math:`P(n)`, if :math:`P(0)` is true, and :math:`P(n)` being true implies :math:`P(n+1)` is also true, then `P` is true for all natural numbers. 

Whew! That was a lot - but now we have the rules we need to learn to count. We're made progress towards the end of pre-school math, more or less 

==========
How to add
==========

Counting gets tedious awfully quickly - so tedious in fact, that if someone asked you to count roughly 100 objects, you'd probably start by arranging them into small groups (let's say groups of 10), as you count so that you don't lose track. What you're doing here is to try to simplify the process by removing some of the repetition. If you lost track, you could *add up* the groups of 10 that you already had, and then keep going from the place where you left off.

Addition is repeated counting
=============================

This gets at a key insight that we'll return to a couple of times in this article - addition is just a form of *repeated counting*. When we write :math:`4 + 3` out, one way to think about that equation is to say 

    Start at 4, and then count 3 more numbers on from that

This is roughly the way that we learn to add early in life - you might hold up four fingers, and then hold up another 3 to get your total (7), which you could also count. This is the first of a series of times where we'll define a new operation that is essentially a "repeated" version of a simpler one. Let's get a better idea of how to deal with this in the more formal language that we started working with for counting 

Adding in Peano arithmetic
==========================

Let's start by defining what it means to "add" - and essentially give some meaning to the plus sign. The definition that we'll use looks a little funny at first. It comes in two parts 

#. :math:`a + 0 = a`
#. :math:`a + S(b) = S(a + b)`

Seeing this sort of two-part definition should probably ring the "induction" alarm bell in your head again - and you'd be mostly right! It does look an awful lot like a base-case and an inductive step. What's typically done here though is not actually to use *induction*, but it's "backwards" cousin *recursion*. The difference is small but important: induction is like climbing a ladder where we're confident that each step takes us to a new one. *Recursion* is a little like climbing down a ladder where we can't see what's below our feet - unlike induction, there's not necessarily a guarantee that we'll ever necessarily reach the bottom, or that the ladder won't suddenly end in mid-air. [#]_ This uncertainty means that induction alone isn't proof technique, but it is often a convenient way to define things concisely. Let's see how this definition works with addition:

Let's start by adding one to a number (the first rung of our ladder) - we'll justify each of the steps in terms of something we've defined already.

* :math:`a + 1 = a + S(0)` (1 = S(0) by definition)
* :math:`a + 1 = S(a + 0)` (Addition definition - part 2)
* :math:`a + 1 = S(a)` (Addition definition - part 1)

Ok cool - so we've proved that :math:`a + 1 = S(a)`, which agrees with our generation intuition about what the :math:`S` operator does. Now let's try adding 2 to a number 

* :math:`a + 2 = a + S(1)` (2 = S(S(0)) by definition)
* :math:`a + 2 = S(a + 1)` (Definition of addition)
* :math:`a + 2  = S(S(a))` (Proof one - addition by 1)

Notice the pattern - we keep "falling back" to our previous definition of addition. So if we know how to add one to a number, we also know how to add two. Let's prove one more thing 

* :math:`1 + 1 = 2` (Original definition)
* :math:`(0 + 1) + 1 = (0 + 2)` (Using lemma 1)
* :math:`S(0) + 1 = S(S(0))` (Using lemma 2)
* :math:`S(S(0)) = S(S(0))` (Using lemma 1 again)
 

Nice - we've managed to show that these two sides of the equation can be manipulated into showing the exact same thing, meaning that we've now proved that 1 + 1 = 2!

In a real college math course like real analysis, we'd go on to use this definition to prove all sorts of useful things about addition - that :math:`a + b = b + a` (commutativity), or that if :math:`a + b = a + c`, then :math:`b = c`. These all seem like intuitively obvious facts, but we need to prove it to really show that the axiomatic system we've set up behaves the way that we've come to expect from the natural numbers that we've worked with. More to the point, doing these proofs also gives us the framework to handle things we might see in the future that *don't* play by these rules.

Why zero is special
-------------------

One thing that comes out of our definitions is a special property of zero - namely that adding zero to any number leaves it unchanged (in math language, :math:`a + 0 = a`). Mathematicians call this property of leaving things unchanged the *identity*. So zero is the identity element for addition, and as we'll see in the next section, one is the identity element for multiplication. It turns out that the concept of an identity element is incredibly important to defining the *inverse* of these operations. Although we haven't formally defined the negative numbers yet, we know that adding a negative version of a number gets us "back" to zero. Similarly, the fraction :math:`\frac{1}{N}` gets us "back" to one - the identity for multiplication. These examples are easy - but we'll meet other objects (like matrices) where being able to go back to our intuition about addition and multiplication will be useful.

===============
How to multiply
===============

As you've probably already guessed, the standard way to think about multiplication is that it's just repeated addition. This works with our intuition - we can re-write :math:`3 * 5 = 5 + 5 + 5`. Typically we adopt a similar recursive definition to what we used for addition - so 

#. :math:`a * 0 = 0`
#. :math:`a * S(b) = a + (a * b)`

Now we can follow a similar inductive procedure to what we did for addition - so for instance to calculate a * 1, we would do something like 

* :math:`a * 1 = a * S(0)` (1 = S(0) by definition)
* :math:`a * 1 = a + (a * 0)` (Part 2 of our definition of multiplication)
* :math:`a * 1 = a + 0` (Part 1 of our definition of multiplication)
* :math:`a * 1 = a` (Part 1 of the definition of addition)

And so on for 2, 3, 4, etc. Like addition, in a real math class we'd use this definition (along with more induction) to prove some useful facts about multiplication. We'd prove that multiplication is commutative (i.e.  :math:`n * m = m * n` for any two natural numbers :math:`m, n`, which turns out to be surprisingly tricky because we haven't defined multiplication from the "left" side of the expression yet. We'd also prove associativity (:math:`a * (b * c) = (a * b) * c`), and the distributive property which combines the two operations of multiplication and addition :math:`(a + b) * c = (a * c) + (b * c)`. But we're doing the greatest hits here, so it's already time to move on to the next topic.

==========================
Exponentiation, and beyond
==========================

Exponentiation
==============

Exponentiation is repeated multiplication - like before we can re-write the expression in longhand with multiplication, like (i.e. :math:`2^4 = 2 * 2 * 2 * 2`). The definition in Peano arithmetic is similar to multiplication and addition (can you work out what it is?). 

Beyond
======

Can we go further? Of course we can! We generally don't though - in part because most natural phenomena are modeled best by these "slower growth" functions. But still, just for fun, it's worth seeing what comes next - it's never a waste to have more tools in your toolkit. 

The next operation (repeated exponentiation) is usually called *tetration*. Here's two signs that this probably isn't an operation that people care very much about 

# The name basically just means "the fourth operation"
# There's not really a standard way to write it

Probably the most standard notation is to use an exponential on the *left* side of a number, like this

.. math::

    {^{n}a} = \underbrace{a^{a^{\cdot^{\cdot^{a}}}}}_{n\ times}

So :math:`^{4}2 = 2^{2^{2^{2}}}`

You'll *occasionally* see :math:`^{2}N` in physics - especially in the context of something called Stirling's Approximation which is a nicer looking function that's close to the factorial function. But besides this tower of 2 N's (i.e. :math:`N^N`), we don't see it a lot.

At a certain point it starts to become inconvenient to stack "towers" of numbers this way (we're already sort of stretching the limits here). If we want to go beyond tetration, the usual approach is to use something called "Knuth up-arrow notation" (named after the American computer scientist Donald Knuth). It's pretty straightforward - the number of arrows is the "level" of indirection above exponentiation that we're dealing with. So 

* :math:`a \uparrow b = a^{b}` (Exponentiation)
* :math:`a \uparrow\uparrow b = {^{b}a} = \underbrace{a^{a^{\cdot^{\cdot^{a}}}}}_{b\ times}` (Tetration)

The step after tetration is called pentation (written as :math:`\uparrow \uparrow \uparrow`). It's almost impossible to describe just how quickly pentation ends up growing - as a basis of comparison 

* :math:`2 + 4 = 6` (Addition)
* :math:`2 * 4 = 8` (Multiplication)
* :math:`2^4 = 16` (Exponentiation)
* :math:`{^{2}4} = 2^{2^{2^{2}}} = 65536` (Tetration)
* :math:`2 \uparrow \uparrow \uparrow 4 = \underbrace{2^{2^{\cdot^{\cdot^{2}}}}}_{65536\ times}` (Pentation)

It's sort of hard to explain just how absolutely, ridiculously enormous this last number is. Usually we'd like to get a handle on the size of a number by talking about the number of digits. Of course, the way that we represent numbers is to write them out using a base-10 system. If a page of text can fit about 2000 numbers, that means that the largest number we can write out in long-hand on the page is about :math:`10^{2000}`. Correspondingly, in a 100 page book we could write out a number about as large as :math:`10^{(2000 * 100)} = 10^{10000}`. That's about the size of a tower of 5 2's (:math:`2^{2^{2^{2^{2}}}}`). Remember that a tower of 4 2's was 65536 which we can easily fit on a single line of text - so the fact that we now need a 100 page book should give you some sense of how quickly these towers increase. The next step - a tower of 6 2's :math:`(2^{2^{2^{2^{2^{2}}}}})` - has roughly :math:`10^{10000}` *digits*. Current estimates say that there's only about :math:`10^{80}` protons in the entire universe, so we've basically lost the ability to even write out this number at the point of only 6 2's in the tower. Now remember that :math:`2 \uparrow \uparrow \uparrow 4` has 65536 elements in the tower - this is a truly fearsome number.

So for this reason, tetration (not to mention pentation) doesn't really have much use in modeling physical phenomena. We can easily write down an expression like :math:`2 \uparrow\uparrow 6` that is so large that it basically can't have any real meaning in physics.

========================
Where we'll go from here
========================

This is the end of our discussion of the whole numbers, and the "simple" operations on them. But obviously there's a lot of things that we're missing. For one, we don't have a way to "undo" operations - we can write down (and prove) statements like :math:`1 + 5 = 6` or :math:`7 * 6 = 42`, but we don't know how to answer a question like 
    
    "I added a number to 5 and got 6 - what was that number?"

For this, we'll need to build up the concept of an *inverse*, which we'll handle on a future post. Inverses are the gateway to new and exciting things we can do with numbers, we can start to construct the negative numbers (to get the integers), the rational numbers (i.e. fractions), and even the imaginary and complex numbers. 

.. [#] We don't necessarily *have* to start counting from 0, but it makes the logic of everything quite a bit simpler than if we started with 1 (among other reasons, we don't have to separately define 0 later). There's another general benefit to starting from 0, which is that it's closer to the way that logic circuits in computers count, and correspondingly the way that most computer programming languages will define their model for the natural numbers.

.. [#] If you want to be really picky (and you probably should) we should probably be careful about saying things like :math:`x \in \mathbb{N}` without having first actually formally defined :math:`\mathbb{N}`. We're being a little lazy with shorthand here, but the effect is to state a requirement for a number to be a natural number, rather than relying on the properties of the natural numbers to show something. Still, good to be mindful of this to make sure we don't fall into circular reasoning.

.. [#] The word *set* has a specific mathematical meaning that we'll unpack on some later post, but it's normal meaning more or less is the same here. If you're not familiar with mathematical sets, you can think of them as collections of things where we don't count duplicates.

.. [#] For a funny illustration of this, try `searching for the word "recursion" in Google <https://google.com/search?q=Recursion>`_