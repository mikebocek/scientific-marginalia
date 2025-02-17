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

So instead of introducing something new, what I'm hoping to do here is to re-contextualize something we've already all learned - basic arithmetic. 

============
How to count
============

As a kid, I remember my grandpa telling me that advanced mathematics involved being able to explain *why* :math:`1 + 1 = 2`. This was one of those things that troubled me for years as a kid, since the idea even that you would have to prove that :math:`1 + 1 = 2` seemed like having to prove that water is wet. In this section, we'll develop (at a high level) some of the things that we'll need to actually prove simple facts like this about the whole numbers. We'll start by re-learning how to count

Ultimately the simplest operation we can do with numbers (and not surprisingly the first one we learn as children) is how to list out the numbers in order - to count them. Of course, there's no end to the numbers, so what we're really doing is to understand how to get the next number once we've already listed out some number of numbers. What we'd like to do is get a more formal understanding of the "counting" numbers - the list of numbers :math:`0, 1, 2, 3, \ldots` continuing as far as we want.

This description of the problem should ring some alarm bells in your head - the idea of getting a "next" element is usually a fertile ground for using induction. This is exactly how mathematicians usually define the counting numbers. If you remember, induction has two parts 

1. A starting point (called the base case)
2. A way of getting a "next" element (the inductive step)

Where to start? For reasons that will soon become clear, it's most conveinent to start at 0 as our starting point/base case. The usual way that mathematicians notate the "next" element is to use what's called a "successor operator", usually written as S. So :math:`S(0)`` represents the next element after :math:`0` (i.e. :math:`1`), :math:`S(S(0))` is the next element after the next element after :math:`0` (:math:`2`), etc. We'll also need the concept of "equality," since without that it's not possible to make any really interesting statements.

The Peano Axioms 
================

This formal system is called Peano arithmetic after the italian Mathematician Giusseppi Peano. He came up with a set of 9 simple rules and assumptions (in fancy math language, *axioms*) that we can use to formalize the idea of counting. If you've never seen a list of axioms before, it's important to understand that while the list of ideas might *seem* obvious, it's actually incredibly tricky to boil down something even deeply familiar (like counting) into a list of rules. 

While I usually wouldn't do this deep of a dive, I think it's sort of fun to actually break down the axioms - since for a great deal of higher math, this is the foundation where we start: 

1. Axiom 1 defines the existence of 0 as a natural number - this gives us our starting point for induction

Axioms dealing with equality
----------------------------

Axioms 2, 3, 4, and 5 define the idea of equality between two numbers - so that we have the ability to start making comparisons between different expressions. We'll state these ideas using the same sort of language that you see in algebra classes - equality is =, while we'll call distinct natural numbers x, y and z. 

2. Any natural number :math:`X` always equals itself (in mathematical language, equality is *reflexive*)
3. For two natural numbers :math:`X` and :math:`Y`, if :math:`X = Y` then :math:`Y = X` (equality is *symmetric*)
4. For three natural numbers :math:`X`, :math:`Y` and :math:`Z`, if :math:`X = Z` and :math:`Y = Z`, then :math:`X = Y` (equality is *transitive*)
5. If :math:`X` is a natural number and :math:`X = Y`, then Y is a natural number (closure of equality)

Axiom 5 is a little weird - it defines a property that mathematicians call *closure*, which means that we can't "escape" the natural numbers through equality. For some of these, the easiest way to understand why they're important is to see a counter-example. In a lot of programming langauges, the natural numbers are modeled differently than numbers with decimals, so we think of 2 and 2.0 as distinct things. But these languages also define equality so that 2 = 2.0, even though 2 is *not the same* as 2.0 . For our system, this would be a problem - we don't want to be able to end up in some other number system just by trying to say that two things are equal.

Axioms dealing with succession
------------------------------

The next 3 axioms deal with the successor operator (:math:`S`) - remember this is our way of getting the "next" natural number in a list of numbers. One way to think about these axioms is that they plug holes in our current concept of the idea of a successor. To start, we know the numbers are never-ending, but we haven't really *defined* that - at the moment, we'd be fine with a system where 10 is the largest possible number. Maybe even worse, we could have a system where 11 doesn't exist, and instead 10 jumps straight to some random new "thing" (let's call it :math:`\mathfrak{Brian}`) that's not a number at all. We can prevent that with a statement like this that defines *closure* again, but this time for the successor function: 

6. If :math:`X` is a natural number, than :math:`S(X)` is a natural number (No escape and no stop)

Sorry :math:`\mathfrak{Brian}` - not your day! 

Here's another problem that I certainly wouldn't think of - what if the natural numbers "branched" at some point? Say when we got to 11, we suddenly split into :math:`11` and :math:`11_{EVIL\_TWIN}` - and from that point onwards had to worry about handling the "evil twin" numbers which are basically the same, but evil and we have to write them differently. We can solve this with something like axiom 7 

7. For any natural numbers X and Y, if :math:`S(X) = S(Y)` then :math:`X = Y` (No branching)

You might wonder why we didn't phrase this the other way - and instead say that if :math:`X = Y` then :math:`S(X) = S(Y)`, but this still doesn't explicitly forbid the existence of branches - it just says that any branching has to still be equal. This sort of distinction is really important to mathematicians, and it's why (like plumbing or electric), you hire a professional for these things. There's some other counter-examples handled by this one as well (i.e. a system where a number is its own successor, so that we count :math:`0, 1, 2, 3, 4, 4, 4, \ldots`)

One more successor axiom - and this one is sort of fun. Technically, we still have one way to break the natural numbers and make sure that they don't continue on to infinity. It's sneaky, but we could make the successor to some number (let's say 5) be 0. So we'd end up counting :math:`0, 1, 2, 3, 4, 5, 0, 1, 2, 3, \ldots` just looping around forever and ever. This is as it turns out a totally valid mathematical system - people will sometimes call it "clock" arithmetic after the idea that a 12-hour clock "loops back" to 1 after 12, but usually in math it's called *modular artithmetic*. While it's useful, it's not the natural numbers, so we need a new rule: 

8. For all natural numbers X, S(X) is not 0. (No loops)

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

This is roughly the way that we learn to add early in life - you might hold up four fingers, and then hold up another 3 to get your total (7), which you could also count. 




