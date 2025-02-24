Vectors
#######

:date: 2024-10-06 12:00
:modified: 2024-10-06 12:00
:tags: math, vectors
:category: math
:slug: vectors-intro
:authors: Michael Bocek
:summary: Introduction to vectors

Distance and displacement 
=========================

If you walk five miles east, and then two miles west, how much have you moved? There's two sensible answers to this question

.. raw:: html

    <canvas id="fig-2a-distance-vs-displacement" width="300" height="100">Visualization of vector drawing</canvas>
    <script src="interactive/fig2a_distance_vs_displacement.js" type="module" defer></script>

- Seven miles, because that's the total distance that you've walked (incuding doubling back)
- Three miles, because someone starting where you started would have to walk three miles to get to you 

Neither of these is wrong or right - physicists would call the first number (seven miles) the *distance* traveled, and the second number (three miles) the *displacement*. We can get the distance by adding all of the individual distances together - obviously, five plus two is seven. For displacement, we do something similar with a small twist - we count travel to the east as "positive", and travel to the west as "negative". So our displacement is :math:`7 + -2 = 5` [#]_.

In general, there's more situations in physics that are like displacement, where we want things in opposite directions to cancel. This is straightforward enough in 1 dimension - we can just keep track of displacement (or whatever other quantity) using positive and negative numbers. Of course, the world we live in is 3-dimensional (4 if you count time) - so we'll need some sort of new approach that can take into account multiple dimensions, while cancelling in the same way. One way to do it would be to "bundle" the numbers together. We'd agree that the first number represents our East-West position, the second number represents our North-South position, and (if necessary) the third number represents our up-down position.   This strategy of "bundling" the numbers together is exactly what we call a *vector*. 

To add vectors, we just add their individual numbers. Try playing around with the demo below to get the idea - you can add a vector to the previous chain by clicking on the display, or clear the display with the escape or Q keys. The sum of all of these vectors together is represented by the vector in red:  

.. raw:: html

    <canvas id="vector-addition" width="300" height="200">Visualization of vector drawing</canvas>
    <script src="interactive/fig2b_vector_addition.js" type="module" defer></script>

This example is two dimensional, but for 3 dimensions the idea is the same. We just need three numbers: east-west, north-south, and up-down. In theory there's not a limit to the number of dimensions a vector could have (except for our own imaginations) - often in abstract math its very useful to work with vectors in 4 or more dimensions, as we'll see later [#]_. 

For the purposes of this article a lot of the vectors we'll work with will be 2-dimensional. Part of this is that it's easier to visualize these vectors on a page than 3D vectors - still, I'll try to use a mix of 2D and 3D vectors in the math examples, just to get us used to seeing both.

A word on notation
------------------

When we know what numbers make up a vector, we'll write them in square brackets like we in the demo above. It's a little unnatural to write numbers in a column at first, but the notation is important as we'll see later. 

There's another way that people sometimes write vectors. Instead of grouping the numbers in a column, they'll write each component separately, using :math:`\hat{i}` as the X-axis,  :math:`\hat{j}` as the X-axis, and  :math:`\hat{k}` as the Z-axis,. So the vector :math:`\begin{bmatrix}1\\-2\\5\end{bmatrix}` would get re-written as :math:`\hat{i} - 2\hat{j} + 5\hat{k}`. This notation is interchangeable with the more standard brackets. 

More often though, we'll write equations with vectors using variables, rather than explicitly writing out the components of the vector. This raises a problem - probably every object you've used in the past has been a sort of number (an integer, fraction, real number, etc), so we haven't had to be very careful with notation. Vectors are the first things that most of us work with in math that are not just numbers, and so there's a few ways that mathematicians and physicists use to distinguish them. 

Alternatively, it's not uncommon to just bold any vector variables, like :math:`\mathbf{v}` - that's what we'll use here for most cases. Alternatively, you will sometimes see people draw a little arrow above the variable, like :math:`\vec{v}`.  Finally, in quantum mechanics there's a special sort of notation that gets used for vectors to illustrate that they are being used in a more "abstract" sense - we would write the vector v as :math:`|v\rangle`.

Adding vectors 
==============

Like we saw in the demo above, we can add vectors by adding their components. Mathematically that's about as easy as it can get. 

Vector addition is commutative (doesn't depend on order.) This is straightforward enough to see from the math - after all, we know that order doesn't matter for addition, and all that we're doing here is adding numbers together. So if we add :math:`\begin{bmatrix}a\\b\end{bmatrix} + \begin{bmatrix}c\\d\end{bmatrix}`, that's the same as :math:`\begin{bmatrix}a+c\\b+d\end{bmatrix}` which we could then choose to re-write as  :math:`\begin{bmatrix}c\\d\end{bmatrix} + \begin{bmatrix}a\\b\end{bmatrix}`. 

Visually this ends up being pretty striking though - in the demo below, we'll automatically shuffle the addition order of the vectors that you drew above. Notice that no matter how we shuffle things, they still add up to the same result! 

.. raw:: html

    <canvas id="figure-2c-commuitivity" width="300" height="200">Visualization showing that vector addition is commutitive</canvas>
    <script src="interactive/fig2c_vector_shuffle.js" type="module" defer></script>


Can we multiply vectors?
========================

We've seen already that you can add vectors by adding their components. It would be a reasonable guess then to think that we can multiply vectors by multiplying their components to get a new vector. In math this is called the `Hardamard product <https://en.wikipedia.org/wiki/Hadamard_product_(matrices)>`_ (usually abbreviated :math:`\odot`) - so we would do something like 

:math:`\begin{bmatrix}5\\2\end{bmatrix} \odot \begin{bmatrix}3\\7\end{bmatrix} =  \begin{bmatrix}15\\14\end{bmatrix}`

Unfortunately, it turns out that this definition doesn't end up being very useful in physics. To see why - let's compare two different pairs of vectors. In the first situation, our vectors are perfectly aligned with the axes

.. raw:: html

    <div>
    <canvas id="figure-2d-product-1" width="200" height="200">Vectors drawn along the axes</canvas>
    <script src="interactive/fig2c_vector_shuffle.js" type="module" defer></script>
    </div>

So the result of the Hadamard product is 

:math:`\begin{bmatrix}4\\0\end{bmatrix} \odot \begin{bmatrix}0\\4\end{bmatrix} =  \begin{bmatrix}0\\0\end{bmatrix}`

Now, let's rotate our view by 45 degrees - you don't need to know how to do this right now, but trust me that we've done this correctly. 


.. raw:: html

    <div>
    <canvas id="figure-2d-product-2" width="200" height="200">Vectors drawn along the axes</canvas>
    </div>

Now the reult of the Hardamard product is:

:math:`\begin{bmatrix}2\sqrt(2) \\ 2\sqrt(2)\end{bmatrix} \odot \begin{bmatrix}2\sqrt(2) \\ -2\sqrt(2)\end{bmatrix} =  \begin{bmatrix}8\\-8\end{bmatrix}`

Now if you think about it for a second, this doesn't make a lot of sense. The relationship between the vectors is exactly the same in these two examples - all we've done is rotate them relative to the axes of our coordiante system. But the coordinate system isn't "real" in any sense - we should be able to choose whichever set of coordinates is most convenient for our purposes. But here we get a dramatically different answer depending on what direction the our axes are facing. In the first case, we get a zero vector, while in the second case we get a decidedly non-zero vector. 

For this reason, we don't really find a lot of use for the Hardamard product in physics (although there are other uses for it in pure mathematics.) There are other ways that we can "multiply" vectors though that are incredibly useful. Let's start with one obvious one:

Multiplication as repeated addition (scaling)
=============================================

One way to think about multiplication is that it's a way to simplify repeated additions - when we evaluate 3 * 5, what we're really doing is adding 5 to itself 3 times (5 + 5 + 5). We certainly know how to add vectors - so could we just define "vector multiplication" as repeated addition? Of course we can - as an example, we could do something like 

:math:`3 \cdot \begin{bmatrix}5\\2\end{bmatrix} = \begin{bmatrix}5\\2\end{bmatrix} +\begin{bmatrix}5\\2\end{bmatrix} +\begin{bmatrix}5\\2\end{bmatrix}  = \begin{bmatrix}3 \cdot 5\\3 \cdot 2\end{bmatrix} = \begin{bmatrix}15\\6\end{bmatrix}`

Extending it a little further, we can see more generally that this definition of multiplication basically just involves multiplying every element of the vector by the same number - in mathematical language 

:math:`a \cdot \mathbf{v} = a \cdot \begin{bmatrix}x\\y\end{bmatrix} = \begin{bmatrix}a \cdot x\\ a \cdot y\end{bmatrix}`

There's not really any need for :math:`a` to be an integer here then - we can happily multiply every element of a vector by :math:`-2`, or :math:`\frac{1}{2}`, or :math:`\pi`, or really whatever number we want. 

What does this "mean" more generally? In the demo below, you can draw a vector and then see what the effect of multiplying differnet numbers on it would be. 


.. raw:: html

    <div> 
    <input type="range" id="scale-slider" name="scale-slider" min="-2" max="2" step="0.05" list="markers" style="width: 300px"/>
    </div>
    <datalist id="markers">
    <option value="-1" ></option>
    <option value="-1"></option>
    <option value="0" ></option>
    <option value="1" ></option>
    <option value="2" ></option>
    </datalist>
    <canvas id="figure-2e-scaling" width="300" height="200">Visualization of scaling a vector</canvas>
    <script src="interactive/fig2e_scaling.js" type="module" defer></script>

One common way to think about this is that the number you use to multiply the vector re-sizes (or "scales") the whole vector, while keeping it pointing in the same direction. Because of this, these numbers are then often called scalars - and in fact, in the context of vector algebra we often will call standalone numbers "scalars" as a matter of terminlology.

Of course, this isn't quite "vector" multiplication in the way that you might typically think of it, since our process here multiplies a vector by a scalar, rather than a vector by another vector. That leads us to our next idea - 


Multiplication as an "Area" and the wedge product
=================================================

When we tackled units before, one of our key rules was that if you multiply two quantities, their units must multiply as well. We've been treating vectors as a way to model displacement, which is essentially length. Of course, if we had two numbers that were measured in terms of meters and we multipled them together, the result would be square meters (i.e. :math:`m \cdot m = m^2`), which is a type of area.

It would make a lot of sense then if we could multiply two vectors together to get a sort of "area." Of course, there's a couple of things to think about here. The most pressing issue is that they "thing" that we would get out of this multiplication wouldn't be a vector, since it would be a measure of area rather than length.

Another thing worth thinking about - since vectors handle *displacement* rather than just distance, we care quite a bit about being able "cancel" out negative and positive values. But typically we think about area as a strictly positive quantity - it doesn't immediately make sense how an area could be negative (if that's even something we would desire.) Another complication is that it seems like we should probably take into account not just the lengths of the vectors, but also their angle relative to each other. After all, two vectors that are exactly parallel don't really seem like they should be able to create an "area" between them.

It turns out that there's a mathematical construct that exactly represents this idea - the *wedge product*. For two vectors :math:`\mathbf{u}` and :math:`\mathbf{v}`, we write the wedge product like :math: `\mathbf{u} \wedge \mathbf{v}`. Even though the idea of a "negative area" does seem a little bit abstract, it turns out to be a very powerful idea for modeling a number of different situations. The important behavior of this equation is more or less all contained within this equation (although it may look pretty humble at first)

.. math::
    
    \mathbf{u} \wedge \mathbf{v} = -\mathbf{v} \wedge \mathbf{u} 

A quick first thing to note - we're pretty used to multiplication being *commutitive*, which means that we usually expect that :math:`u \cdot v = v \cdot u` - that order doesn't matter when we multiply. But that's obviously not the case here - we have to be careful about the order that we write the numbers down in. Another interesting thing about this equation is that it immediately implies that :math:`\mathbf{v} \wedge \mathbf{v} = 0`, and :math:`\mathbf{v} \wedge -\mathbf{v} = 0` for any vector (can you see why?) 

A quick example calculation
---------------------------

Let's take it a step further and take two 2D vectors - say :math:`\mathbf{u} = \begin{bmatrix}1\\2\end{bmatrix}` and :math:`\mathbf{v} = \begin{bmatrix}3\\1\end{bmatrix}`, and see if we can use this equation to get the wedge product between them. We'll re-write these vectors in a more suggestive way using the "unit-vector" notation above - so `\mathbf{u} = \hat{i} + 2\hat{j}` and `\mathbf{v} = 3\hat{i} + 5\hat{j}`. Now let's multiply them out - we'll treat the "wedge" just like a normal multiplication sign, which gets us 

.. math::
    
    \hat{i} \wedge 3\hat{i} + \hat{i} \wedge 5\hat{j}  + 3\hat{i} \wedge 2\hat{j}  +  2\hat{j} \wedge 5\hat{j}

We can simplify this some - the first and last terms are zero, since we're wedging a vector with itself. In theory we could condense terms, but for the moment we'll leave them separate for convenience.

.. math::
    
    \hat{i} \wedge 5\hat{j}  + 2\hat{j} \wedge 3\hat{i} 

Now we'll use our rule above to flip the "sign" for the second wedge. We'll also (partially) condense the terms

.. math::
    
    \hat{i} \wedge 5\hat{j}  - 3\hat{i} \wedge 2\hat{j} = ((1 \cdot 5) - (3 \cdot 2))\hat{i} \wedge \hat{j}

We can generalize this some (and you should try!) For two vectors  :math:`\mathbf{u} = \begin{bmatrix}a\\b\end{bmatrix}` and :math:`\mathbf{v} = \begin{bmatrix}c\\d\end{bmatrix}`, can you work out what :math:`\mathbf{u} \wedge \mathbf{v}` is?

How to think about the wedge product
------------------------------------

Even in our example calculation above, we ended up having to write the final answer in terms of :math:`\hat{i} \wedge \hat{j}`. But I think there's two things that we're missing 

#. How should we actually think about interpreting this calculation
#. What acutally is `\hat{i} \wedge \hat{j}`?

The answer to the first question is actually pretty straightforward. We can think of the "wedge" product as something like the area of a parallelogram created from two vectors. I've got a demo below that probably will be helpful in visualizing what this means.

.. raw:: html

    <canvas id="figure-2f-wedge-product" width="300" height="200">Visualization showing that vector addition is commutitive</canvas>
    <script src="interactive/fig2f_wedge_product.js" type="module" defer></script>

To answer the second question - we already know that `\hat{i} \wedge \hat{j}` represents an "area" made out of the two unit vectors representing the X and Y axes. Since this object is made out of two vectors, mathematicians call it a *bivector*. In 3D, we can also combine two vectors to create a similar "area" element, or even 3 vectors to create a "volume" element called a *trivector*. Loosely you can think of the wedge product as a way to build area/volume objects out of individual vectors. More generally these objects are called *k-blades* - and can even represent hypervolumes in dimensions higher than 3D.

The cross product
-----------------

This is (I think at least) a pretty beautiful way to think about multiplying vectors - it preserves a lot of our intuition about how lengths "should" combine to create areas and volumes, and seems to hint at a larger structure that might be interesting to explore. That structure is definitely interesting - mathemaiticans call it an *exterior algebra* on vectors. 

For better or for worse though, this is not how physicists like to think. Phyisicists aren't really interested in mathematical structures for the love of math - they want to use them to model real like situations, and are only too happy to take (reasonable) shortcuts if the more formal math is too irritating to deal with. As you might imagine, the idea of also now having to handle bivectors in calculations is enough to give a lot of phyicists nightmares.

There's a lot of physical situations though that are well modeled by the wedge product. So what to do? Well, it turns out that there's a way that we can treat a bivector in 3 dimensions as though it were a vector after all. We can even go ahead and add/cancel negative and positive "areas" together just by adding these vectors. How does this work?

Basically phyicists like to pretend like the "area" of the bivector is actually its own vector that points directly out from the surface. Here's a diagram that does a pretty good job visualizing what I mean: 


Since we're putting two vectors into the product, and getting a vector back out, this looks an awful lot like a way to multiply vectors. Physicists call this process the "cross product", and typically write it like :math:`\mathbf{u} \times \mathbf{v}`.

Because the cross product is grounded in the wedge product, it follows similar rules. Most importantly 

.. math::

    \mathbf{u} \times \mathbf{v} = -\mathbf{v} \times {u}

Meaning that the cross product of a vector with iself is zero, that (as before) perpendicular vectors have the maximum value, etc. A useful result for the cross product that frequently comes in handy is that the magnitude of the output vector has a really nice relationship to the inputs. If we have :math:` \mathbf{u} \times \mathbf{v} = \mathbf{w}` then 

.. math::
    \lvert \mathbf{w} \rvert =  \lvert \mathbf{u} \rvert \lvert \mathbf{v} \rvert sin(\theta)

Where :math:`\theta` is the angle between the two vectors.

This works but it's also a little hacky - if you think about it, there's actually no way to get this process to work outside of 3-dimensions, because we're relying on the fact that there's a single vector that points directly outwards from a plane. Still, we live in a 3 dimensional world, so we can make it work!

There's one more way to multiply vectors that we should cover, and then we can call it a day. This is frankly probably the most interesting of the three products that we'll talk about, but in many ways it's probably the hardest to get your head around.


The inner (dot) product
=======================

Let's go back to the Hardamard product for a second - where we just multiplied each component of the two vectors together. We said earlier that this wasn't super useful - which was true. Taking the same two vectors and just rotating our axes was enough to completely change the answer. Is there a way to "fix" the Hardamard product so that it doesn't change depending on how we're looking at the two vectors? 

It turns out that there absolutely is - but it's sort of weird. 


.. [#] Of course, there's no reason why "east" has to be positive and "west" has to be negative here. We could easily invert the two and end up with the same conclusion. 

.. [#] There's even situations where its useful to model functions as *infitite dimensional* vectors - while this might seem like a bunch of pure math nonsense, this is one of the foundational ideas that makes quantum mechanics possible. 
