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

A word on notation
------------------

When we know what numbers make up a vector, we'll write them in square brackets like we in the demo above. It's a little unnatural to write numbers in a column at first, but the notation is important as we'll see later. 

There's another way that people sometimes write vectors. Instead of grouping the numbers in a column, they'll write each component separately, using :math:`\hat{i}` as the X-axis,  :math:`\hat{j}` as the X-axis, and  :math:`\hat{k}` as the Z-axis,. So the vector :math:`\begin{bmatrix}1\\2\end{bmatrix}` would get re-written as :math:`\hat{i} - 2\hat{j}`. This notation is interchangeable with the more standard brackets. 

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

Unfortunately, it turns out that this definition doesn't end up being very useful in physics. 

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
    <canvas id="figure-2d-scaling" width="300" height="200">Visualization of scaling a vector</canvas>
    <script src="interactive/fig2d_scaling.js" type="module" defer></script>

One common way to think about this is that the number you use to multiply the vector re-sizes (or "scales") the whole vector, while keeping it pointing in the same direction. Because of this, these numbers are then often called scalars - and in fact, in the context of vector algebra we often will call standalone numbers "scalars" as a matter of terminlology.

.. [#] Of course, there's no reason why "east" has to be positive and "west" has to be negative here. We could easily invert the two and end up with the same conclusion. 

.. [#] There's even situations where its useful to model functions as *infitite dimensional* vectors - while this might seem like a bunch of pure math nonsense, this is one of the foundational ideas that makes quantum mechanics possible. 
