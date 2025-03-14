Matrices 
########

:date: 2025-03-14 12:00
:modified: 2025-03-14 12:00
:tags: math, vectors
:category: math
:slug: matrices
:authors: Michael Bocek
:summary: Introduction to matrices


The matrix product
==================

In the vectors post we explored four notions of "multiplying" vectors

#. The Hardamard product (directly multiplying vector elements)
#. Scaling a vector by a number 
#. The wedge product (and its cousin the cross product)
#. The dot product

But all of these are sort of unsatisfying - they're either not very useful for what we're trying to model (i.e. the Hardamard product), extremely limited in what they represent (the cross product or the scalar product), or not really a way to transform a vector to another vector in a general way.

What do I mean by this? Well for numbers, we can always solve for x in the equation :math:`x * y = z`. But the same is definitely not true of vectors at this point - we can't find anything that - in general - will turn one vector into a different vector by multiplication in a way that's useful to us (of course, we could do this with the Hardamard product, but as we've already seen it's tough to really apply this to physics.)

Here's a fun idea though! We know that the inner product can take two vectors, and output a single scalar quantity telling us (loosely) how "aligned" the two vectors are with each other. What if instead of taking a single inner product, we took multiple inner products? After all, if our vector is 3 dimensional, we could get a new vector out of it by taking 3 dot products - one for the X coordinate, one for the Y coordinate, and one for the Z-coordinate.

This is a little abstract - let's start with a simple example. Let's say that we had the following three vectors 

.. math::

    \begin{bmatrix}1\\0\\0\end{bmatrix};\begin{bmatrix}0\\1\\0\end{bmatrix}; \begin{bmatrix}0\\0\\1\end{bmatrix}

Let's try multiplying these (in order) by the vector :math:`\begin{bmatrix}1\\2\\3\end{bmatrix}`. We'll take three dot products using these new vectors on the "left", and our vector :math:`\begin{bmatrix}1\\2\\3\end{bmatrix}` on the "right":

.. math::

    \begin{bmatrix}1\\0\\0\end{bmatrix}\cdot\begin{bmatrix}1\\2\\3\end{bmatrix} = 1;\begin{bmatrix}0\\1\\0\end{bmatrix}\cdot\begin{bmatrix}1\\2\\3\end{bmatrix} = 2; \begin{bmatrix}0\\0\\1\end{bmatrix}\cdot\begin{bmatrix}1\\2\\3\end{bmatrix} = 3

If we were to stitch these three numbers together into a new vector, we'd end up back with :math:`\begin{bmatrix}1\\2\\3\end{bmatrix}`. In a way, the three vectors we picked are interesting because they each "select" out either the first, second, or third component of the vector.

This notation is a little ugly right now, but there's a really beautiful way to write this. Remember that we write vectors as columns? What if the vectors that we use as multiples got written as rows? We could then basically say that the top row would become to the top component of the vector, the second row would become the second component, etc - the colors below should help explain what I mean here: 

.. math::

    \begin{bmatrix}\color{red}1 &\color{red} 0 & \color{red}0\\
                   \color{green} 0 & \color{green} 1 & \color{green} 0 \\
                    \color{blue} 0 &\color{blue} 0 & \color{blue} 1 \\
    \end{bmatrix} \times \begin{bmatrix}1\\2\\3\end{bmatrix} = 
    \begin{bmatrix}\color{red} 1\\ \color{green} 2\\\color{blue} 3\end{bmatrix}

We call a stack of rows like this a *matrix* (pluralized as *matrices*) - and it's an incredibly important (and unavoidable) part of math when it comes to dealing with vectors. We picked (on purpose) a matrix that doesn't change the vector at all here, but it's easy to see that we can do some powerful things with matrices. For example, this matrix will swap the x and y coordinates

.. math::

    \begin{bmatrix}\color{red}0 &\color{red} 1 & \color{red}0\\
                   \color{green} 1 & \color{green} 0 & \color{green} 0 \\
                    \color{blue} 0 &\color{blue} 0 & \color{blue} 1 \\
    \end{bmatrix} \times \begin{bmatrix}1\\2\\3\end{bmatrix} = 
    \begin{bmatrix}\color{red} 2\\ \color{green} 1\\\color{blue} 3\end{bmatrix}

This matrix "stretches" the Z coordinate of the vector by 100 times, while keeping the x and y coordinates the same. 

.. math::

    \begin{bmatrix}\color{red}1 &\color{red} 0 & \color{red}0\\
                   \color{green} 0 & \color{green} 1 & \color{green} 0 \\
                    \color{blue} 0 &\color{blue} 0 & \color{blue} 100 \\
    \end{bmatrix} \times \begin{bmatrix}1\\2\\3\end{bmatrix} = 
    \begin{bmatrix}\color{red} 1\\ \color{green} 2\\\color{blue} 300\end{bmatrix}

Here's another example - this matrix rotates the vector 45 degrees around the Z-axis


.. math::

    \begin{bmatrix} \frac{\sqrt{2}}{2} & - \frac{\sqrt{2}}{2} & 0 \\
                     \frac{\sqrt{2}}{2} &  \frac{\sqrt{2}}{2} & 0 \\
                     0 & 0 & 1
    \end{bmatrix} \times \begin{bmatrix}1\\2\\3\end{bmatrix} = 
     
    \begin{bmatrix}-\frac{\sqrt{2}}{2}\\  -\frac{3\sqrt{2}}{2}\\ 3\end{bmatrix}

We've done a lot of math so far - so in the last section we'll try to get a little bit of an intuitive sense for how a matrix in 2D works

Some intuition for the matrix product
=====================================

I think rather than trying to explain out how a matrix works on vectors in the abstract, the more useful thing to do would be to give you some examples to play with. In addition to showing the effect of three vectors, I also put a picture of actor Nicholas Cage (in a typically `unflattering image from Wikipedia <https://en.wikipedia.org/wiki/Nicolas_Cage#/media/File:Nicolas_Cage_Comic-Con_2011.jpg>`_ that was taken at Comic-Con in 2011 ) to help get a better idea of how the "space" is transformed.

Below you can try inputting numbers into the rows and columns of the matrix, and the image and vectors will transform the same way: 

.. raw:: html

    <style>
    table {
    max-width: 120px,
    border: 0px,
    }
    td {
    border: 0px,
    }
    .matrix-element {
    max-width: 50px
    }
    </style>   
    <table>
    <tr>
        <td><input id="input-00" class="matrix-element"></input></td>
        <td><input id="input-01" class="matrix-element"></input></td>
    </tr>
    <tr>
        <td><input id="input-10" class="matrix-element"></input></td>
        <td><input id="input-11" class="matrix-element"></input></td>
    </tr>
    </table>

    <canvas id="figure-2h-matrix-transforms" width="300" height="400">Visualization showing that vector addition is commutitive</canvas>
    <div style="display:none;">
    <img
     id="source"
     src="img/vectors/Nicolas_Cage_Comic-Con_2011.jpg"
     width="200"
     height="200" />
    </div>
    <script src="interactive/fig2h_matrix_transforms.js" type="module" defer></script>

Here's a few matrices to try - first, we're starting with a matrix that "does nothing" to the vectors, which for a 2D vector is 

.. math:: 

    \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}

Similar to 1 in multiplication (and zero in addition) we refer to this matrix as the identity matrix 


.. raw:: html 

     <canvas id="figure-2h-identity" width="300" height="400">Matrix identity</canvas>

We can easily change this to "stretch" the x or y axes. For example, the matrix below will stretch everything to be twice as big in the x-direction, but leave the y-direction unchanged.

.. math:: 

    \begin{bmatrix} 2 & 0 \\ 0 & 1 \end{bmatrix}

.. raw:: html 

     <canvas id="figure-2h-scaling" width="300" height="400">Matrix stretching</canvas>


We can also "flip" the image over - for example, if we were to use -1 in the y-direction, we could flip (or in more technical terms "reflect") the image around 

.. math::
    \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}

.. raw:: html 

     <canvas id="figure-2h-flip" width="300" height="400">Matrix reflection</canvas>

So far none of these examples have used the other two numbers that are "off-diagonal." That's simpler to think about, because we're ultimately not "mixing" the x and y-components of the vector at all. What could we do if we did mix them? Well one option is to "skew" the vectors

.. math::
    \begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix}

.. raw:: html 

     <canvas id="figure-2h-skew" width="300" height="400">Matrix skew</canvas>

A more useful thing that we can do though is to rotate the whole coordinate system together - here's an example matrix that does that by 60 degrees 

.. math::
    \begin{bmatrix} \frac{1}{2} & -\frac{\sqrt{3}}{2} \\  \frac{\sqrt{3}}{2} & \frac{1}{2} \end{bmatrix} \approx \begin{bmatrix} 0.5 & -0.86 \\  0.86 & 0.5 \end{bmatrix}

.. raw:: html 

     <canvas id="figure-2h-rotation" width="300" height="400">Matrix rotation</canvas>

Rotations are interesting enough that it's worth covering them in a little more detail. In general, if we want to rotate a vector by :math:`\theta` degrees in 2D, then we can multiply it by the vector 

.. math::
    \begin{bmatrix} cos(\theta) & -sin(\theta) \\ sin(\theta) & cos(\theta) \end{bmatrix}


Linear transformations
======================

One thing that you'll probably notice here is that we can't make a matrix to transform the image any way that we want. For example, it's not possible to use a 2D matrix to "swirl" the image, or to blur it, or to create a wavy pattern. These limitations are actually pretty useful in a way - as we'll explore a little later, everything that you can do to a vector using a matrix corresponds to something called a *linear transformation*. In brief, a linear transformation is means that we move everything around so that the rules of vector addition (and scaling) work out the same. An easy example is a rotation - it's not so hard to see that the vectors that we've drawn on the image still add up the same way no matter how we rotate it. One sort of cheeky way to think about this is that you can spin around the computer screen (or tablet, or phone) however you want, and none of the geometric relationships that we've claimed vectors to have will change. We've done a lot already though, so this is a topic for another day. 