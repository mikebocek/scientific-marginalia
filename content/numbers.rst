Re-learning the numbers
#######################

:date: 2025-02-16 12:00
:modified: 2025-02-16 12:00
:tags: math
:category: math
:slug: relearning-numbers
:authors: Michael Bocek
:summary: Re-introduction to numbers

=====================
What we're doing here
=====================

In a lot of posts on this blog, we'll have to learn new (or at least "higher-level" math). But I think one thing that makes it a lot more difficult than necessary to learn this math is that we both are trying to learn new concepts, and get used to thinking about math in a more abstract way. What I hope to do here (and on our previous post about math) is to help lay some groundwork to make it easier to get used to some of the more abstract/challenging concepts that we'll deal with later.

So instead of introducing something new, what I'm hoping to do here is to re-contextualize something we've already all learned - basic arithmetic. Up until the end of high school, you've usually only met mathematical objects that are either numbers, or functions that operate on numbers. Before we introduce any other objects, I hope to make the numbers unfamiliar so that we'll feel less nervous when we meet our new mathematical friends.

============
How to count
============

As a kid, I remember my grandpa telling me that advanced mathematics involved being able to explain *why* :math:`1 + 1 = 2`. This was one of those things that troubled me for years as a kid, since the idea even that you would have to prove that :math:`1 + 1 = 2` seemed like having to prove that water is wet. In this section, we'll develop (at a high level) some of the things that we'll need to actually prove simple facts like this about the whole numbers. We'll start by re-learning how to count

Ultimately the simplest operation we can do with numbers (and not surprisingly the first one we learn as children) is how to list out the numbers in order - to count them. Of course, there's no end to the numbers, so what we're really doing is to understand how to get the next number once we've already listed out some number of numbers. What we'd like to do is get a more formal understanding of the "natural" numbers - the list of numbers :math:`0, 1, 2, 3, \ldots` continuing as far as we want.

This description of the problem should ring some alarm bells in your head - the idea of getting a "next" element is usually a fertile ground for using induction. This is exactly how mathematicians usually define the counting numbers. If you remember, induction has two parts 

1. A starting point (called the base case)
2. A way of getting a "next" element (the inductive step)

Where to start? For reasons that will soon become clear, it's most conveinent to start at 0 as our starting point/base case [#]_. The usual way that mathematicians notate the "next" element is to use what's called a "successor operator", usually written as S. So :math:`S(0)`` represents the next element after :math:`0` (i.e. :math:`1`), :math:`S(S(0))` is the next element after the next element after :math:`0` (:math:`2`), etc. We'll also need the concept of "equality," since without that it's not possible to make any really interesting statements.

The Peano Axioms 
================

This formal system is called Peano arithmetic after the italian Mathematician Giusseppi Peano. He came up with a set of 9 simple rules and assumptions (in fancy math language, *axioms*) that we can use to formalize the idea of counting. If you've never seen a list of axioms before, it's important to understand that while the list of ideas might *seem* obvious, it's actually incredibly tricky to boil down something even deeply familiar (like counting) into a list of rules. 

While I usually wouldn't do this deep of a dive, I think it's sort of fun to actually break down the axioms - since for a great deal of higher math, this is the foundation where we start: 

1. Axiom 1 defines the existence of 0 as a natural number - this gives us our starting point for induction

Axioms dealing with equality
----------------------------

Axioms 2, 3, 4, and 5 define the idea of equality between two numbers - so that we have the ability to start making comparisons between different expressions. We'll state these ideas using the same sort of language that you see in algebra classes - equality is =, while we'll call distinct natural numbers x, y and z. 

One little piece of notation that we'll use - a common way to refer to the whole set of natural numbers is to abbreviate it as :math:`\mathbb{N}` [#]_. To say that something is a natural number, we can use another symbol :math:`\in`, which means "is a part of the set" and is frequently read outloud as "in". So the English statement "x is a natural number" is identical to the mathematical statement :math:`X \in \mathbb{N}`. We can specify multiple numbers are natural numbers like this - `(X, Y) \in \mathbb{N}` [#]_.

2. For :math:`X \in \mathbb{N}`, :math:`X = X` - meaning X always equals itself (in mathematical language, equality is *reflexive*)
3. For :math:`(X, Y) \in \mathbb{N}` if :math:`X = Y` then :math:`Y = X` (equality is *symmetric*)
4. For three natural numbers :math:`(X, Y, Z) \in \mathbb{N}`, if :math:`X = Z` and :math:`Y = Z`, then :math:`X = Y` (equality is *transitive*)
5. If :math:`X \in \mathbb{N}` and :math:`X = Y`, then Y is a natural number (closure of equality)

Axiom 5 is a little weird - it defines a property that mathematicians call *closure*, which means that we can't "escape" the natural numbers through equality. For some of these, the easiest way to understand why they're important is to see a counter-example. In a lot of programming langauges, the natural numbers are modeled differently than numbers with decimals, so we think of 2 and 2.0 as distinct things. But these languages also define equality so that 2 = 2.0, even though 2 is *not the same* as 2.0 . For our system, this would be a problem - we don't want to be able to end up in some other number system just by trying to say that two things are equal.

Axioms dealing with succession
------------------------------

The next 3 axioms deal with the successor operator (:math:`S`) - remember this is our way of getting the "next" natural number in a list of numbers. One way to think about these axioms is that they plug holes in our current concept of the idea of a successor. To start, we know the numbers are never-ending, but we haven't really *defined* that - at the moment, we'd be fine with a system where 10 is the largest possible number. Maybe even worse, we could have a system where 11 doesn't exist, and instead 10 jumps straight to some random new "thing" (let's call it :math:`\mathfrak{Brian}`) that's not a number at all. We can prevent that with a statement like this that defines *closure* again, but this time for the successor function: 

6. If :math:`X \in \mathbb{N}`, than :math:`S(X) \in \mathbb{N}` (No escape and no stop)

Sorry :math:`\mathfrak{Brian}` - not your day! 

Here's another problem that I certainly wouldn't think of - what if the natural numbers "branched" at some point? Say when we got to 11, we suddenly split into :math:`11` and :math:`11_{EVIL\_TWIN}` - and from that point onwards had to worry about handling the "evil twin" numbers which are basically the same, but evil and we have to write them differently. We can solve this with something like axiom 7 

7. For :math:`(X, Y) \in \mathbb{N}`, if :math:`S(X) = S(Y)` then :math:`X = Y` (No branching)

You might wonder why we didn't phrase this the other way - and instead say that if :math:`X = Y` then :math:`S(X) = S(Y)`, but this still doesn't explicitly forbid the existence of branches - it just says that any branching has to still be equal. This sort of distinction is really important to mathematicians, and it's why (like plumbing or electric), you hire a professional for these things. There's some other counter-examples handled by this one as well (i.e. a system where a number is its own successor, so that we count :math:`0, 1, 2, 3, 4, 4, 4, \ldots`)

One more successor axiom - and this one is sort of fun. Technically, we still have one way to break the natural numbers and make sure that they don't continue on to infinity. It's sneaky, but we could make the successor to some number (let's say 5) be 0. So we'd end up counting :math:`0, 1, 2, 3, 4, 5, 0, 1, 2, 3, \ldots` just looping around forever and ever. This is as it turns out a totally valid mathematical system - people will sometimes call it "clock" arithmetic after the idea that a 12-hour clock "loops back" to 1 after 12, but usually in math it's called *modular artithmetic*. While it's useful, it's not the natural numbers, so we need a new rule: 

8. For all :math:`X \in \mathbb{N}`, S(X) is not 0. (No loops)

The induction axiom 
-------------------

There's one last axiom that we'll need - and it's probably the most difficult to state. Basically, we've come up with a system that can generate things that seem to be the natural numbers in every meaningful way. The issue though is that we don't really have the confidence to say that this system generates *every* natural number - for this, we'll need the assumption that we can use induction. There's two different ways to state this axiom, but most modern formulations will just bascially state the idea of induction - essentially that if a property holds for 0, and it holds for the next number in a series, then the property holds for all numbers. In formal language 

9. For any property :math:`P(n)`, if :math:`P(0)` is true, and :math:`P(n)` being true implies :math:`P(n+1)` is also true, then `P` is true for all natural numbers. 

Whew! That was a lot - but now we have the rules we need to learn to count. We're made progress towards the end of pre-school math, more or less 

==========
How to add
==========

Counting gets tedious awfully quickly - so tedious in fact, that if someone asked you to count roughly 100 objects, you'd probably start by arranging them into small groups (let's say groups of 10), as you count so that you don't lose track. What you're doing here is to try to simplify the process by removing some of the repitition. If you lost track, you could *add up* the groups of 10 that you already had, and then keep going from the place where you left off.

Addition is repeated counting
=============================

This gets at a key insight that we'll return to a couple of times in this article - addition is just a form of *repeated counting*. When we write :math:`4 + 3` out, one way to think about that equation is to say 

    Start at 4, and then count 3 more numbers on from that

This is roughly the way that we learn to add early in life - you might hold up four fingers, and then hold up another 3 to get your total (7), which you could also count. This is the first of a series of times where we'll define a new operation that is esentially a "repeated" version of a simpler one. Let's get a better idea of how to deal with this in the more formal language that we started working with for counting 

Adding in Peano arithmetic
==========================

Let's start by defining what it means to "add" - and essentially give some meaning to the plus sign. The definition that we'll use looks a little funny at first. It comes in two parts 

#. :math:`a + 0 = a`
#. :math:`a + S(b) = S(a + b)`

Seeing this sort of two-part definition should probably ring the "induction" alarm bell in your head again - and you'd be mostly right! It does look an awful lot like a base-case and an inductive step. What's typically done here though is not actually to use *induction*, but it's "backwards" cousin *recursion*. The difference is small but important: induction is like climbing a ladder where we're confident that each step takes us to a new one. *Recursion* is a little like climbing down a ladder where we can't see what's below our feet - unlike induction, there's not necessarily a guarantee that we'll ever necesarily reach the bottom, or that the ladder won't suddenly end in mid-air. [#]_ This isn't a great foundation for proofs, but it is often a convenient way to define things concisely. Let's see how this works with addition. 

Let's start by adding one to a number (the first rung of our ladder) - we'll justify each of the steps in terms of something we've defined already 

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

Nice! We've proved that 1 + 1 = 2 [#]_.

In a real college math course like real analysis, we'd go on to use this definition to prove all sorts of useful things about addition - that :math:`a + b = b + a` (commutivity), or that if :math:`a + b = a + c`, then :math:`b = c`. These all seem like intuitively obvious facts, but it's worth going through the excercise for two reasons.

#. It's a worthwile exercise to say that we can find some "deeper" logic to them and 
#. This helps us get our bearings if we encounter some "new" object where this might not be true

Why zero is special
===================

One thing that comes out of our definitions is a special property of zero - namely that adding zero to any number leaves it unchanged (in math language, :math:`a + 0 = a`). Mathematicians call this property of leaving things unchanged the *identity*. 

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

And so on for 2, 3, 4, etc. Like addition, in a real math class we'd use this definition (along with more induction) to prove some useful facts about multiplication. We'd prove that multiplication is commutitive (i.e.  :math:`n * m = m * n` for any two natural numbers :math:`m, n`, which turns out to be surprisingly tricky because we haven't defined multiplication from the "left" side of the expression yet. We'd also prove associtivity (:math:`a * (b * c) = (a * b) * c`), and the distributive property which combines the two operations of multipication and addition :math:`(a + b) * c = (a * c) + (b * c)`. But we're doing the greatest hits here, so it's already time to move on to the next topic.

==========================
Exponentiation, and beyond
==========================

Exponentiation
==============

Exponentiation is repeated multiplication - like before we can re-write the expression in longhand with multiplication, like (i.e. :math:`2^4 = 2 * 2 * 2 * 2`). The definition in Peano arithmetic is similar to multiplication and addition (can you work out what it is?). 

Beyond
======

Can we go further? Of course we can! We generally don't though - in part because most natural phenomena are modeled best by these "slower growth" functions. But still, just for fun, it's worth seeing what comes next - it's never a waste to have more tools in your toolkit. 

The next operation (repeated exponentiation) is usually called *tetration*. There's not really a standard way to write it, which is probably one sign that it's not super useful most of the time. Probably the most standard notation is to use an exponential on the *left* side of a number, like this

:math:`{^{n}a} = \underbrace{a^{a^{\cdot^{\cdot^{a}}}}}_{n\ times}`

So :math:`^{4}2 = 2^{2^{2^{2}}}`

You'll *ocassionally* see :math:`^{2}N` in physics - especially in the context of something called Stirling's Approximation which is a nicer looking function that's close to the factorial function.

At a certain point it starts to become inconvenient to stack "towers" of numbers this way (we're already sort of stretching the limits here). If we want to go beyond tetration, the usual approach is to use something called "Knuth up-arrow notation" (named after the American computer scientist Donald Knuth). It's pretty straightforward - the number of arrows is the "level" of indirection above exponentiation that we're dealing with. So 

* :math:`a \uparrow b = a^{b}` (Exponentiation)
* :math:`a \uparrow\uparrow b = {^{b}a} = \underbrace{a^{a^{\cdot^{\cdot^{a}}}}}_{b\ times}` (Tetration)

The step after tetration is called pentation (written as :math:`\uparrow \uparrow \uparrow`). It's almost impossible to describe just how quickly pentation ends up growing - as a basis of comparison 

* :math:`2 + 4 = 6` (Addition)
* :math:`2 * 4 = 8` (Multiplication)
* :math:`2^4 = 16` (Exponentiation)
* :math:`{^{2}4} = 2^{2^{2^{2}}} = 65536` (Tetration)
* :math:`2 \uparrow \uparrow \uparrow 4 = \underbrace{2^{2^{\cdot^{\cdot^{2}}}}}_{65536\ times}` (Pentation)

This last number is so enormously mind-bogglingly big that there's just no real way to represent it. 



========
Inverses
========

We've already come a long way - starting with 9 rules, we've managed to create the notion of the natural numbers :math:`\mathbb{N}`, as well as formalizing definitions of multiplication and addition. We can now safely prove even some pretty advanced statements about numbers.

There's some big things that we're missing though - for example, we don't really have a great way to "undo" these operations. We can now write down statements like 

:math:`2 + 3 = 5`

And prove that they're consistent with the foundations of arithmetic. But we can't really answer a question like finding the value of x in the equation

:math:`x + 3 = 5`

The additive inverse
====================

Of course - looking as people who have passed (or at least been through) second-grade math, we know that the "opposite" of addition is subtraction. Since all we have right now is addition, we then need to define subtraction instead! Of course, 


 .. [#] We don't necessarily *have* to do this, but it makes the logic of everything quite a bit simpler. It also is in line with how most programming languages choose to define the natural numbers, which certainly doesn't hurt given that computers are obviously a pretty important part of math and science.
 .. [#] If you want to be really picky (and you probably should) we should probably be careful about saying things like :math:`x \in \mathbb{N}` without having first actually formally defined `\mathbb{N}`. We're being a little lazy with shorthand here, but the effect is to state a requirement for a number to be a natural number, rather than relying on the properties of the natural numbers to show something. Still, good to be mindful of this to make sure we don't fall into circular reasoning.
 .. [#] The word *set* has a specific mathematical meaning that we'll unpack on some later post, but it's normal meaning more or less is the same here. If you're not familiar with mathematical sets, you can think of them as collections of things where we don't count duplicates.
 .. [#] For a funny illustration of this, try `searching for the word "recursion" in Google <https://google.com/search?q=Recursion>`_
 .. [#] "The above proposition is ocassionally useful"