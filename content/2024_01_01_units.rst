Dimensions and units
####################

:date: 2024-01-01 12:00
:modified: 2024-01-01 12:00
:tags: measurement, units
:category: units
:slug: units-intro 
:authors: Michael Bocek
:summary: Description of units 

Measurement and units
=====================

    Koń jaki jest, każdy widzi

    *Everybody knows what a horse is* 

    -- Entire entry for *horse* from `Nowe Ateny <https://en.wikipedia.org/wiki/Nowe_Ateny>`_, the first Polish encyclopedia

Science broadly involves measuring things (experiments), putting those measurements into context (theory), and telling other people what you found (communication). Meaurements in science generally come in three categories: 

1. Qualitative measurements, which are essentially verbal descriptions (What color is it? Does it smell bad?)
2. Dimensionless measurements - where we directly count something (How many heads does it have? How many stripes are there?)
3. Dimensional measurements - where we measure a property of something (How long is it? How much does it weigh?)

The third kind of measurement is in some ways the trickiest. After all, we need to be able to agree on what, exactly, it is that we're measuring. As an example - "everyone knows" what it means for an object to be heavy, but actually defining what this means (and how we want to measure it) is a different matter entirely. The group of people that specialize in this are called *metrologists*, and they tend to be pretty by-the-book beauraucrats these days that work for government (or international) agencies.

Fortunately these people already done a lot of the hard work for us. Since around the time of the French Revolution, scientists have largely agreed to all use the same set of units, which (owing to its origin) is refered to as the Système International (or SI) units. It's gone through some redefinitions as our understanding of science has improved since the 18th century, 

The Système International (SI)
==============================

The list of SI units is a little strange - and a little stark. Our experiences as humans are complex and nuanced, and yet most things that can be measured directly in physical science come down to some combination of 7 things:

Three of these units are probably pretty familiar to most people:
* The second (s), a unit of time 
* The meter (m), a unit of length
* The kilogram (kg), a unit of mass

The other four are probably less familiar
* The kelvin (K), a unit of absolute temperature
* The ampere (A), a unit of electric current. Indirectly, this unit serves as a way to talk about electric charge
* The mole (mol), a convenient way of counting large numbers of atoms and molecules
* The candela (cd), a unit of brightness (luminous intensity)

For the moment, we'll focus on the first three units, but in time we'll talk about all of these except the candela. 

What's up with the candela?
---------------------------

Unlike the other units, which express pretty universal things about nature, the candela is solidly grounded in how we (as humans) see brightness. It's roughly the total brightness of a single candle (hence the name), as radiated in all directions. In some ways this makes it one of the most directly relateable of the units. I've never used the candela directly, although interestingly the brightness of LED screens (like those in phones) is often measured in nits, which are a candela per square meter. 

Representing large and small numbers
------------------------------------

Science often deals with extremely large and small quantities. For example a DNA molecule is 0.000000002 m wide, while the Moon is 384400000 m away from the earth. These are not very convenient ways to write these numbers. Here's two better ways 

1. Write out the number in "scientific notation." You've probably seen this before, but this involves splitting out the "value" of the number from it's size - so 0.000000002m become 2x10^-9 m, or 384400000 m becomes 3.844x10^8 m. There's nothing wrong with this sort of representation in writing - and in some ways it makes the math easier if you're multiplying large (or small) numbers together. But it sounds really uncool to say "three point eight four four times ten to the eighth meters" out loud, and (worse), it requires some mental overhead to actually convert that to a reasonable reference point. Instead we typically  
2. Use "SI prefixes," which are modified versions of the unit that are larger or smaller by some multiple of ten. In most cases, it's pretty rare to see scientists use anything other than multiples of 1000. The most common prefixes that you'll generaly see are the following 

- Micro - meaning 1 millionth (10^-6). It's abbreviated with the greek letter mu (µ), but if you're like me you'll always end up reading this as "u". So a millionth of a meter is a µm, a millionth of a second is a µs, etc 
- Milli - meaning 1 thousandth (10^-3). This is abbreviated with a lower-case m, so a millimeter is mm, a milisecond is ms, etc
- Kilo - meaning 1 thousand. This is abbreviated with a lowercase "k" - so km, kg, etc 

Generally you'll see numbers reprented using the "smaller" of the two possible prefixes. So the length 0.0001m would often be represented as 100 µm rather than 0.1 mm (although either is totally fine, and would be clear to everyone). 

Other prefixes that you'll encounter (on the small side are)

- Centi, meaning 1 hundredth (10^-2, abbrevaited like cm)
- Nano, meaning 1 billionth (10^-9, abbrevaited like nm)
- Pico, meaning 1 trillionth (10^-12, abbrevaited like pm)
- Femto, meaning 1 quadrillionth (10^-15, abbrevaited like fm)

And on the large side 

- Mega, meaning 1 million (10^6, abbrevaited M, like Mm)
- Giga, meaning 1 billion (10^9, abbrevaited G, like Gm)

There's a `full list of prefixes spanning from 10^-30 to 10^30 <https://www.nist.gov/pml/owm/metric-si-prefixes>`_, but I will say that in my decades long career as a scientist I've never seen a prefix used that was smaller than 10^-18 (atto), or larger than exo (10^18). Even then, my experience is that the larger units are primarily used in talking about computers - we use Mega, Giga and Tera prefixes pretty routinely when talking about data storage (i.e. most hard drives cap out at a few terabytes of data.) 

For the SI units, the larger prefixes in particular tend to not get used very much because we tend to reach for a more reasonable comparison. For example - a megasecond is about 12 days, and a gigasecond is about 31 years, but these units are both totally ridiculous sounding. Days and years are well-defined units, and would be exactly how most scientists would refer to these periods of time. Even on very very large time scales, scientists generally would reach for the year as their unit - for example in geology it's common to see an age represented as Ma (millions of years ago), astronomers would generally measure masses of large objects in terms of their size relative to the sun (abbrevaited M☉), or large distances in parsecs ( approximately the distance that light travels in 3 years. The actual definition comes from a measurement concept called *parallax*, which we'll talk about in a future chapter.)

Wait why is the kilogram a base unit?
-------------------------------------

Above we said that the kilogram is the base SI unit for mass. Which is sort of weird, because we do say "grams" and not millikilograms. The reasons for this are sort of abitrary, but here's a decent rationale. If you've measuring the width of an object most conveniently in meters, you're probably going to measure its mass more conveniently in kilograms. Of course, you might then ask why we didn't name the kilogram the "gram" and keep the same definition - this is the sort of thing you can't get too hung up on. 

Length (and the meter)
======================

Measuring length is pretty straightforward. We constantly do it informally, by comparing the thing in question to an object that we're all pretty familiar with - the width of a human hair, the length of a hockey stick, or the size of Rhode Island. In geology in the US, it's customary even now to include a coin for scale in field photographs of rocks, because a large rock and a small rock basically look the same. NASA even `sent a penny to Mars <https://mars.nasa.gov/news/1204/mars-bound-nasa-rover-carries-coin-for-camera-checkup/>`_ with the Curiosity rover for this purpose. Historically in Europe, people used the size of a barleycorn (i.e. a barley seed) for short distances, or the size of a human foot for medium distances. The obvious problem is that these lengths aren't *standardarized*, since not all barelycorns or feet are identical  (Rhode Island is more consistent, but presents its own problems). Over time, countries tended to decide on an "official" version of these informal measurments, but they were still fundementally grounded in the size of some real thing. The other problem is converting between them - since the barelycorn is based on a barelycorn, and the foot is based on a foot, you end with the rather awkward factor of 36 barelycorns to the foot, which makes math difficult. The metric system solved two of these problems - first, by developing standards that weren't tied to exact physical objects, and second by using divisions of 10 to tie units together. 

How did we come up with the meter? 
----------------------------------

There's a pretty long and complicated history to how the meter came about - we'll hit the highlights here. The first really serious attempt at coming up with an independent unit of length came out of something that Gallileo Galilei (the famous one) noticed by making measurements of pendulums in the late 1500s. He noticed that alreadys long as a pendulum doesn't swing too high, the time that it takes to swing back and forth (the pendulum's *period*) depends almost entirely on its length. By the mid-1600s, several scientists proposed that we could create a universal unit of length by tying it to time - namely, by defining a unit based on the length of a pendulum that would swing once per second. This length (roughly 99.36 cm) is a convenient length for humans, and is quite close to the current length of the meter [#]_.

This definition was extremely convenient, but it had a fatal flaw. When I said earlier that a pendulum's period almost entirely depended on its length, that ignored a key detail. It also depends on the stength of gravity, which surprisingly varies by about `half a percent <https://en.wikipedia.org/wiki/Gravity_of_Earth>`_ depending on where you are on the Earth (it's generally weaker near the equator, and stronger near the poles.) Half a percent is a big difference in general - an adult could easily gain or lose a pound depending on where they are on earth! But it's an especially big difference when you're trying to define a standard for a unit of length.

When the meter was actaully defined after the French Revolution, they kept roughly the same physical length, but chose to define it instead based on an object that we could all agree on - the distance around the Earth. We've roughly known this distance since 240 BCE, when an astronomer named Erastothenes working in what is now Libya `measured it <https://en.wikipedia.org/wiki/Earth%27s_circumference#Eratosthenes>`_ to be somewhere between 39000 and 40300 kilometers [#]_ (the currently accepted value around the poles is 40,007.863 km). Conveniently, this number means that 1 meter could be defined as 1/10,000,000th of the distance between the North Pole and the Equator. The French formalized this definition by requiring that it be taken on the prime meridian, which is the line of longitude that runs (predictably) through the middle of Paris and funded an expedition to take an accurate measurment of this distance. After 6 years of surveying, and a fraud scandal that ultimately `lead to the untimely death of one of the surveyors <https://en.wikipedia.org/wiki/History_of_the_metre#Meridional_definition>`_, the French Academy of Sciences deposited a physical bar of metal in a vault to represent the length (the Mètre des Archives) on June 22nd 1799 [#]_.

Of course, this definition didn't stick since the actual value is 40,007.683 rather than 40,000 exactly. Better methods of measuring the size of the earth lead slightly conflicting standards culminating eventually in the redefinition of the meter in 1875 as (essentially) the length of one particularly carefully constructed bar of platinum alloy that was kept in a vault in Paris, called the International Prototype Meter. Of course, using a physical object to define the meter isn't exactly ideal - particularly a phsyical object that consists of tens of thousands of dollars worth of an extremely valuable metal. 

To put the definition of the meter on more solid footing, we moved from accurately measuring the Earth to instead rely on some new methods from physics. These new methods exploited a method of manipulating light called *interferometry*. Without getting too much into the details, light is a wave, with a regular pattern of peaks and valleys. Different colors of light have different spacing between the peaks (called the wavelength) - blue light is shorter and red light is longer, but both have wavelengths less than a millonth of a meter. Interferometry allows you to measure distances that are close to the wavelength of light extremely accurately, so in 1956 we redefined the meter again. Specifically, scientists made something like a neon lamp (using the gas krypton instead), and measured the wavelength of a specific sort of orange light that this lamp gave off.

Two major technological advances lead to the current (and final) definition of the meter in 1983. We got extremely accurate measurements of the speed that light travels in a perfect vacuum [#]_, as well as new methods to measure time (i.e. one second) to truly ludicruous accuracy. This lead to us re-defining the meter in terms of the speed of light - 

    The metre is the length of the path travelled by light in vacuum during a time interval of 1/299,792,458 of a second.

It's sort of a strange coincidence to come full circle - our story started by defining the meter in terms of the second, and ended the same way! 


Time (and the second)
=====================

Solar time 
----------

TLDR: This section gets a little in the weeds, but the basic premise is that it's a lot more challenging than you might think to define what, exactly, a 24 hour period is supposed to mean. 

The second base SI unit that we'll discuss is time, which is defined using the *second* (the one we're all familiar with). Informally, there's 86400 (60 * 60 * 24) seconds in a day on Earth. This definition is truly ancient (the concept of a 24 hour day comes from ancient Egypt), and is still loosely a definition of time that we roughly use. As you can probably guess from my use of "informally," "loosely," and "roughly," the real story is ... more complicated. 

The first complication is what we mean by a "day." Your first instinct might be that a day is a single rotation of the earth. This is almost correct - but off by abour 4 minutes. If you look at a far away star, what you actually find is that it rises and sets every 23 hours and 56 minutes, which is the real time that it takes for the earth to rotate on its axis - the techincal word for this is the *sidereal day*. 

The problem is that the earth is not just rotating on its own axis, but also orbiting around the sun. Imagine for a second that the earth didn't rotate, but still orbited around the sun. What that would mean is that every year, the sun would still rise once, and set once, just from the fact that a different part of the earth would be facing directly towards it every day out of the year. This effect still happens with the earth rotating, but it goes in the "opposite" direction of the rotation. What this means is that when the earth finishes a rotation, the sun is still very slightly below the horizon. After an extra 4 minutes of "catch up", the sun finally actually comes above the horizon. 

Unfortunately, this would only work at the equator - anywhere else on earth, days are longer in the summer, and shorter in the winter. The reason for this is the earth's *axial tilt*, which is a fancy way of saying that the earth's poles don't point straight "up" and "down" relative to the sun. Instead, the earth is consistently tilted by about 23 degrees - which is the source of the seasons (part of which is the change in the length of days). 

So if time between sunrises doesn't work, a better alternative is the time between "noons" - the points where the sun is at its highest point in the sky. This definition of the day is pretty good - to about ±0.03%. Unfortunately, across the year this still means that we accumumate about 30 minutes of error between the "longest" (November 3rd) and "shortest" (Feburary 11th) days of the year. There's two sources of variation - we'll pretend that we're in the northern hemisphere for this discussion (which 90% of people are)

1. Axial tilt (again) - as you move from winter into summer, the highest point that the sun reaches moves slightly further north every day. Technically we'd ideally only "like" to count east to west motion, so this extra movement north makes the time between noons slightly longer. Obviously, we catch up on the difference as we move back from summer to winter 
2. The Earth's orbit around the sun isn't a circle, but instead is an *ellipse* (which is sort of like an oval). Because of this, we're about 3% further from the sun in July than we are in January, which means that the amount of sidereal "catch up" that we need to do also varies throughout the year. 

These differences are summarized by a relationship called the *Equation of Time* (the `US Navy (surprisingly) has a good guide here <https://aa.usno.navy.mil/faq/eqtime>`_). In reality, our standard of solar time is based on a "fake" version of the sun that doesn't show either of these effects. Instead, we take the average day length across the year, which we refer to as *mean time*. One final wrinkle - obviously noon in Beijing doesn't happen at the same time as noon in San Francisco (a problem we currently solve with time zones). To truly standardize time, we pick our reference point to be zero degrees of longitude (the prime meridian, which we previously met in defining the meter), at the royal observatory at Greenwhich in the UK (Greenwhich mean time.)

To simplify measurement, we actually don't observe the sun directly (because it's bright), and instead rely on the locations of many distant stars in space to orient ourselves (in a system called the International Celestial Reference System). We also simplify things slightly by counting from midnight (i.e. 0 hours) rather than noon. The modern version of solar time that accounts for all of these effects is formally called UT-1, for Universal Time. 

More accurate measurments
-------------------------

For most of human history, measuring time based on the sun (or the stars at night) was more accurate than any clocks that we could construct, and also generally more relevant to daily life. Most towns and cities maintained their own official clocks that were synchronized to solar noon in that particular place. This worked pretty well until the mid-19th century, when `railroad travel between cities <https://www.lindahall.org/experience/digital-exhibitions/the-transcontinental-railroad/08-time-standardization/>`_ forced governments to consider standardizing time across different cities.

Our methods for measuring time also were becoming more accurate. The earliest methods of measuring time were generally either directly based on the position of the sun (like sundials), or involved some sort of action that had to be reset periodically (i.e. sand in an hourglass, or a candle that was known to burn over a fixed amount of time). Although early mechanical clocks started to emerge in Europe in the 14th century, the invention of the pendulum clock in the 17th century was a massive advance in both accuracy and convenience that essentially dominated timekeeping for almost 300 years [#]_. By the 1920's, some exquisitely engineered pendulum clocks were commercially available that lost less than ten milliseconds per day.

The first major advance beyond the pendulum was the *quartz clock*, which was developed in the 1920s. The details are a little fiddly, but essentially small pieces of the mineral quartz can be cut so that they vibrate like a tuning fork with a well-known frequency. Quartz has a special property known as *piezoelectricity* [#]_, meaning that electricity can make a quartz crystal vibrate. Similarly, a vibrating quartz crystal also produces pulses of electricity. In most modern quartz clocks, we manufacture a quartz crystal that vibrates exactly 32,768 times per second. That number might sound really arbitrary, but it's a very round number in binary (1000000000000 to be exact), and the circuits that do the counting work in binary. The clock hits the quartz crystal with a burst of electricity and counts the pulses. When it counts to 32,768 that advances to a second.

Today, most cheap watches still use a quartz crystal to keep time, but they were cutting-edge technology in the 1930's, when the best clocks were accurate to about `2 milliseconds per day <http://leapsecond.com/pdf/1953-Quartz-Greenwich.pdf>`_. The timekeeping was so accurate, in fact, that it lead to a new problem - the discovery that the `earth's rotation is not as regular as we had previously assumed <https://www.earthscope.org/news/a-day-is-not-always-24-hours-how-earths-shifting-systems-cause-day-length-variation/>`_. There's two main factors at play here:

1. The moon's gravity (tidal forces) constantly "steals" some angular momentum from the earth, which we won't ever get back. This is small but definitely measurable effect - the earth's rotation takes about 2.3 milliseconds longer each day than it did 100 years ago. 
2. Restribtions of mass on the earth can change the rotation speed, but don't "steal" any angular momentum. These are generally more irregular, although currently the dominant effect is caused by glaciers melting, which takes mass that was stored in ice and moves it into water. Like an ice skater bringing their hands inwards during a spin, this ends up speeding up the earth's rotation. 

These increases in clock accuracy started to suggest that the best definition for the second might not be to ground it in the Earth's rotation. Quartz clocks themselves were susceptible to issues (particularly temperature sensitivity [#]_), but the best constructed quartz clocks are accurate to roughly `24 microseconds per day <https://www.nasa.gov/missions/tech-demonstration/deep-space-atomic-clock/>`_.

The atomic clock and the modern second 
--------------------------------------

Atomic clocks are the standard for timekeeping today - but that's really underselling how impressive they are. It's not an exaggeration to say that modern atomic clocks are the most accurate measurement instruments that humans have ever created. 

While the word *atomic* definitely conjures up scary connotations, in this context it just means that the clock uses the properties of an atom to do its measurments. Since the mid-1800s, we've known that atoms only absorb (and emit) very specific colors of light. In the section on the meter we talked about how different colors of light have different wavelengths, but each color also has a specific *frequency* associated with it as well [#]_. So atomic clocks work by calibrating the clock to a specific frequency of light absorbed by a particular atom. Usually the light is a specific frequency of microwaves, and the atom in question is Cesium,  a rare metal that looks like liquid gold and bursts into flame if it comes into contact with air [#]_.

At their core, atomic clocks are based on a pretty simple mechanism. Fundementally they still use a quartz clock as their main source of time, but this quartz clock is set up so that its speed changes depending on the voltage (higher is faster). The rest of the clock exists basically just to change this voltage to keep the quartz clock in line - if it runs a little bit too slow, then then voltage is adjusted up. The clock doubles the frequency from the quartz clock many times over until it reaches billions of times per second, and then sends these pulses through a microwave antenna into a cloud of boiling caesium. If the frequncy exactly matches a particular frequency absorbed by cesium, then no adjustments are needed. But if the clock starts to drift, this amount of absorbed energy will go down very quickly, and the voltage on the quartz clock is automatically adjusted down (or up) to get it back into line. 

A lot of the work in atomic clocks goes into making the "atomic" part as accurate as possible - and these improvements have paid off massively over the last 70 years. The first atomic clocks were about twice as accurate as the best quartz clocks today (10 µs per day). Todays atomic clocks are accurate to about 9 picoseconds per day, which is one million times more accurate. It's hard to apprciate this number on its own, but here's one way to put that in perspective. The universe is about 13.7 billion years old - if one of these clocks started ticking at the moment of the Big Bang, it would be less than 1 minute off.

Like with the meter, the immense susccess of atomic clocks led to a 1967 re-definition of the second in terms of atomic properties, rather than in terms of the length of a day (or year):

    `The second, symbol s, is the SI unit of time. It is defined by taking the fixed numerical value of the caesium frequency ΔνCs, the unperturbed ground-state hyperfine transition frequency of the caesium-133 atom, to be 9,192,631,770 when expressed in the unit Hz, which is equal to s–1. <https://www.bipm.org/en/si-base-units/second>`_

The particular value was chosen to represent the mean length of the second for the year 1900 (with the understanding that the day becomes longer by about 2 ms every century.) Of course, it's no longer the year 1900, meaning that every year we drift from "true" solar time by a little less than a second per year, a problem that will only get worse over time. This means that the current time that we keep with atomic clocks (TAI, for *temps atomique international*) will always drift away from the time based on the position of the sun (UT-1). The compromise that essentially nobody likes is a third time standard, UTC [#]_, that incorporates *leap seconds*, which are introcued as needed to keep UTC within 900ms of TAI. UTC is always a whole number of seconds away from TAI: when this is being written in 2024, UTC is exactly 37 seconds earlier than TAI. In a terrifying turn of events, the `massive melting of glaciers as a part of climate change <https://www.nature.com/articles/s41586-024-07170-0>`_ is actually affecting the earth's rotation to the point where a "negative" leap second might be required in the coming decades. This is no doubt going to crash a lot of software. 

Mass (and the Kilogram)
=======================

The last unit that we'll talk about in this chapter is the kilogram, which is the SI unit of mass. Intuitively mass is how much an object weighs - although for reasons we'll cover at the end of this chapter these two things are distinct but related ideas (in the SI system, weight is measured in Newtons, rather than kilograms). 

The story of the kilogram is thankfully a little less involved than the story of the meter and the second. The early applications for measuring weight were primarily for trade and commerce, since weight is an excellent way to determine how much "stuff" you have (gold, wheat, apples, etc.) The need for standardization is obvious - after all it's not a very fair trade if one person's pound isn't the same as your pound. The most straightforward way to measure weight is using a balance - which is still a cultural symbol for fairness or equality. Balanced scales and standardized objects to weigh against are truly ancient, with examples dating to roughly `2000 BCE found in the Indus River Valley <https://www.precisa.com/article/the-history-of-the-weighing-scales/>`_, and providing standardarized accurate weights was a major role of early beaucracies. A common small unit that formed the basis of these ancient measuring systems was the *grain*, which is roughly the weight of a single grain of wheat or barley.

The first proposal for a less arbitrary unit of mass was to define it in terms of a volume of water - with volume, of course, being defined by a unit of length. In principle this is similar to the idea of defining a meter based on a seconds pendulum - which simplifies and strengthens the system of units by defining them consistently with each other. In the early metric system the base unit of mass was defined as the weight of a cubic decimeter (1 liter) of distilled liquid water exactly at the freezing point of 0ºC, which was called the *grave*. Subsequent revisions re-defined this unit to a kilogram (and defined the gram as a cubic centimeter of water), and also changed the relevant temperature from 0ºC to 4ºC, which is when water reaches its maximum density [#]_. 

In 1799, the french academy created a platinum standard weight (the Kilogramme des Archives) that served as a more conveinent realization of this last definition. This was replaced with a second object (the International Prototype Kilogram) in 1875 that was made of a harder alloy of platinum and iridium (the same as the prototype meter.) This object, which was kept under a careful watch in a vault in Paris, was the official definition of the Kilogram until the same day that Ariana Grande began her 7-week run on the Billboard Hot 100 with "Thank U, Next," her first number one single. [#]_ This was of course long after more reasonable definitions had been adopted for the second and the meter, and followed a lot of hand-wringing by metrologists who had come to realize that the prototype kilogram was driftining alarmingly in weight (up to 20 µg) compared to its official copies.

The new defition of the kilogram is probably the most unfamiliar looking of them - namely 

    `The kilogram, symbol kg, is the SI unit of mass. It is defined by taking the fixed numerical value of the Planck constant h to be 6.62607015×10−34 when expressed in the unit J⋅s, which is equal to kg⋅m2⋅s−1, where the metre and the second are defined in terms of c and ΔνCs. <https://en.wikipedia.org/wiki/Kilogram>`_.

The basic gist is that its definition came from making a very precise measurement of a number called the *Planck constant*, which plays a critical role in quantum mechanics, and tends to rear its head whenever we talk about things that are smaller than a molecule. Plack's constant is defined in terms of the second, the meter and the kilogram, but since the definitions of the second and the meter were grounded in exact physical phenomena (the frequency of a particular cesium transition, and the speed of light). Because of this, fixing the value of Planck's constant likewise allows us to tie the value of the kilogram exactly to something more fundemental. Although a precise measurement of the constant was required, because the kilogram was re-defined based on this measurement, it only had to be precise enough to exceed our existing uncertainty about the weight of the reference hunk of metal that was previously used.

There were some alternative approaches that metrologists considered. One that was especially fun was a project to create a nearly perfect sphere of incredibly pure silicon, and then count the number of atoms in that sphere to arrive at a definition that depended on the weight of a silicon atom. Ultimately the choice to use the Planck Constant boiled down to the ability to measure this constant extremely accurately using an instrument known as a kibble balance, which uses electricity to levitate a weight and precisely counter-act the force of gravity [#]_. The definition of the kilogram provided by counting atoms agreed very well with the definition that we get from the kibble balance, which was ultimatley a major factor in the decision to adopt the current definition. 

Units in equations
==================

The absolute most important golden rule in any physics (or chemistry, or biology, or whatever) equation is this 

    If two numbers are added together, they must have the same units. If two numbers are multiplied or divided, their units must also be multiplied or divided. TODO: Make this punchier

The first part of this is pretty easy to grasp. If we measure one length as 1 inch, and a second length as 1 meter, it seems obvious that we can't just add inches to meters without converting them to the same unit. Otherwise, the math just wouldn't work out - we'd get 2, but there's no good way to interpret that number. Similarly (but worse), we certainly can't add meters and kilograms together - here there's no way to convert these units to each other, since they measure fundementally different dimensions. What's a little trickier is to know what to do with multiplication and division - we'll tackle that in the next section.

Derived units 
=============

Unlike addition, there's a lot of situtations where dividing (or multiplying) makes sense where the numbers have different units [#]_ [#]_. One starightforward example is speed - if we drive 150 miles in 2 hours, then it's easy to see that our average speed for that trip involved going 75 miles per hour. We got to this number by dividing not just the numbers (150 / 2 = 75), but also the units (miles / hours = miles per hour). Phyiscists will often use a third abbreviation that humans generally avoid, which is to use a negative exponent instead of a slash to indicate division - so meters per second could also be written as m/s, or :math:`ms^-1`. This has the advantage of making the author look smart, but also in some cases does help to cancel units in complicated calculations. 

We can also do the opposite of course, and multiply two units together - if we travel at 75 miles per hour for 3 hours, then we'll travel (75 miles per hour * 3 hours = 225 miles.) There's also units that are entirely constructed from units that are multiplied together. A simple example is area - a room that is 4 meters by 5 meters has an area of :math:`4m * 5m = 20m^2`, or 20 square meters. If the room is also 3 meters tall, then the room has a volume of :math: `20 m^2 * 3m = 60m^3`, or 60 cubic meters. We can also just keep combining units together - for example, density is measured by dividing the mass of something by its volume. 

In most cases, volume isn't measured in cubic meters even if length is measured in meters. Instead, scientists tend to base volume measurements off of the liter, which is a cubic decimeter - or 1000 times smaller than a cubic meter, even though a decimeter is 1/10th of a meter. This illustrates a generally counter-intuitive property of volumes (and areas) - if you double the length of all of the sides of a cube, you increase its area by :math:`2^2 = 4` times, and increase its volume by :math:`2^2 = 8` times. For this reason, a cubic meter tends to be quite a bit of volume. One way to see this - a cubic meter of water weighs a literal, not figurative metric ton, while a liter of water weighs a much more prosaic kilogram.

The units that we generally use are built out of the SI base units (m, kg, s, A, K, mol, and in some cases cd). These can sometimes get a little out of hand, and are often named using abbreviations. For example, in electronics a common unit is the farad (abbreviated F), which measures capacitance (loosely how much charge gets stored somewhere relative to the amount of voltage). Broken down into the SI base units, it is :math:`kg^{-1}m^{−2}s^4A^2`, which I could have derived but instead looked up on wikipedia because it's a hassle to write out. 

Dimensional analysis 
====================

One final idea that we'll continue to touch on is *dimensional analysis*, which is the process of inferring relationships in physics by using the units for the associated variables, and then working backwards. Often, this gives us a "good enough" guess at the underlying equation for something, generally with a couple of 2's or :math:`\pi`'s tacked on. This often lets us get at some surprisingly deep and complicated relationships, without the need to do a full derivation.

Let's take an earlier example - we said that the time that it takes for a pendulum to swing back and forth depends only on two factors

1. It's length (:math:`L``) 
2. The strength of gravity - in this case more precisely the acceleration due to gravity, which has units :math:`ms^-2` (:math:`g`)

Using this, let's see if we can "guess" what the relationship between these variables (time, length, and gravitational acceleration) should be. The puzzle that we're trying to solve here is to multiply, divide, etc these units until we get them to equal each other. We know that we can get seconds out of :math:`g`, if only we can get rid of the "meters." We can do this by dividing length by gravity 

    :math:`\frac{L}{g}`

Or in units 

    :math:`\rightarrow \frac{m}{m s^{-2}} = s^2`

which gets us unit of seconds squared. How do we get seconds out of this? Easy - take the square root 

    :math:`T ~ \sqrt{\frac{L}{g}}`

which gets us the units in seconds. The power of this approach is that we know that it's the *only* way of combining these two variables in order to get units of seconds back out, so our "true" answer must at the very least be proportional to this. In fact, the real answer is 

    :math:`T = 2\pi\sqrt{\frac{L}{g}}`

although getting there by a real derivation is quite a bit more tedious just to get that extra correction of :math:`2\pi`!

Wrap-up 
=======

In future chapters we'll meet a number of derived units, and also talk in much more detail about the Ampere, mole, and Kelvin. I hope though that this chapter has given you some sense of the difficulty in defining units well, and esepcially in some of the ways that learning more about the world can complicate ideas that we think of as straightforward. 


Excercises
==========

I'll end every chapter with a few excercises, since I think actually having to wrestle with a few things helps a lot with understanding them. For the moment, this is a TODO


.. [#] If you've taken physics before, you've probably got the value 9.81:math:`ms^{-2}` seared into your head as the acceleration due to gravity on the earth's surface (usually abbreviated lowercase *g*). One thing you might not know is that this value is very close to the square of the mathematical constant pi (3.14159 etc), owing to the equation for a pendulum's period *T*: :math:`T=2\pi\sqrt{\frac{L}{g}}`. Solving for *g* gets you :math:`g=\frac{4\pi^2T^2}{L}` - a seconds pendulum technically has T = 1/2 Hz, so this simplifies to :math:`g=\frac{\pi^2}{L}`. If we were to define the meter to be exactly a seconds pendulum we'd end up with the numerical coindicence that :math:`g={\pi^2}`, but since *g* varies so much across the earth there's really not a sensible way to do this (meaning also that 9.81:math:`ms^{-2}` probably gives a digit too many in terms of precision.) 

.. [#] Appropriately for a chapter talking about the importance of units, a large amount of our uncertainty in this measurement is that it was reported in *stades*, and we're not sure how long a *stade* is exactly. 

.. [#] Or the fourth of Messidor, An VII for the revolutionaries out there.

.. [#] The speed of light changes depending on the substance that it travels through, but a perfect vaccum is a convenient way to define the speed of light for 2 reasons. First, you don't have to worry about any complicating factors (like the density of air, or how pure a sample of water is). Second, light travels faster in a vaccum than it does in any other medium, so using a vacuum represents a sort of "ideal" case to use as a comparison. 

.. [#] While pendulum clocks set the standard for accuracy, they had a massive limitation. On a ship at sea, the motion of the waves would quickly throw off the motion of the pendulum, which made accurate timekeeping impossible. This is a big deal, because while sailors had methods that could accurately determine latitude, there was no reliable way to estimate longitude without accurate timekeeping (so that the position of the sun could be compared to the time at some known location.) In 1714, the UK government offered a `20,000 pound prize <https://en.wikipedia.org/wiki/Longitude_rewards>`_ (equivalent to roughly 2.2 million pounds today) to anyone with a clock that could keep time to within 6 seconds per day on a ship. The most famous entrant to the contest was a self-taught carpenter named `John Harrison <https://en.wikipedia.org/wiki/John_Harrison>`_ who absolutely smashed the requirements, but was ultimately stiffed by the UK government and had to appeal to the king. 

.. [#] Discovered, surprisingly enough, by Pierre Curie and his less famous brother, Jacques in 1880.

.. [#] Because of this, wristwatches that measure time with a quartz crystal tend to be more accurate if they are worn constantly, because the watch ends up maintaining the quartz crystal at body temperature, which is more or less constant. 

.. [#] Frequency is the inverse of time, which is measured in Hertz. A hertz (abbreviated Hz) is an inverse second, which is a fancy way of saying that if something occurs with a frequency of 10 Hz, it occurs regularly 10 times each second (and so happens every 0.1 seconds). Correspondingly a frequncy of 0.1 Hz means that something happens once every 10 seconds. 

.. [#] Strictly speaking this is a little bit of a simplification - the relationship between wavelength (abbreviated using the Greek letter lambda, :math:`\lambda`) and frequency (abbreviated with the Greek letter Nu, :math:`\nu`, which is not v although it really looks like it) is given (for all waves) by the equation :math:`\lambda\nu=c`, where *c* is the speed of the wave. Generally we talk about properties of atoms as though they are in a vaccum, but as we mentioned before the speed of light does depend on the medium it travels through (i.e. water, air, glass). 

.. [#] Atomic clocks are one of the very few uses for cesium - which otherwise mostly comes up when people see `sodium reacting in water <https://www.youtube.com/watch?v=5UsRiPOFLjk>`_ and ask "`how can we make this explode even more? <https://www.youtube.com/watch?v=0YNsIaSbFdg>`_" In case it's not already clear, cesium is a top 5 element for me. The reason why it's used in atomic clocks is mostly because it's a very heavy atom. This means it moves slower, which makes the "spread" in the amount of light that it absorbs lower. 

.. [#] Maybe fittingly, the name "UTC" is itself a compromise. In English, it stands for "coordinated universal time," (CUT) while in French it stands for "temps universel coordonné" (TUC). To make everyone mad, they decided that the acronym should evoke both phrases while not actually standing for either. 

.. [#] One intereting consequence of this - the water in the deepest parts of lakes is also 4 degrees C, because water at that temperature will naturally sink relative to less dense colder (or warmer) water. This, along with ice being less dense than whater, is what keeps lakes liquid in the winter in cold places. 

.. [#] This is a slight oversimplification - the vote to approve it coincided with the start Ariana's chart run, but the definition did not officially go into effect until May 20th, 2019, which was midway through Lil Nas X's record-breaking 19 week run of "Old Town Road."

.. [#] Of course as we know from the attempt to define the meter based on a pendulum, the strength of gravity varies quite a bit over the surface of the earth. So among the many challenges in this very precise measurement is the ability to get a very accurate idea of the strength of gravity wherever the lab is located. 

.. [#] There's a certain kind of person who I think truly has the spirit of a mathematician - if you're one of these kinds of people (neither an insult nor a compliment), you'll probably have already started wondering about whether we can do spicier things with units than add, multiply and divide them. The one example that I'm aware of where we do anything non-standard with a unit is the unit for `Noise Spectral Density <https://en.wikipedia.org/wiki/Noise_spectral_density>` in electrical engineering, which is defined as :math:`volts / sqrt(Hz)`, which ultimately would break down into :math:`kg m^2 s^{-5/2} A^{−1}` in base units. 

.. [#] Ok the truly mathematically minded among you are probably wondering about the upper rows of the scientific calculator - the sine, cosine, tangent, exponential, logarithm, and other more obscure functions. It turns out that it doesn't make much sense to put units inside one of the functions. You'll never see the unit :math:`sin(m)`, for example. One rationale is to understand that there's an exact equivalent definition of sin(x) in terms of something called a Taylor series. If define a function :math:`f(x) = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} \ldots`, extending that sum to infinity, the result is exactly equal to :math:`sin(x)` for any real number. Of course, we already know that adding meters and cubic meters together is nonsense. Adding an infinite number of odd powers of meters together, many of which vastly exceed the dimensions of the space that we live in, is an exceptionally silly kind of nonsense. 
