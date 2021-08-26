import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <p>[MUSIC PLAYING]

DAVID J MALAN: All right.
This is CS50, Harvard University's introduction
to the intellectual enterprises of computer science
and the art of programming.
And ordinarily we would all be here on campus in this beautiful Sanders
Theater together.
This, of course, is a little bit different this year,
for more than one reason.
But we're here instead in the Loeb Drama Center at Harvard University.
Thanks to our friends in collaboration with the American Repertory Theater,
we have this new space, including even such amenities as a prop shop in back,
where we've been working with an amazingly talented team
over the course of the summer to prepare for this semester and CS50.
And so I daresay we'll have some new and improved demonstrations along the way.
So our thanks to our hosts, the American Repertory Theater.
Now we wanted to evoke memories, at least,
or some imagery of the campus itself, particularly
for the many of you who could not be here in person this semester.
And so we went into the Harvard Archives, where among their collections
was this watercolor painting, painted by a Harvard graduate student
over 200 years ago in the year 1794.
Jonathan Fisher, who sat in what is now Harvard Square,
looking in on some of the earliest buildings of Harvard's campus.
And thanks to technology, we took what is a relatively small watercolor
that this graduate student painted some 200 years ago,
and now adorns the stage here in the Loeb Drama Center.
So if unfamiliar, we have Holden Chapel here at left,
Hollis Hall to its right, which is one of the undergraduate dormitories
in Harvard Yard, Harvard Hall, which is one of the classroom
buildings on campus, and then Massachusetts Hall,
where both first years and Harvard's president live and work respectively.
So welcome, then, to CS50.
And I can say that not quite as long ago,
but, nonetheless, feels rather long ago, some 20 years ago,
did I take the same class.
But as you know, I myself had some trepidation
when it came to studying CS50, when it came to studying computer science.
Because it was a very unfamiliar field.
I had followed a path when I got to college of sticking within my comfort
zone, studying government early on, thinking I would major
or concentrate in government.
And it wasn't until I got up the nerve to shop, that is, sit in
on this class CS50, that I realized that homework can actually be fun.
And I found that computer science and CS50 is not about programming per se,
even though that's how many of us perceive it in high school,
whether it's us or our classmates taking the class.
But it really is about problem solving.
And as such, it's so very applicable not only
to computer science and the engineering fields,
but really to the arts, humanities, social sciences, sciences, and beyond.
And so if you're feeling a little uncomfortable
with the idea of taking a class like CS50,
know that almost every year, nearly two thirds of the students who take CS50
have never taken a computer science course before.
So if you look up, down, left, right, right now, odds are more than many
of the classmates joining you here today are in a very similar position.
You're indeed in very good company.
And what's ultimately important in CS50 too, we emphasize, as in the syllabus,
that what ultimately matters in this course is not so much where
you end up relative to your classmates, but where you end
up relative to yourself when you began.
Indeed, taking into account where you currently are, perhaps
with no prior background, and considering
where you will be in just three or so months
is ultimately meant to be the measure of your own success.
And so toward that end, we'll start off this class programming
a little something from yesteryear.
An image here of Super Mario Brothers and the pyramid
that the character has to ascend.
We'll recreate a portion of this game, albeit using text--
otherwise known as ASCII art-- but we'll do that in just the course's second
or so week.
So this will be among the first programs you write.
And then fast forward just several problem sets or programming
assignments later, or several weeks later, too,
and you'll be building what we call CS50 Finance, a web
application of your very own that runs on the internet,
pulling down nearly real-time stock quotes from a third party service,
allowing your own users to log in and register to buy and sell stocks,
so to speak, using virtual currency.
So over the course of the class's several months,
will you go, truly, from building a pyramid in Mario
to building your very own web application and more,
followed by the course's capstone experience, which
will be your very own final project.
But what exactly is computer science?
What we thought we would do in this week zero, the very first week of the class,
is consider exactly what it means to solve problems.
And let me propose that this is computer science.
This is problem solving.
You have some input, which is the problem you care about
that you want to solve, and you care about the solution to that problem,
which is the so-called output.
And in between that input and output is this black box
of sorts, inside of which is the magic that happens,
the magic that you'll eventually be able to harness and compel computers
to solve problems for you.
Inside of that black box, ultimately, is going to be the code that you write.
But for us to begin doing that, we all kind of
need to agree on how we're going to represent these inputs and outputs.
We all kind of have to speak a common language, so to speak.
And so we need to agree how these inputs are going to be represented.
So how might we typically represent information?
Well, maybe the simplest thing to do at the very first class, whether we're
online or in person, is to take attendance
or to count the number of people in the room.
And so you might do this old school style on your hands
so as to represent every person in a room
with just a finger raised on your hands.
So how we might represent information boils down
to very simple digits on your hand.
Of course, you can't count very high with just this hand.
And there's actually a fancy word for what we're doing,
old school here, and that's unary notation-- uno, implying one,
or one finger being up or down.
And so you can count, it would seem, as high as five.
And of course, if I bring in a second hand,
I can go as high as 10, and then things get a little more difficult.
But it's a system for representing information
and it's fairly universal, certainly when we're all quite young.
But you and I tend to use a more useful system.
Not just digits on the hand, but other sorts of digits.
Namely, the decimal digits that you and I know.
So the numbers that are otherwise more technically called base 10--
and that's just a fancy way of describing the fact
that there's 10 digits that you and I as humans really tend to use typically.
Those digits, of course, are zero through nine,
and using these several digits, we can pose numbers like zero
through nine, but also 10 and 11 and 12, and as high up
as we want to go by using multiple digits still.
But computers don't really speak the same language as us.
They're, in some sense, much simpler than we humans,
even though they seem so complicated or so sophisticated and certainly so fast.
At the end of the day, these are all human-made devices,
and they're relatively simple at their core.
In fact, even if you don't quite know what you're saying,
but you've at least heard this to be the case,
what language do you understand computers to speak?
What language do computers speak, if not the system that you and I use
of zeros through nines or decimal?
Brian, could we see who might answer this?
What system do computers use, so far as you've heard,
whether or not you've taken a CS class before?
Keith, can we go to you first?
AUDIENCE: Yeah.
The computers use binary.
DAVID J MALAN: Binary.
And can you elaborate a little bit?
What do you mean by binary?
AUDIENCE: It's zeros and ones.
So, like, while we use zero through nine for base 10,
they use zero through one for base 2.
DAVID J MALAN: Yeah, exactly.
So computers use the so-called binary system, bi implying two.
And they, indeed, only use, as Keith notes, zero and one, two digits.
So on the one hand, this is actually pretty encouraging,
because, wow, this is actually a pretty simple system if we're only
using two of these digits.
But, of course, if you only have two digits,
how are we going to represent the number two or three or four
or any much larger number?
It would almost seem like a step backwards.
But it isn't actually.
And it turns out that this so-called system, or base 2--
two because there's two digits in the vocabulary, otherwise known,
as Keith says, as binary--
uses just zeros and ones, and it turns out there's other nomenclature here
we can toss out.
These zeros and ones are otherwise known as bits.
And bits actually derive from just two words, binary digits.
Binary, implying two possibilities, digits,
just being symbols on the screen.
So binary digits, or otherwise known as bits.
And computers speak binary using these things called bits.
But what does that mean and why is it the case?
Like, why didn't they invent computers decades ago
that just use zero through nine, rather than
come up with a whole new system for us to think about, let alone talk about?
Well, at the end of the day, computers are using what as their input?
Really just electricity.
Probably the only thing all of us do every day or every couple of days
with our laptop or desktop or phone is either make sure it's still plugged in,
or to plug it in so as to charge it.
So the only physical input to our devices
these days is electricity in some form.
And we don't have to get into the nuances of what electricity is,
but I think it's about electrons flowing into the device so as to charge it.
So it suffices for our purposes to know that there's
some physical input to the device, these computers and phones that we use.
But that's it.
And so if we harness this electricity, maybe we
can start to represent information with it.
For instance, here is a light bulb, this old ghost light in the theater here
that's currently off.
But it has the ability to turn on.
We just need to plug it in or throw on a switch.
And if that's the case, what's really quite
compelling about the metaphor of using lights
is that right now, this light bulb is currently off,
but as soon as I allow electricity to flow
as by plugging it in or maybe throwing a switch, now it's, of course, on.
And if I unplug it or throw the switch again, it's off.
Or if I plug it back in, it's on.
And the implication of this very simple idea
is that we can take a physical device, like a single light bulb,
and by plugging it in or unplugging it, we can represent information.
What did I just do?
I represented the light bulb being off or on,
but we can just call off and on something else.
We can call them zeros and ones.
And so this really is the germ of an idea
that gave us computers, and with it, their use of the binary system.
If, at the end of the day, all they have is physical input as electricity,
well, let's just use that to harness and keep track of information.
Let's store a little bit of electricity when we want to represent a one,
and let's let go of that electricity in some sense
when we want to represent a zero instead.
And so because the input to computers is so simple,
thus gives us the zeros and ones that we now use.
But we seem to have created a problem for ourselves.
If we only have one light bulb or one switch, if it's off,
it might be zero, if it's on, it might be a one,
but how do I count higher than one?
That problem still fundamentally remains.
Well, I could, of course, use more light bulbs.
So let me ask this.
If we were to use three light bulbs, how high could we count?
So with one light bulb, we can count from zero to one, two possibilities.
But with three light bulbs, how high could we count?
Let me go ahead and ask this question here on the screen.
In just a moment you'll see on your side this particular question via which
you can respond on your device.
How high can you count with three light bulbs?
So instead of one, I give you three, each of which can be on or off.
How high can we, perhaps, count?
So you'll see on the screen here the answers coming in.
We have a lot of folks thinking, 60-plus percent that it's
eight is the highest you can count.
A lot of you think it's seven, and some of you
also think it might be three or two.
So that's actually an interesting range of answers.
And let's see what might actually be the case.
Well, let me cut back over to three actual light bulbs here, all of which
are off.
And most naively, I think, if we were to turn these light bulbs on,
if they currently represent zero, obviously, I could turn one on
and we could call it one.
Then I could turn the second one on and call it two, turn on the third one,
and now with all three on, we could say now we're representing three.
But we're not really being clever enough just yet, if we're only
counting as high as three.
Because I'm just turning them on, in this story, left to right.
But what if we were a little more clever?
Maybe we turn them on right to left, or maybe we kind of permuted them
in different directions?
That is, we took into account not just how many bulbs are on
or how many fingers are in the air, but rather the pattern of on
and off light bulbs that we've created.
So let's just count this up.
So let me somewhat systematically turn some of these bulbs on here,
albeit virtually.
Here might be one, here might be two, here might be three.
But then we're kind of done with that story.
So how might we do it a little better?
Well, let's start again at zero.
Here might be one.
Why don't we call this two?
Why don't we call this three?
Why don't we call this four?
Call this five, this six, and this seven.
Now, it's fine if you didn't quite see what pattern I was following,
but take my word for it that that was a unique pattern of light bulbs,
eight total times.
I started at off, off, off, and I ended at on, on, on.
But along the way, there were, indeed, eight.
But how high can I count?
Well, it kind of depends on what number you start counting from,
and just as we thus far have been doing, computer scientists do all the time.
Computer scientists and, in turn, computer programs,
typically start counting from zero, just because it makes sense
because when everything is off, you might as well call that zero.
So if we start counting at zero, and we have eight possible patterns
that we just saw pictorially, well, that would
allow us to count as high as seven.
So from zero to seven, so seven is the highest
we can count with three light bulbs.
So those of you who propose that seven was the answer, 36% of you
were indeed correct.
57% of you who said eight are correct if you assume we start counting at one,
and that's fine.
But at least in the computing world now, we'll generally, by convention,
start counting from zero.
But you are correct to say that there's eight such possibilities.
All right, well, this is all fine and good
to represent things with patterns of light bulbs.
But how do we actually now get to the zeros and ones
that a computer is actually using?
Because what's inside of a computer, at the end of the day,
are not light bulbs but tiny, tiny little switches,
millions of little switches that can either be on, or one, or off, or zero.
Those switches happen to be called transistors.
And these days computers do have millions
of these things that can be on and off in different patterns.
So if you have the ability to turn on and off all of these switches, well,
what can we all agree on representation when it comes to using those switches?
How will we represent information with them?
Well, wonderfully, we don't really need to think very hard
or go past our very comfortable roots as kids.
If we consider for a moment not just zero and one,
but the whole decimal system, zero through nine,
that you and I all started our day with today.
How does that system work?
Well, here on the screen is 123.
So yes, you're probably thinking that's one hundred twenty three,
but not quite.
All I've shown on the screen is a pattern
of symbols, 123, or three digits.
And all of us probably are instinctively just saying, obviously,
it's a hundred and twenty three.
But it's probably been years since you considered
why it is one hundred twenty three.
Well, let's consider what each of these digits or symbols represents.
If you're like me, you grew up learning that the rightmost digit is the ones
place, the middle is the tens place, the left one is the hundreds place.
And so how do we get from these three symbols or digits,
123, to the mathematical idea we know as one hundred twenty three?
Well, all of us instantaneously, these days, did 100 times 1 plus 10 times
2 plus 1 times 3, which, of course, is just 100 plus 20 plus 3,
or the mathematical value we all know as one hundred twenty three.
So a bit of a circular argument, but just to remind us
how we got from 123 to one hundred twenty three.
Well, it turns out that in the world of computers, the system
they use is exactly, fundamentally the same.
The only difference is that computers only have access to zeros and ones,
not zeros through nines.
So if we consider now in the abstract, just three possible digits
represented here, let's consider for a moment why those columns are places
where one, 10, and 100, and so forth.
Well, why was that the case?
Well, there was a pattern, in fact, and it just
has to do with exponents or powers.
So the rightmost column, technically, if we really get into the weeds,
is 10 to the zeroth power, which if you recall,
just means one, 10 to the first power, which is just 10,
and 10 to the second power, or 10 squared, is 100.
But what's interesting about representing it in this way
is that it jumps out that 10 is involved.
There's 10 digits, zero through nine, so the columns are using this base of 10.
So you can perhaps now get even ahead of me
here by considering, well, if in the binary system that computers
use, you only have two digits, zeros and ones,
odds are the only thing that's going to change is the meaning of these columns.
Now we have the ones place still, because 2 to the zero is one,
but then we have 2 to the first, 2 to the second, and so forth.
And of course, if we just do out that math,
in the world of binary that computers use,
we have the ones place, twos place, fours place, and so forth.
And now we're good to go.
Even though we have to now think in a different base system,
now we can start counting more properly.
And now we can move away from the metaphor of light bulbs
and consider that if all of those light bulbs are off,
we're, again, just going to start thinking of those things as zeros.
So that would be a pattern of symbols or digits that's 000 in binary.
But in our human world, the mental math you
would probably do now instantaneously after today
would be, well, that's obviously 4 times 0 plus 2 times 0 plus 1 times 0,
or, of course, zero in decimal.
But how does a computer represent the number one, for instance?
Well, it's just going to change that rightmost bit from a zero to a one,
or, more metaphorically, it's going to turn that switch on and illuminate
that rightmost light bulb just like I did earlier.
How do I represent two?
It's going to be 010 in binary.
How do I represent three?
This is where we're about to differ.
Now I'm putting on two of those switches,
because I need something in the twos place and the ones place to give me,
mathematically, three.
Next, if we go ahead and choose--
count up to four, that's going to be 100.
if I want to count up to five, that's going to be 101,
six is going to be 110, and finally, the number seven is going to be 111.
So it would seem that using three bits, each of which can be a zero or one,
yes, you can permute them in eight different ways.
Two possibilities for the first times two for the second times two
for the third gives us eight.
But as per this math and the intuition of starting counting from zero,
we can only count up as high as seven in total.
Well, let's go ahead and actually take this out for a spin.
When we don't have just, say, let's say, one light bulb or three light bulbs,
we have, actually, the fortune of having like
a whole stage worth of light bulbs.
64 light bulbs adorn the stage here.
And you know what?
Sumner, could we go ahead and put up a random number on the screen here?
All right, so if you can see these light bulbs from your perspective,
we have eight light bulbs plus another bunch of them,
and all the others are off.
So let's go ahead and ask a question then.
If these light bulbs now represent not just one light bulb or two or three,
but several more-- in this case, at least six light bulbs,
what value do we actually get?
Well, let me go ahead and put a question on the screen here,
which should pop up on yours in just a moment.
And you should see now on your end this same question.
Put in binary terms, what number--
in decimal, does binary number 110010 represents?
What decimal number does binary number 110010 represent, from left to right?
So here we have an overwhelming response.
50 is indeed the correct answer.
Now why is that?
Well, if I go over to the physical light bulbs here, let's
just consider for a moment what the pattern actually is.
This here is the ones place, the twos place, four, eight, 16, 32,
and we could keep going.
But it's not going to matter because they're all off.
So we have 32 plus 16 plus 2, which indeed gives us
the number you and I know in decimal as 50.
And just imagine how high we could count with all of the other light bulbs
as well.
All right.
So we started with the story with electricity.
We then moved on to numbers and representing things,
either in decimal or in binary.
But we've kind of painted ourselves into a corner,
because if we only have at our disposal switches or the metaphorical light
bulbs, which we can think of as zeros and ones,
it would seem that the only things computers can do is compute.
That is, behave as calculators.
And in fact, early on, that's exactly what computers were designed to do,
was really facilitate mathematical calculations that were otherwise quite
tedious or impossible for humans.
But, of course, what you and I are using right now,
what we use every day on our phones and our laptops and desktops is much more
sophisticated.
So let's consider how could a computer represent not just numbers,
but letters of the alphabet.
Brian, could we call on someone for this one?
If you'd like to raise your virtual hand,
how could a computer go about representing letters of an alphabet
like English if, again, all we have at our disposal is switches?
AUDIENCE: We can assign the numbers that we're getting from binary
to specific letters of the alphabet.
DAVID J MALAN: Yeah.
We can assign the specific numbers in binary to letters of the alphabet.
That's pretty much our only option, it would seem.
If we only have the ability to permute these switches or light bulbs or bits,
well, we just all have to agree how to represent letters in the same way.
Now, maybe the simplest way for us to do this would be, you know what?
Let's just all agree that a capital A is going to be the number one.
So you turn on one light bulb, or represent the binary number one.
Well, how about for B, we could use the number two.
For C we could use the number three.
D could be four, and so forth.
We all just have to agree to number the letters in that way.
But it turns out humans did exactly that,
but a little bit differently years ago.
They decided for reasons that we won't get into just now,
that, actually, the capital letter A is actually
going to be represented by the decimal number you and I know as 65.
Now in bitwise form, that's going to look like this.
So this is the pattern of bits that a computer would
use to represent the decimal number we now know as 65,
and now what the computer is going to do is just be mindful of what
type of program you're using.
So yes, if you're using a calculator or maybe using something like Excel
to crunch numbers, well, in that context when running software,
like a calculator or a spreadsheet program doing numerical analysis,
the program is going to see inside of the computer's hardware
the pattern of switches that represents the decimal number 65.
And because it's in the context of a calculator or spreadsheet, what
you, the human, might see on the screen is literally the decimal number 65.
But if you and I are using text messaging or email or any number
of social media apps where we're communicating
not numerically but in letters, say, English letters,
in that context your computer is going to be smart enough
to know, well, that same pattern of bits that represents 65,
in the context of a text message or in an email or the like
actually represents the capital letter A. So the pattern is the same.
The representation is the same.
But the context is what differs.
And the system that humans came up with years ago that maps 65 to A, 66 to B,
67 to C, is called ASCII, the American Standard
Code for Information Interchange.
And that just means that there is a well-defined mapping that a bunch
of humans decades ago decided on, in order to map letters of the alphabet--
English in this case--
to numbers starting with 65.
And there's a whole mapping, too for punctuation, for lowercase letters,
and the like.
So given that, suppose that you did receive a text message containing
a pattern of bits, or, really, just a sequence of decimal numbers that
happened to be this.
72, 73, 33.
Suppose that you received a text message containing these patterns of numbers.
72, 73, 33.
What message might you have just received?
Let me go ahead and pull up the abbreviated chart here
to consider exactly what message you've received.
72, 73, 33.
And Sumner, could we go ahead and throw this same three-letter word
on the lights?
If you'd like to see it in bitwise form, so to speak,
it will appear here on these light bulbs now as well.
What pattern does this represent?
Lanham, can we go to you?
AUDIENCE: That would be HI with an exclamation point, correct?
DAVID J MALAN: Yeah so it's indeed HI with an exclamation point.
And it's probably pretty easy now, in retrospect,
to glean that, yes, the 72 and the 73 were H and I respectively.
But Lanham also noted the exclamation point, which isn't in this chart,
but per the dot dot dots, there is a well-defined mapping
for all of the letters of the alphabet that we might care about.
And so HI is perhaps more obvious than the other.
That 33, we need a bigger chart.
And so if you actually go on your computers
now to asciichart.com, asciichart.com, you'll
see a little something like this.
Though you can also just google ASCII in general
and get copies of the same chart.
You'll see here that H is indeed 72, I is indeed 73,
but if we look to the left, 33 is, apparently, an exclamation mark.
And you would only know that by having looked it up or just having
committed it to memory.
But the computers you and I use and the phones you and I use just
know this intrinsically.
That's, indeed, how they're programmed.
But it turns out, too, that we should consider
just how many zeroes and ones we're using now
to represent the 72, the 73, and the 33.
So let's look for one last time at the binary representation, which,
as per the light bulbs, are these patterns of bits here.
So when you receive a text message from a friend saying HI!
H-I exclamation point, in all caps, you're
technically receiving a pattern of bits, some kind of frequency,
if it's wireless, that represents this pattern of bits.
And typically, computers these days use eight bits
to represent each of those characters.
When ASCII first came out, they typically
used seven for efficiency reasons, because space was expensive back then.
But here we used eight, and, indeed, that's now
the norm when it comes to representing characters in multiples of eight.
So we have eight bits here, eight bits here, eight bits here,
which means to receive the message HI! you are sending or receiving 24 bits
total.
Now, frankly, bits are not a very useful unit of measure,
typically, because they're so small.
Just a zero or a one.
But each of these patterns of eight bits, actually
have a vocabulary word, if you will, which is bytes.
And odds are, all of us have used this term in some context,
but generally in the context of megabytes or even gigabytes.
Indeed when you talk about the sizes of your files these days,
you're speaking in bytes in some form, either million or billion bytes.
But each of those bytes, quite simply, is a pattern of eight zeros and ones.
So, in fact, if we have as many as 64 bulbs at our disposal,
that's 64 divided by 8.
That's eight characters.
So it would seem we could spell on this stage, even an eight-letter word--
if, Sumner, we could put up a random eight-letter word,
that we'll keep up now--
can you now spell from left to right, your left
to your right, an eight-letter word using the system known as ASCII.
But, of course, we're being a little bit biased here,
as ASCII is the American Standard Code for Information Interchange.
And on a typical US English keyboard, there's more characters, certainly,
than uppercase letters, like A through H and I.
There's also some punctuation and some numbers, but there's also quite a bit
missing as well.
And any of you who are elsewhere in the world, odds are,
would find using a keyboard like this especially limiting or frustrating.
Why is that?
What seems to be missing from ASCII?
What seems to be missing from ASCII?
Well, let me ask this one other question here.
If we do use ASCII, and we therefore give ourselves eight bits or one byte,
how many different characters could we potentially actually display, actually
represent?
So on your screen, you should see this question now.
How many symbols can you represent with eight bits?
How many symbols can you represent with eight bits?
And this speaks to, really, at the end of the day, how
many letters of the alphabet plus punctuation,
plus uppercase and lowercase, can ASCII, or really, can computers support?
Well, it looks like 72% or so of you think that the answer is 256.
And it is indeed the case that you can represent 256 possibilities.
Why?
You can actually do out the math.
If you've got eight bits, each of which can be a zero or a one,
that means you have two possibilities for the first,
times two possibilities for the second, times two times two times two.
That happens to be 2 to the eighth, or 256.
It's fine if that's not immediately obvious,
but if you do have eight bits, each of which can be one of two values,
you can come up with 256 possibilities.
Those of you who chimed in to say that the answer is 255 in this case,
are wrong, only because now we're talking about the total number
of patterns, which is indeed 256.
But the highest value we could represent with eight bits or eight light bulbs,
it would seem to be, indeed, 255.
And that's because of all of the different patterns we can permute.
But let me open the question to the audience now.
Why might a US English keyboard be especially limiting,
and in turn, why is ASCII really not quite appropriate
when it comes to representing human language,
even though this is what computers began with years ago?
What is missing from ASCII?
Why might 256 total possibilities not be sufficient?
Kevin, can we go to you?
AUDIENCE: Sure.
I mean, for one thing, missing a lot of the accents in other languages.
But if you just consider, like, Asian languages,
there are a lot more than 256 characters.
DAVID J MALAN: Exactly.
So not only are we missing accented characters
that you might need in some languages, we're
also missing the characters that you might need in Asian languages,
in languages like Arabic and the like.
There are way more symbols that we humans use to communicate in print
and electronically than 256.
English, we can get away with fitting into this keyboard,
but not once we introduce things like these characters,
let alone other symbols as well.
And it turns out there's other things we humans like to say these days
and express using characters that have come into vogue, which is, namely,
these things.
Odds are, probably sometime today you have
sent or received one of these things here, otherwise known as an emoji.
Now, even though these emojis look like pictures, they look like images--
and they are, technically-- the way they're implemented in computers
is actually as patterns of zeros and ones.
These are actually just characters in an alphabet, the emoji alphabet.
Which is to say there's some pattern of zeros and ones
that represents each one of these faces, and the many other emojis that
nowadays exist.
And this is because the world has transitioned over the years from ASCII,
which only used seven, and in some sense,
eight bits total to represent all possible characters,
to using either eight or 16 or 24 or even 32 .
Bits nowadays there's a system called Unicode, which humans have come up
with that support not only English, but also all of the human languages,
is the aspirational goal, both written in print or electronically is the goal.
And in addition to that, this is to say we can represent things like this.
So this is the so-called face with tears of joy.
And this face of tears of joy, as of last year,
was the most popular emoji sent via text messages, emails,
social media, and the like.
But at the end of the day, all you're receiving
is, like, a key on a keyboard.
So, in fact, you wouldn't know it to look at it.
But in fact, the decimal number representing this face
with tears of joy happens to be 128,514.
So to Kevin's point, to represent not only certain human languages,
but certainly these emojis, we need way more than 256 characters
so we can use not just eight bits, but 16 or 24 or 32.
That's a huge amount of possibilities now.
In fact, now, to really take the fun out of these things,
if you receive that face with tears of joy or send it,
you're technically just sending a pattern of bits that looks like this.
That's all that's going on underneath the hood,
every time you use these things.
All right.
So we started again with electricity.
We then represented numbers.
Now we have the ability to represent letters and even
emotions in the form of emojis.
What else is there out there?
Well, the emojis themselves, of course, at least the ones we've looked at,
are pictorial in nature.
And so that invites the question, how does a computer
represent things like color?
Like, that face with tears of joy had a lot of yellow in it.
So how is yellow or any color, for that matter, represented in a computer?
Well, let me ask the audience again.
If all you have at your disposal is bits, zeros and ones,
and we just as humans need to agree how to represent colors,
what might be one possibility?
It doesn't need to be the answer.
But what might your own instinct be if designing this for the first time
yourself?
How might a computer represent colors now?
Yasmin, what do you think?
AUDIENCE: You would like members to different colors and shapes
and just do the same system.
DAVID J MALAN: Yeah, exactly.
Perfect instincts.
You would just assign numbers to the different colors,
and we all just have to agree on what that mapping is actually going to be.
So it turns out there's different ways to do this.
And if any of you are artistic and use Photoshop or the like digitally,
you're probably familiar with acronyms like RGB, red, green, blue.
But there are other acronyms and other ways
to implement Yasmin's idea where we just somehow map
zeros and ones to actual colors.
Well, RGB just happens to represent red, green, and blue.
And this is a system humans came up with years ago that says, you know what?
We can actually get every color of the rainbow
by mixing together some amount of red and green and blue light, essentially.
So that just invites the question, well, how do we represent the amount of red,
how do we represent the amount of green, and how do we
represent the amount of blue?
And we have, as Yasmin says, bits at our disposal.
So we just have to decide how to do this.
So suppose we receive a pattern of bits, that 72, 73, 33 again,
but this time it's not an email.
It's not in a text message.
It's in the context of a file that I've opened in Photoshop.
So it's as though I've opened up a photograph that someone
sent me and I want to do some editing and I see this pattern of numbers,
or, in turn, bits.
Well, what is that representing in this case?
In the context of an email or a text message, it's still HI!
But in the context of Photoshop or Instagram
or anything that is oriented around images,
it's actually going to represent some amount of red, some amount of green,
some amount of blue.
And as we discovered earlier, the total number
of possibilities you can represent with eight bits happens to be 256.
The highest value you can represent is 255 if we start counting from zero.
So this is to say that each of these three numbers
is a number between zero and 255.
So 72 feels like a medium amount of red, 73 is like a medium amount of green, 33
is a little bit of blue.
And if you combine those three amounts of color, eight bits plus eight
bits plus eight bits, using 24 bits total,
using the first third to represent redness, the second third greenness,
and the third third blueness, you get, it turns out,
a dot that looks like this, a yellow dot.
And so, indeed, that emoji, when it's being displayed on the screen,
is the result of the computer interpreting--
the 128,514 value is knowing oh, that's the emoji
with the face of tears of joy.
But when it comes to displaying the information on your screen,
now your computer is going to be using different patterns of bits
to control the colors of the dots on the screen.
And this term you might already know.
The dots you and I see on our computer screens or even TVs these days
are called pixels.
They're tiny little squares that represent some color
such as this yellow one here.
And you can actually see them in some contexts.
If I go ahead and pull up the same face with tears of joy and zoom in a bit,
zoom in a bit more, and really zoom in a bit more,
now you can actually see what we call pixelation.
And odds are, you have seen this on Facebook, Instagram,
wherever you might be resizing or editing photos that don't quite
have enough resolution.
The resolution of an image is just how many pixels or dots there
are horizontally and vertically.
So if you really zoom in on an image, you'll eventually see those pixels.
And this is to say that even in this zoomed-in happy face,
there's a huge number of yellow dots and a whole bunch
of black and gray and brownish dots as well
that compose this very colorful image.
And so you can see them in that case, and every one of those dots now,
a pixel, is using, I claim, like 24 bits or three bytes.
Now, you can imagine, there's probably what, hundreds, maybe thousands of dots
in that image if we zoom out and look at all of them again.
So if every one of those dots or pixels is three bytes,
this is why the photographs you and I take
and the images you and I download from the internet
are typically measured not even in bytes, per se, but in kilobytes,
for thousands of bytes, or megabytes for millions of bytes,
or if it's a video file, it might get even bigger, billions, or gigabytes.
But that's all that is happening underneath the hood.
We're just representing information in this way.
Well, let me ask a follow up question now.
If we've now, thanks to Yasmin, represented colors,
and in turn, images, because all an image is is a grid of pixels.
You take the same principle Yasmin proposed,
where you represent each color of a dot and you have a whole bunch of dots that
gives us images, how would you propose computers represent video files?
Again, even if you don't know the answer, how might
a computer represent video files now using, again, only bits
at their disposal?
Who might like to field this one?
How might a computer represent a video?
Justin, what do you think?
AUDIENCE: I-- maybe just, like, rapidly changing the bites?
DAVID J MALAN: Just rapidly changing the bites.
I hear-- can you elaborate a little bit?
What do you mean by changing the bites?
AUDIENCE: Like rapidly changing the RGB of individual pixels--
DAVID J MALAN: Exactly.
AUDIENCE: --to match the image of that second
of the video or portion of the video.
DAVID J MALAN: Perfect.
So if you think about, like, the rectangular screen that is your phone,
or your laptop, or your desktop monitor, if you just
keep changing the colors of those dots once per second
or a whole bunch of times per second, we'll
get the illusion that there's actually motion on the screen, ergo video.
So really, a video, in some sense, it's just a whole bunch of images,
to Yasmin's definition, flying across the screen really quickly.
And so you can see this even old school style.
For instance, let me go ahead and open up on my screen
a short video that represents a flipbook.
So you might have made one of these as a kid or maybe your teacher
did or you saw them, at least, in person somewhere.
Where if you take a whole bunch of pieces of paper and staple
or clip them together in some way, draw a whole lot of pictures, all of which
are similar but slightly different on each page,
you can create an animation, or, really, a video.
And this is all a video is in a purely electronic world.
Even though this happens to be implemented
in paper, what happens in the computer world
is indeed just a whole sequence of images
flying across the screen at some rate.
And that's what actually gives us the video files that you and I know today.
And there's even more rabbit holes we can go down.
For instance, how might you represent music?
Well, music, could be represented, gosh, in different ways.
Like, if you play the piano, for instance, you
might know that there are notes, like A through G.
But there's also sharps and flats and so forth.
But you know what?
Maybe we just need a number to represent each of those possible notes.
And maybe also we could use another number,
just like images use multiple numbers to represent dots,
we could use a number to represent the notes in a song,
but also another number to represent the duration of that note.
How many seconds or milliseconds or beats should you hear that note for.
So you could come up with other formulations, too,
but music, really, can be quantized in the world of computers
into just small pieces of information.
And so long as you and I agree on how to represent it,
that's how these things all work.
And if you've ever wondered why there are JPEGs and PNGs and GIFs and Word
documents and Excel files and all of these different file formats or file
extensions on computers, those file extensions or formats just
represent a whole bunch of humans agreeing
how to store patterns of zeros and ones in a file
so that when those zeros and ones are loaded into a computer for display
or for interpretation, it knows what those patterns represent.
Images are represented slightly differently,
sound and video are represented slightly differently,
but it's all zeros and ones at the end of the day.
So this is all to say, so long as we all agree, ideally around the world,
how to represent information, now we can represent inputs to problems
and hopefully solve problems and get outputs.
So all that remains in problem solving, or really, computer science broadly,
is to look inside of this black box and to consider how you take inputs,
whether it's numbers, letters, images, video, sound,
and convert them into actual solutions.
And so inside of this black box is what we would typically
describe as algorithms.
Algorithms are step by step instructions for solving problems.
They don't even have to involve computers.
We humans can execute algorithms just by following someone else's instructions.
If you've ever prepared something from a cookbook, following a recipe,
you are executing an algorithm step by step.
But unlike a lot of recipes or unlike a lot
of instructions that we humans give to each other,
there's no room for ambiguity in computers.
Computers' algorithms, when implemented by machines,
they really have to be not only correct so
that you get the right outputs that you care about,
but they also need to be precise.
You need to be ever so precise, because unlike we humans who can kind of like
read between the lines and, yeah, I get what you mean,
computers are going to take you literally.
And so when programming a computer, that is, translating an algorithm,
step by step instructions, into some language the computer understands,
the onus is on you to make sure that the computer cannot misinterpret what you
want.
So let's consider one such algorithm.
So on all of our phones, whether iOS or Android or the like,
you have some contacts application.
And that contacts application's probably storing all of your friends
and family members and colleagues, probably alphabetically.
Maybe by first name, maybe by last name, or however
you've organized that device.
Well, the old school version of this happens
to be in paper form, which looks a little something like this, a phone
book.
And inside of an old school phone book really is that exact same idea.
It's much larger.
It's much more much more printed.
But it's the same thing.
There's a whole bunch of names and numbers in a typical phone book,
sorted alphabetically just like your own Android phone or iOS
phone might be as well.
So suppose we want to solve a problem.
And the input to that problem is not only this phone book, but also
the name of someone to look up the number for.
So my own name, for instance.
If I want to look up my phone number, or you do, you might open up this book
and start looking for David, for instance,
if we assume that it's sorted by first name.
I don't see David on the first page, so I move on to the second.
I don't see myself there, so I move on to the third.
I don't see myself there so I move on to the fourth.
And so forth, one page at a time, looking for my name and, in turn,
my number.
Well, if correctness is important-- let me ask that question first.
Is this algorithm, turning the pages, step by step,
looking for David correct?
What do you think?
Within Zoom, you should see some icons under the participants
window labeled yes and no.
If you'd like to go ahead and vote virtually, yes or no,
is this algorithm correct?
One page at a time, looking for myself.
Never mind the fact that this is yellow pages,
and so I'm not going to be anywhere in the phone book,
but indeed, we'll assume it contains humans as well.
All right.
So it looks like the algorithm is indeed correct,
but it's terribly, terribly slow.
And that's OK, because one of the ideas we're
going to consider in CS50 and in turn, computer science,
is not only the correctness of an algorithm, but also the efficiency.
How well designed is the algorithm?
This is correct.
It's just incredibly, incredibly tedious and slow.
But I will find myself.
But, of course, we can do better.
Instead of looking for myself one page at a time, why don't I do one page,
let me do two, four, six, eight, 10.
It sounds faster and it is faster.
I'm going twice as fast through the phone book looking for myself.
Is this algorithm correct?
Let me go to someone in the audience this time.
Is this algorithm of searching for someone's name two pages at a time
correct?
Because I claim it's more efficient.
I claim it's better designed because I'll solve the problem twice as fast.
Aneka, what do you think?
AUDIENCE: No, because you might skip your name on a page.
DAVID J MALAN: Yeah, I might skip my name on a page.
And let me ask a follow up question.
Can I fix this?
Do I have to throw out the whole algorithm
or can we at least fix this problem, do you think?
AUDIENCE: I think whatever page you flip to, it would help to see,
like, what name is there and maybe see if your name would
come before or after.
DAVID J MALAN: Nice.
So that's exactly the right intuition.
I don't think we have to completely sacrifice the idea of speeding up
this algorithm by moving twice as fast.
But as you propose, if I go too far-- maybe I get to the E section,
which is one letter too late--
I should at least double back one page.
Because I could get unlucky, and maybe David
is kind of sandwiched in between two pages, at which point
I might fly by, get to the end of the phone book, say, no, there's no David,
and I just got unlucky with 50% probability.
But as you propose, I can at least recover and sort of conditionally
ask myself, wait a minute, maybe I just missed it, and double back.
So I can get the overall speed improvement,
but then at least fix that kind of mistake or bug.
And bug, a term of our-- in programming, a bug
is just a mistake in a program, or a mistake, more
generally, in an algorithm.
But honestly, none of us are going to do that.
When we actually go to search for someone in a phone book,
just like our phones do, they typically don't start at the top
and go to the bottom.
And computers do exactly what you might do more intuitively.
They'll probably go roughly to the middle.
Maybe they'll skew a little to the left, if you know
D is toward the start of an alphabet.
But, no I open to the middle sort of sloppily, and I'm in the M section.
So what do I know when I'm in the M section about this problem?
Let me call on one more person.
I'm in the M section.
What would you do as a human now, taking this as input to solve this problem?
What do I know about the location, of course, of my name in the phone book?
What decision can I make here?
What decision can I make?
Kyle, what do you think?
AUDIENCE: Yeah.
So from the M onwards, you know that your name won't be there for sure.
DAVID J MALAN: Yeah, so my name is not going to be in the M section.
But thanks to the alphabetization of the phone book, I at least know,
you know what?
I can take a huge bite out of this problem
and tear the problem in half, both metaphorically and also literally,
in the case of a phone book.
And I can literally throw half of the problem away.
And so if I started with something like 1,000 pages in this phone book
or 1,000 contacts in my phone, just by going to the middle,
roughly, and taking a look to the left and the right, I can decide,
as you note, well, it's not on the page I'm looking for.
But I can decide it's to the left or to the right.
I know D comes before M. And so now I can go to the left.
And you know what's interesting here, is that I
can use that exact same algorithm.
I don't have to think any differently.
I can apply the same logic, open to the middle of this half of the phone, book
and now I see I'm in the G section.
So I'm still a little too far.
But again, I can tear half the problem away, throw it down
and now I've gone from, like 1,000 pages to 500 pages to 250 pages.
If I do this again, I might find myself, oh, I made it to the C section now.
I can tear the problem in half again, throw the left half away,
and now I'm down to just 125 pages.
Now, that's still a lot, but my god.
I've gone from 1,000 to 500 to 250 to 125.
That is way faster than going from 1,000 to 999 to 998,
and it's even faster than going from 1,000 to 998 to 996 to 994.
Both of those algorithms are going to take me much longer as well.
We have this visualization made by Brian, wonderfully,
that depicts 1,024 page phone book with one page being flipped at a time.
And now we're down to 996, 995.
I mean, honestly, this isn't all that enlightening.
It's going to take forever to find David or any name in a phone book
when starting at that kind of pace with that algorithm.
But what if, instead, I'm a little smarter
and I'm a little more intuitive?
And I harness the intuition that probably you had and I
start with 1,024 pages again, and this time
divide and conquer, half at a time, splitting the problem in half?
Tearing the phone book in half, I get down to just one page.
And if we actually do out the math, if you start at like 1,000-plus pages,
it will only take me 10 total tears of that phone book in order to get down
to my number, 949-468-2750.
So that just is to say that the third algorithm is not only correct, just
as the first one definitely was and the second one could be with that bug fix,
but it's also much better designed.
It's much more efficient.
And so we can see this a little graphically as well.
Let me go ahead and propose not a numerical analysis or anything
like that.
But just something that's a little visual like this.
So if I have an x-axis here that represents
horizontally the size of the problem, the number of pages in a phone book,
and vertically on the y-axis, the amount of time required to solve a problem.
What co these algorithms look like, if we just kind of chart them?
Well, the first algorithm, depicted here in red, it's just a straight line.
It's a slope of one because there is this one to one
relationship between number of pages and the amount of time
it takes me to solve it.
For every new page of that phone book, maybe year after year,
if the phone book grows, it's going to take me
one more step to look for myself or anyone else,
potentially, in that phone book.
Unless I get lucky and they're early in the phone book, but one more
page means one more page turn.
The second algorithm is actually better.
It's still a straight line.
So it's still a linear relationship.
But for every two pages in the phone book it takes me one more step.
Two pages, one turn.
Two pages, one turn.
So it's strictly better than the first algorithm.
Why?
Well, if we consider this-- if the size of the problem is,
maybe, here, for instance.
So if we assume, for the sake of discussion, maybe
the phone book has this many pages depicted with this dotted line.
Well, how much time is it going to take the second algorithm
to find someone in that phone book?
It's going to take this amount of time, right?
Where those two lines intersect.
If you're using the first algorithm, though, going one page at a time,
it's actually going to take this much time, which is literally twice as much.
So they're both correct, assuming we double back as needed
if I go too far past a name.
But both of those are sort of fundamentally the same.
They're the same shape, and, honestly, they both
felt slow to say and to act out.
The third algorithm, if we were to graph it,
has a fundamentally different relationship
between the size of the problem and the time required to solve the problem.
The line goes up, up, up, up, as it should,
because the more pages there are, the more time it's going to take to solve,
but notice how much more slowly it goes up.
This thing barely starts to rise as the size of the problem
gets bigger and bigger and bigger.
And why is that, intuitively?
Well, here, what's powerful is, suppose that phone book, next year,
for whatever reason, doubled in size.
Maybe Cambridge and Allston, Massachusetts merged together into one
big phone book, so there's 2,000-some-odd pages now instead.
How many more steps would it take next year
to search for someone in that phone book?
One.
One more step.
And so if you look way out here along this green line,
doubling the size of the phone book, the line
itself is only going to rise ever so slightly because no big deal.
With that third algorithm you're taking much bigger bites out of the problem.
And so this, too, speaks to what computer science and what programming
are ultimately like.
Harnessing ideas that you come into the class with
and that you might use in your everyday life,
but you don't necessarily think about how you might represent problems
using those algorithms and how you might translate them to computer speak.
And indeed, one way we'll start to think about algorithms
is not only their correctness, but how well designed they are.
And so for instance here, I've deliberately
labeled these three lines n, n over 2, and log base 2 over n.
That just means that if we use n as number-- so computer scientists tend
to use n as a variable, much like a mathematician might say x or y or z,
n for number.
And so the first red line is the running time,
the number of steps it might take to solve a problem
might be, in the worst case, n.
If there's n pages in the phone book, maybe I'm looking for someone way
at the end of the phone book and it's going
to take me all n steps to find them.
The second algorithm is going to take half as many steps.
So we express that as n divided by 2, because if we're
doing two pages at a time we'll get to the end of the phone book--
if we're looking for someone whose name starts with Z, for instance--
twice as fast.
But the third algorithm, if you're a little rusty on the mathematics,
is represented as a logarithm with a base of 2.
And this just means that this graph, the green line
describes how much time it takes to solve a problem when on each pass,
on each step, you are dividing the problem, in this case, by half.
The other two algorithms are taking one or two bites out of the problem.
The third algorithm was taking half of the whole problem at a time.
And that's what made it all the more powerful.
So when it comes to programming now, we need
to translate these things called algorithms to code.
Or, in this case, let's call it pseudocode.
And in just a bit, we'll focus on an actual programming language,
albeit a graphical one.
But for now let's just consider some of the constructs or sort
of fundamental ideas that are going to be useful to leverage
here on out in this class.
So let me propose that what I really just did verbally
can be translated into pseudocode, which is like an algorithm implemented
in English, or whatever your spoken or written language is.
But the key is that it's got to be correct,
and ideally it had better be precise so that there's no ambiguity.
Step one was, indeed, what I did.
Pick up phone book.
Step two, open to middle of phone book.
Step three, look at page.
And indeed I did that.
And now things got interesting.
Step four, if person--
David, in my case-- is on the page, what do I want to do?
Well, I should probably call that person.
The problem is solved.
I've gotten my output, the person's number.
But there's another possibility, not if the person's on the page
but, rather if the person is earlier in the book--
and that is what happened a moment ago.
If I ended up on M, but I'm looking for David, that's to the left,
I should then do what?
Open to the middle of the left half of the book.
And that's indeed what I did.
And I sort of gratuitously tore the problem in half.
But algorithmically, I just looked at the left half of the book next.
What do I do next?
Well, really, that's the point at which I
proposed that the algorithm is now just repeatable, again and again,
and so we'll say go back to line three.
Why?
Well, starting at line three, I have an algorithm
for looking up someone in a phone book.
It just so happens the phone book now is half as large.
But there's another case.
What if the person is later in the book?
I wasn't searching for David, which starts with D,
but someone else's name that's toward the end of the alphabet.
Well, then if that person is later in the book, same idea.
Open to the middle of the right half of the book,
and then again, go back to step three.
But lastly, there's a fourth possibility.
There's a fourth possibility.
Either the person's in the phone book, or they're to the left
or they're to the right, or, frankly, they are just not there at all.
And this last point, though somewhat subtle, is so important.
Odds are all of us on our Macs, PCs.
Maybe even phones, have had that very frustrating experience where
your computer hangs, you get the stupid spinning beachball or hourglass,
the thing freezes or just reboots, you know, something goes wrong
and it's sort of inexplicable.
And you might think it's your fault, but really it's
usually the programmer's fault who wrote the software that you're
using on your computer or your device.
Why?
Very often, that programmer, for whatever reason,
did not anticipate a possible scenario.
In this case, there's four scenarios, but you
could imagine kind of forgetting the fact that, oh, well maybe David's
not even in this phone book.
But you'd better handle that scenario.
And when you have a computer that freezes or hangs
or reboots or just something goes awry, that
is quite often quite simply because a human did not
code for some possible scenario.
So what are the fundamental constructs we've
seen here that we're going to continue seeing in class?
Well, highlighted in yellow now are really some verbs or actions
that we exercised with that phone book.
These are, in general, in programming called functions.
A function is an action or a verb.
It's a statement that gets the computer to do something.
Next highlighted here are what we'll call conditions or branches.
These are sort of the proverbial forks in the road.
You could either do this or this or maybe this other thing.
And you can have one decision to make or two or three or four,
however many conditions make sense logically.
We'll call those conditions.
But how do you decide which fork in the road to take?
Whether to do this or that or this other thing?
For that we need something called Boolean expressions.
A Boolean expression it's just a question
whose answer is yes or no, or true or false, or, frankly, one or zero.
All of those would be equivalent for our purposes.
So person on page.
That's a yes or no question.
Person earlier in book?
That too is a question.
Person later in book is a third question as well.
So if you can imagine a yes-no answer, a true-false answer, a one-zero answer,
that is what gives us these things called Boolean expressions.
And then lastly, in yellow here are these things.
Go back to line three.
This will induce what we'll call a loop or a cycle,
which is just a programming construct or principle of an algorithm that
gets you to do something again and again so you
don't have to write 100-line algorithm.
You can write a 13-line algorithm and reuse parts of it again and again.
And so we'll begin now, and we'll begin CS50 with a look
at an actual programming language, one that you might have used recently
or as younger kids, known as Scratch, which is a graphical programming
language which, while it might be very familiar to some of you,
it actually represents a lot of these programming fundamentals
that we'll use as this ground for transitioning in just one week
to a more traditional more old school language,
known as C, which is entirely text and keyboard-based.
But we'll see in all of the languages we look at in CS50,
these things called functions and conditions, Boolean expressions
and loops, and today, in just a moment, we'll
also see some other features that we describe as variables, not unlike x, y,
and z in math, threads, which allow a computer to do, it would seem,
multiple things at once, events, and yet other features as well.
And so from here, we transition from pseudocode to actual code.
And what you see on the screen here is an example
of a language called C, where we'll spend a good amount of time
this semester.
This is the older school text-based, keyboard-based language
to which I referred earlier.
But this language is a bit cryptic.
And certainly at first glance, you might wonder why is the hash symbol there,
the angled brackets, the parentheses, the curly braces, the semicolon,
the quotes, I mean, my god, there is so much syntax to what is on the screen
now.
And you can probably guess what this program does.
Let me just go quickly to the audience.
What, anyone, does this program probably do, even if you've never
programmed a computer before?
AUDIENCE: It just prints out hello, comma, world.
DAVID J MALAN: Exactly.
It just prints hello, world.
And my god, like, look at all of the syntax and all of the keystrokes
we had to type just to command the computer to do that.
And so by contrast today is Scratch.
We'll allow ourselves for just today to look at something much more
friendly, much more graphical, that will allow us to explore these very ideas
and set the stage for more sophisticated, more traditional
languages next week and beyond, but in the context
where we don't have to worry about parentheses, semicolons, curly braces,
and where even these keys are on the keyboard.
So allow me to introduce you, then, to Scratch,
developed by some of our friends down the road
here in Cambridge at MIT's Media Lab.
You can play along at home here on out if you would like at scratch.mit.edu.
It's web-based, but there's also an offline version
if you tend not to have the best of internet.
But the user interface would typically look like this.
And a quick tour.
So here on scratch.mit.edu, when you go to create
a project via the button on the interface, you'll see first Scratch,
the namesake of the program, this cat who
lives in this little rectangular world in which you can move up,
down, left, or right.
But the cat can be transformed into any number of other characters,
or what we'll call sprites, visual representations thereof.
On the left here, now, are all of the building blocks that come with Scratch.
All of the programming constructs available to you
in the form of puzzle pieces.
And you'll notice that they're categorized according
to color and description and there's a whole bunch of puzzle pieces
that rather say what they do.
And today the goal is not to go into the weeds of all of these various puzzle
pieces, but to highlight some of the fundamental ideas that are possible.
And we'll explore those ideas via the middle of the screen here.
We'll be able, in just a moment, to start dragging and dropping
these puzzle pieces onto this larger screen
and interlock them together, if it makes logical sense to do so.
Finally, for the most sophisticated programs,
we can actually create yet more characters or sprites
and actually have a lot of interactions on the screen as well.
But let's go ahead and dive in with just an example quite quickly.
I'm going to go ahead on my screen and go, indeed, to scratch.mit.edu.
And you're welcome to play along at home as well.
And I'm going to click Create in order to get into exactly that interface.
You do not need to make an account from the get go unless you would like.
And let me go ahead and start creating a program.
The very first program that was once written, by lore,
was quite simply what Iris proposed as "Hello World," a program that
prints on the screen hello, world.
Well, how can we do that?
Well, I can probably do this quite quickly
because I've used the interface before, but the goal
for you at hand if you've never used this before,
with the course's first problem set or programming assignment, really
is just to get your hands dirty and explore and poke around.
And odds are, the ideas you are looking for, you'll find eventually pop out.
And the first one I'm going to try out is this one here.
This puzzle piece that's a little yellow or orange in color.
It's in the Events category, and it's called when green flag clicked.
This is of interest, because if I go to Scratch's stage over here,
you'll see at top left there's a green flag that's going to signify go,
and a red stop sign that's going to signify stop.
So if I want something to happen when I click that green flag,
I'm going to start with this puzzle piece here.
Now I'm going to go over into the Looks category.
And in the Looks category, there's a whole bunch of blocks.
But we're going to keep it simple here.
I'm going to go ahead and just say the canonical, as Iris noted, hello, comma,
world.
I'll zoom back out.
I'll move over to Scratch here, and I'm going to click now the green flag.
And voila, hello, world.
So that is my-- and perhaps, soon, your-- very first program,
using in this language Scratch.
But, of course, this isn't terribly interesting.
Might be gratifying for the very first time.
But it's not something you'd want to play again and again.
But we can make this thing much more interactive
and we can start to layer these building blocks
and have an algorithm more like searching that phone book,
that has multiple steps.
So let me go ahead and stop that program.
And let me explore a little bit instead.
Let me go under Sensing this time, this blue category.
And you'll see this block here.
Ask what's your name, and wait.
But notice that what's your name is in this white oval,
and that implies that I can change what the question is if I want,
but I'm fine with that question for now.
And let me go ahead and first get rid of these blocks,
and give myself when green flag clicked, and this time start under Sensing
with ask what's your name and wait.
But notice that this is kind of a special block.
It comes with a second block, a so-called variable.
It turns out that this ask puzzle piece is literally
going to ask the human who's playing this game a question,
and it's going to store the answer to that question in a variable, depicted
here as this blue oval, called answer.
Just like in math, an x, a y, or a z.
So what could I do with that.
Well, let me again go to Looks.
Let me go to say hello, but this time, you know what?
Let me go ahead and say hello, comma, and then-- all right,
let me give myself a second say block.
But I don't want to say hello again.
So I'm going to delete that.
But I'm going to go back to Sensing and I'm going to drag and drop answer.
Now it looks a little too big, but notice if I get close to it,
it sort of magnetically wants to connect.
And indeed, Scratch will grow to fill the puzzle piece for me.
So now I have a program, it would seem, a program written in Scratch,
a piece of software written in Scratch that's going to, when the green flag is
clicked, ask what's your name, and wait-- that's our function--
say hello--
that's another function-- and then it's going
to say answer, whatever the human typed in.
Well, let me go over to Scratch's world here and click the green flag.
Notice the cat is asking me what's your name.
I type in David and enter.
Huh.
I only see David.
Well, maybe I did something wrong.
Let me do it again.
Green flag, D-A-V-I-D, enter.
Hmm.
What's going on?
This seems to be a bug, because I'm pretty sure I have three functions,
ask, say, and say.
But I feel like I'm missing the second instruction.
Any thoughts on what bug I have made?
What might explain this?

Natalie, is it?
AUDIENCE: So you replaced the output with the same function.
DAVID J MALAN: Yeah.
I replaced the output with the same function.
And honestly, even though we're using a fairly simple program, Scratch,
my Mac is actually pretty fast.
And your PC or your Mac or your phone is pretty fast.
And even though Scratch is saying hello and saying answer, as Natalie notes,
the answer is sort of overwhelming to say, because I didn't so much as pause.
So I could go in and find a block-- there's
a wait block that could allow me to insert an arbitrary pause.
But I really want this to be one breath.
I want it to be hello, comma, David, all at once.
So how can I do that?
Well, let me go under Operations.
And it turns out there's a whole bunch of math-related things here,
but also some English or language-related things down here.
Join apple banana.
Now this has nothing to do with apples and bananas.
Those are just placeholders, but there's this puzzle piece here
that I can drag and drop.
And you know what?
Let me go ahead and do this.
Let me replace the first input to say, and let me join hello comma, and then
not banana, but let me drag the answer--
and notice that will drop in place.
Let me throw this other block away.
To delete things, you can just drag them over to the left and let go.
And now notice that I have a program that's asking what's your name
and then I'm going to say the result of joining hello and answer.
And let me go ahead and play this now, after stopping the old one.
What's your name?
I type in David, enter, and voila.
As Natalie notes, now it's not tripping over itself,
clobbering what was previously there.
Now I'm getting it all in one breath.
Now the program is getting a little more interesting,
but the paradigm is no different from before.
In fact, let me propose that everything we've just done
is fitting perfectly into this whole mental model of what
it means to solve problems and what computer science itself is.
So for instance, if this is the problem to be solved
and I've got inputs and outputs are my goal and an algorithm in between,
let's consider how Scratch even fits into this mental model.
My input to the very first program that we wrote a moment ago
was literally hello, world in its own oval.
The algorithm was implemented as a function in Scratch called say.
So an algorithm, step by step instructions,
a function is the computer's implementation of an algorithm.
In this case, a function called say.
The output, of course, was the cat saying hello, world.
But things got more interesting just now after Natalie's remark, whereby when I
introduce something like ask what's your name and then wait,
notice what happens this time in the model.
Now the input to the problem is what's your name--
that's the string that comes by default, and I could change it but I didn't.
That's being fed now into the ask block.
And the ask block's purpose in life is to get the cat
to give me an answer like this.
Now, that answer is interesting because I can now join it
in with the word hello as a prefix.
So this block is interesting because notice, the input,
the white oval to the say block actually has another puzzle piece and then
two more puzzle pieces on top of it.
And what's cool here is that when programming functions,
you can have the outputs of one function become the input to another function.
And so the flow here is quite simply this.
Now I have two inputs to the function, both hello, which I wrote,
and answer, which came from the ask block.
The algorithm in question now is the join function, which I just used.
And its output is hopefully going to be hello, comma, David.
But I don't want to see a white oval on the screen saying hello, comma, David.
I want the cat to say hello, comma, David.
So let me go ahead and focus only on the output.
Make it become the input to a final function, which is that say block,
and voila, now the cat says what I want it to.
So again, even as you start to nest, that is, place these puzzle pieces
one on top of the other, all we're doing is passing in inputs
and getting outputs.
Doing something with those outputs and making them inputs, and so forth.
That really is the paradigm, ultimately, of what it means to program.
But we can make the cat do more interesting things.
And just to have a little bit of fun with this,
let me go ahead and dig in to this bottom icon
at the bottom left of the screen.
Scratch has these so-called extensions, where you can really
make it do fancier things as well.
And let me go to Text to Speech at the top right.
So this is using a cloud-based service--
that is some internet-based service--
that's going to send the words that I type out on the internet.
The internet, some server there, is going to respond with a verbalization
now of what it is I just typed.
So let me go ahead and try this.
Let me get rid of the purple say function
and replace it with this speak block.
And let me go ahead and drag in the join puzzle piece
here-- notice it's going to grow to fill,
and I'm not going to use this one anymore.
This time I'm going to hit Stop and I'm going to go ahead
and hit Play once more and type in my name.
And--
COMPUTER: (FEMININE ROBOTIC) Hello, David.
DAVID J MALAN: OK, not a very natural cat sound,
but notice we can set the voice differently.
So notice I can drag this puzzle piece.
And you can even squeeze blocks inside of others.
Notice that it can go wherever you want.
I'll put it at the very top here.
So I could put it in a couple of different places.
Right now the default voice is alto.
Squeak sounds appropriate.
Let's try that.
Typing in my name, David.
COMPUTER: (HIGH PITCHED) Hello, David.
DAVID J MALAN: All right.
Still not very catlike.
Ironically, there is a kitten voice, which if I change it to kitten,
we'll now hear this.
Type in my name and enter.
COMPUTER: (HIGH PITCHED) Meow meow.
DAVID J MALAN: OK, so it doesn't really matter at that point what I type in.
But now this is amazing.
Like, we've gone from just saying hello, world to hello,
David, which is dynamically changing.
If you were to type your name, obviously,
it would say your name instead.
And now, thanks to the cloud, that is, servers on the internet,
we're converting automatically text that the human has just
provided into a sound file--
notes and durations and all of that--
into something my computer can now play.
Well, let's actually make this cat sound a little more like a cat.
Let me go ahead and get rid of those blocks
here, and let me go and give myself now from the sound category,
how about this?
Play sound meow until done.
Now, this is a simple program.
When the green flag is clicked, play sound meow until done.
Here we go.
I'm going to go ahead and hit Play.
[MEOW]
All right, that's it.
If I want to hear the cat meow again, I got to do it again.
[MEOW]
OK, that's great.
I could kind of amuse myself for a while by just clicking--
[MEOW]
--play, but--
[MEOW]
--surely we can do better than this.
You can imagine this--
[MEOW]
--getting tedious quickly.
So how might I get the cat to do this again and again?
Well, you know what?
Let me go ahead and let me just kind of grab a few of these.
Meow, meow, meow, three times.
So now that's two fewer times I have to hit the button.
[MEOWING THREE TIMES RAPIDLY]
All right.
It doesn't seem like the happiest cat.
So let me actually go to Control and let me give him a second break in between.
Wait one second in between here.
Now let me do it again.
[MEOWING THREE TIMES]
OK, slightly happier cat.
But this seems a little messy now.
This is correct.
It is meowing three times.
But let me go to the audience.
Let's now consider design.
Recall that we considered design in the context of the phone book.
The third algorithm was better designed in that it was faster,
it was more efficient, but there's another element
to design, which is that you shouldn't repeat yourself if possible.
So those of you who have programmed before
might know what the solution here might be.
Well, it turns out that go back to line three, we call a loop.
Turns out Scratch supports these things called loops.
And, in fact, there's one staring at me right here.
If I zoom in on the left, notice that under the control blocks,
these orange blocks there's a repeat block.
And even though it says 10 by default, I bet we can change that.
So let me drag that over here.
Let me throw away a lot of this redundancy, this copy paste.
Let me move these puzzle pieces inside of the repeat block,
and it, too, will grow to fit them.
Not a problem.
Let me change the repeat to three.
And now let me reconnect everything.
And now the program is just tighter.
It's using fewer puzzle pieces, or fewer lines of code,
fewer steps, if you will, to achieve the same result.
So now if I click the green flag--
[MEOWING THREE TIMES]
--it's still working.
So you could imagine changing this to any number you want.
There's even a forever block, where we could do it forever,
if the cat's going to do this in perpetuity.
But it's a better program now.
Now it is better designed, because if I want to change the amount of time
the cat is waiting or if I want to change
the total number of times the cat meows, I
can change those details in one place, not in one or two or three,
as by copying and pasting those same puzzle pieces.
Well, what about that forever loop?
What if you do want to do something forever?
What might I want to do?
Well, let's get the cat up and moving.
Let me go under the motion category now.
Let me go to point towards mouse pointer.
So let me zoom in on this.
And every time the cat points toward the mouse pointer,
let's have him take one step.
So I'm going to grab the move some number of steps,
and I'm going to change the 10 to a one.
And now I'm going to hit Play.
And now we have our first program where the cat is
kind of responding to my Mac's cursor.
And I can move it around, and I can kind of get a little goofy,
but it's taking me literally.
It's pointing at the mouse cursor and it's then moving one step.
Now, I can make it move faster.
Let me stop this for a second.
What if I move not one step at a time, but two steps at a time?
And we'll see that now the cat is moving a little faster.
Not quite super fast.
Let's do 20 steps at a time and see what happens.
And this is really the essence of animation.
The more you adjust the number of steps or the number of changes happening
to those pixels per second or per unit of time,
the more that's going to happen visually on the screen.
Well, what more can we do from just following?
Well, you know what?
If I have the ability now to have the cat follow me,
let me try something else altogether.
Let me go ahead and open up another extension.
Let me go into the Pen tool, which is going
to allow me now to draw with, like, a pencil or pen on the screen.
And let me go ahead and still have the cat follow me, I think--
actually, you know what?
Let's change this.
Let's just have him go to where I am.
So there's another block that says go to random position.
I don't want that.
So I'm going to change it by the little triangle menu
here, to go to the mouse pointer.
So now, forever, the cat's just going to go to where the mouse pointer is.
It's not going to glide or do it slowly or quickly.
It's just going to go to wherever the cursor is.
And let me go now to this new Pen category down below.
And how might I do this?
You know what I want?
I want this cat to be able to draw for me.
When I move the cursor up, down, left, right, I
want to actually draw something with ink on the screen.
But I only want to draw something when the pen is down.
Notice on the left that two of the two puzzle pieces I just introduced over
here at left are pen down and pen up.
But there's a piece of missing logic here.
Let me ask the audience how might we go about enhancing this program
so not only does the cat follow my cursor, but I also draw on the screen?
Nicholas, what kinds of solutions would you propose?
AUDIENCE: So what you could do is take an if statement--
so you can control when the pen is up or when the pen is down,
depending on some condition that you have.
Like, I know a lot of things, you draw with the mouse click,
if the mouse is on, then you can say the pen is down.
And when the mouse click is not on, your pen is up.
And then while it follows it forever it also
senses to see if your mouse click is on or off.
I don't really know.
DAVID J MALAN: No, you really do know.
That was, like, perfect.
Because you took this principle of having the forever
block not only go to the mouse pointer, but you proposed
asking a question by a condition.
So let me actually go under Control, where
I happen to know this puzzle piece is, and notice similar to our phone book
pseudocode, where I said if else, if else, if else, well,
here there's only two questions, I think, as you're proposing.
Is the mouse button down or up?
So I think we can get away with just an if else.
So let me go ahead and drag this below the go to mouse pointer.
And then notice this little trapezoid-like shape in the middle
here.
Let me go to Sensing here.
And notice if I scroll down-- yep, there it is.
On the left, notice this one?
Mouse down, question mark?
These are our Boolean expressions.
Let me drag that Boolean expression into that similar shape.
It's going to grow to fit it.
And then what do I want to do?
If the mouse is down, I think I want to put the pen down.
Else, if the mouse is implicitly up, let me go ahead and put the pen up
like this.
Well, let me go ahead and full screen this, just
so we can see a little better.
Let me hit Play.
And now the cat is following me, as promised.
But this is now a drawing cat.
If I click the mouse button, I can say something like, very poorly in cursive,
Hello.
Sort of.
Been a long time since I've done cursive.
So we now have the cat actually drawing something.
And honestly, it's a little ridiculous that it's a cat drawing.
But you know what?
Scratch has these costumes.
We could go at top left here, and even though Scratch comes with two cat
costumes, we could change it to be a pen or a marker or, really, anything
we want.
Because at the end of the day, this sprite
is really just a character on the screen that
can take any form that we might want.
Well, how can we take this further?
I like this introduction of conditions and loops,
but there's some other principles we can introduce here.
Let me go ahead and start a new program here altogether.
And let's see if we can't start counting up
and start keeping track of information.
So for this time, let's do this.
When the green flag is clicked, this time let's go under variables
and let's give ourselves a new variable.
Scratch lets you create puzzle pieces, this one being a variable,
and I'm going to call this a counter.
Just something that's going to keep count from one on up.
Now this has given me some custom puzzle pieces over here
called counter, and then the default my variable, which was there already.
And I'm going to go ahead and do this.
I'm going to set the counter initially equal to one.
And then I'm going to do something forever.
Let me grab one of those forever blocks.
And I want the cat now to do this forever.
I want it to just say whatever the current count is.
So I don't want it to say hello for two seconds.
I want it to say something for one second, let's say.
So I'm going to go back to variables.
And I'm going to grab this new circular shape, counter, that I created
and drag it right there.
So you can read this literally top to bottom.
So counter to one, then forever say the counter for one second.
But if we don't want the cat to say the same number again and again and again,
let's go ahead and change the counter by one.
And that's implicitly going to add one to the counter.
Now if I go ahead and hit Play, we see a cat
that's counting from one to two to three,
and it's going to count up, ideally, all the way to infinity.
The difference being now, we have this feature
of actually using a variable, a variable that's keeping
track of some amount of information.
In this case, the number that's constantly being updated,
and the screen is being redrawn again and again.
Well, now let me go ahead and just start opening
a few programs that I wrote in advance, just
so that we can get a tour of some of those.
I've got this program called Bounce that works a little something like this.
And this, too, is part of programming.
Not only writing your own code, but reading your own code.
And let me go ahead and zoom in on this, which I've already created,
and consider what it says.
First set, rotation style, left, right.
This is just a fix what would otherwise be a bug where the cat accidentally
ends up upside down.
But let me wave my hand at that.
This is the interesting part.
Forever have the cat moved 10 steps.
And then if it's touching the edge, then turn around 180 degrees.
So now we can reintroduce the idea of animation.
But not that's driven by me, the human, with my cursor.
I can now make a game, and interactive piece of art, or anything
now where the cat is self-driven.
Because when I hit Play now, notice that it's
moving back and forth, back and forth.
And if it is touching the edge and the answer
to that Boolean question is, actually, yes or true or one,
then it's going to turn 180 degrees.
But this looks kind of stupid, admittedly.
You know, one, the cat, yes, is bouncing off the screen,
which is maybe a little unrealistic.
But he's not really walking.
He's gliding.
But this is the thing about animation.
Just as we noted before that videos, at the end of the day,
are really just images flying across the screen--
you know what?
I bet we can create our own illusion of movement, just like in a real video,
by taking not just one costume, the cat with his feet like this.
What if we gave ourselves a second costume, where it's almost the same
but his feet are slightly differently positioned?
Just like the paper based flipbook that we looked at earlier.
And you know what?
I bet if I toggle between these two costumes,
changing the condition of the cat again and again,
I bet we can create the illusion of actual movement.
And that's what we have here in this other bounce example.
In this other bounce example, we have the cat now moving
not only back and forth, but notice this purple puzzle piece.
After it bounces off the edge, or considers bouncing off the edge,
it constantly changes its costume to the next one, to the next one,
to the next one, essentially alternating between the two.
So now it's not quite perfect.
Like, it has what we call very low frame rate.
This is like watching a really bad animated GIF online
that only has two different frames in it.
But it looks more like he's walking and much less
like he's gliding back and forth on the screen.
So we can actually have some fun with this, too.
Scratch support sounds.
So, for instance, here's the meow we've heard before.
[MEOW]
I can record my own, though, if I click this little plus icon down here.
Click Record, and allow Scratch to access my microphone.
Click OK a couple of times.
Here we go.
Let me record my own voice.
Ouch.
All right.
That's what the word Ouch looks like, at least when I pronounce it.
I can trim off the beginning here.
Let me save that.
I'm going to give this recording a name, Ouch,
and now let me go back to my code.
And under the sound block, you know what?
Let me go ahead and say this.
If I'm touching the edge, not only do I want to turn 180 degrees.
Now I can kind of make this a little more playful.
COMPUTER: Ouch.
Ouch.
Ouch.
DAVID J MALAN: All right.
Still not very catlike, but again, we're just layering and layering.
And the takeaway here really is, as these programs
get more and more complicated, the goal should never be, when writing code,
whether it's in Scratch or C or eventually
Python in this class or others, to just start and try
to implement your entire vision.
Notice with every one of these programs that I wrote from scratch,
no pun intended, did I start small and add one or two or three puzzle
pieces, building up from something simple to something more complex.
And you know what?
I bet if we synthesize some of these ideas, we can do yet other things too.
Here's another example that involves, perhaps, petting a cat.
Let me go ahead and see inside this program.
This one's relatively simple, but it's not doing anything just yet.
I already hit the green flag.
Let me Zoom in on the code, and you can, perhaps, now read my own code
that I wrote in advance.
The cat is forever asking the question, if touching mouse pointer then
play that sound meow until done.
Well, it would seem that even though the program is running,
it's not doing anything.
But it is.
It's waiting for something to happen.
So let me move my cursor over the cat like--
[MEOW]
--this.
[MEOW]
So it would seem, and if I leave it on there, he'll keep meowing.
And it's kind of like a program that's petting a cat.
And so you can imagine now having conditions
inside of loops that are using Boolean expressions to decide
exactly what you want something to do.
And even more powerfully, even in a language like Scratch can we do this.
Let me open up the sea lion here, who has a very distinct bark.
But he's demonstrative now of a program that has multiple scripts.
So inside of this Scratch project now, we're not just one program but two.
Notice both of which start when a green flag is clicked.
And let me put them both onto the screen.
And it looks longer.
But that's just because the puzzle pieces are growing to fit each other.
Let's go ahead and hit Play on this.
Play
[SEA LION BARKING]
Notice that every second or so, the sea lion is barking.
And frankly, this gets annoying quickly.
But how can I stop it?
Well, let me go ahead and look over here on the left while it's still barking.
Notice the sea lion is forever asking a question.
If muted equals false, start sounds sea lion, think hi hi hi for two seconds.
So what is muted?
Well, the shape of it, recall, represents
a variable, like x or y or z, which is just some way of retaining information.
So this is like saying, is the value of the muted variable false?
If so, you should bark, because if it's false muted, if it's not muted,
go ahead and play the sea lion sound.
But my god, lets-- on the right here, notice there's another program.
When the green flag is clicked, forever ask the question.
If the spacebar is pressed, then if muted is true,
set muted to false, else set muted to true.
So the program on the right is going to change the value of muted
from false to true or true to false.
Because, my god.
I've hit the space bar--
[SEA LION BARKING]
And now it's over.
The program is still running, but it's no longer
playing because muted is now true and not false.
Well, what else can we do?
Things can get pretty fancy pretty quickly.
Let me go ahead and create one other program here.
And I'll go ahead and do one with just two blocks.
This one-- let me go into the extensions again, video sensing this time,
and notice there's different types of ways to start programs.
Not every program has to start when you click the green flag.
There's a similar shape here, but this one in green, that
says when video motion is greater than 10.
Like 10% of the screen is moving.
Let me increase that to 50%.
And let me go ahead and do this.
Let me go ahead and find the sound puzzle piece.
Play sound meow until done.
So now I have a two block program.
When video motion is more than 50, play sound meow until done.
Let me zoom out.
And you'll notice that I'm actually in the screen here.
Let me move off stage.
And now nothing is happening.
Let me go and pet the cat, though.
[MEOW]
Let me do it again.
[MEOW]
And again.
So it's using my computer's camera--
[MEOW]
--detecting motion, and then executing that particular program.
So again, with just these simple building blocks,
can we get more and more interesting things to happen.
And you know what?
We can even have multiple sprites.
Let me go ahead and open up an old school game
that you might have played in, like, a swimming pool, perhaps,
growing up, where one person yells out Marco and the other people
are supposed to yell out Polo.
Notice here we have a program with two sprites.
So two puppets, an orange puppet and a blue puppet.
And down here at the bottom, for the very first time,
We have two different sprites' abilities to write programs.
So right now the orange puppet is selected,
which means the program at top left here,
up here, belongs to the orange puppet.
And the orange puppet has been programmed
to say forever, if the keyboard's space key is pressed,
then say Marco for two seconds.
And then here's the new feature.
There's a way in programming to have, like, one program talk
to another, or in this case, one sprite talk to another.
Sort of passing a secret message that you don't see on the screen.
But one program can hear from another.
And that's called broadcasting an event.
And that's what the orange puppet is doing.
If I click on the blue puppet's icon here,
he's not going to do very much at all.
But instead of doing anything when the green flag is clicked,
instead of doing something when the camera sees motion,
he instead is going to, when he receives the event, say Polo for two seconds.
And so in this case, if I hit Play now, nothing happens yet.
But when I do hit the spacebar, orange says Marco, blue says Polo.
But they are written independently.
I've written one program for orange, one program for blue,
and they're somehow communicating.
And speaking of communicating, there's even
more things you can do these days thanks to the internet and the cloud.
Let me go ahead and open up one other new canvas here.
Very quickly give myself a when green flag clicked.
Let me go ahead and ask that same question before, ask what's your name
and wait.
But now let me go into these extensions and let
me find the translate extension, which is, again,
going to use the cloud to send whatever I type in out on the internet
and get back a response, and then say it on the screen here.
So let me go ahead and say something on the screen, like say hello.
But I don't want to say hello.
I want to go back to the Translate category,
and I want to go ahead and translate--
you know what?
I like this block.
Translate something to another language.
But let me get one of those join blocks again, and let me go ahead
and join the word hello and then the name that the person has typed in.
So to get that, I need the answer block again.
So I'm just recreating some of our blocks from earlier.
And notice, before I just did this.
I said the result of joining hello and answer, albeit with a comma last time.
But now let's do this.
Let me take the output of join, make it the input to translate.
Let me translate, say, to Arabic here.
Let me drag and drop into the say block.
So now we have two inputs going into join, join's output going
into the input of translate, and the output of translate going into say.
But the net result is going to be I'll type in my name David and hit Enter.
Hello, David, now in Arabic.
All thanks to these principles of functions, conditions, and loops,
and now even adding in the internet.
Now let's consider finally, before we play a final couple of games.
In conclusion, there's a way to even improve
the design of a lot of what we've done.
In fact, let me go back just a moment to where we left off with that meowing.
And in one of our meowing examples, we had
code that looked like this, where I repeated three times,
recall, and I played the sound meow again and again and again.
And I argued at the time that this was better designed.
Why?
Because I didn't just drag and drop the same puzzle piece again
and again and again.
I used a repeat block, I threw away all of the redundancy,
and I've arguably kept it simple.
I'm using some fancier ideas, but the code is simpler
and it's fewer puzzle pieces now.
But it turns out that there's a missed opportunity
here to apply another principle of computer science,
and this is what we would generally describe as abstraction.
Abstraction is this amazing problem solving
technique that's really just a fancy way of saying
let's take a very complicated idea, or a slightly complicated idea
and simplify it in such a way that we all agree that you can implement it
the complicated way, but let's now just stipulate
that we're going to think about it as on a more simple level.
So let me go over to this same program.
And you know what?
Scratch, curiously, did not anticipate having a meow block.
Like, there is a say block and there's a think block, but there's no meow block.
And that seems appropriate for a program where it comes with a cat built in.
So we can do this.
Just as you can create your own variables, notice at bottom left here,
you can create your own blocks with this pink category.
And if I go here, I'm going to make a block
and I'm going to call this block meow.
And quite simply, I'm going to click OK.
Now notice I get this new puzzle piece that says define meow.
And it's ready to have other pieces connected to it.
How am I going to define meow?
I'm just going to go ahead and drag this over here, because I already
implemented meow before.
And now, notice what I have on the left hand side.
Because I've just made this custom block or puzzle piece,
I now have a pink piece called meow, just as though it came with Scratch.
And now what's compelling about this is that I can sort of think
of this as out of sight, out of mind.
Who cares how meow is implemented?
We know we implemented it earlier.
Let's now just stipulate that we can take for granted it exists.
And if I zoom in now on the new program, now it's more readable in some sense.
It's a little shorter.
It has a fewer puzzle piece.
But it also is more self-descriptive.
I can read my code.
I can look at this code and say, OK, it's
obviously going to repeat three times a meow block.
But let's play that.
[MEOW]
It's no different.
[MEOW]
Two.
[MEOW]
But I bet we can simplify this one step further and make
it a little more flexible.
Let me go ahead and right click or control click on the meow custom block.
And let me actually add an input here that we'll call n.
And let me just add a label that says times.
And let me go ahead and click OK.
And notice that my puzzle piece now looks different.
It looks more like some of MIT's blocks that take input
with these little white ovals.
And, in fact, now notice what I can do.
I can change the definition of meow, as Scratch already has for me,
such that I can now do more inside.
Let me actually disconnect all of this stuff.
Let me move the repeat block to the definition of meow itself.
Let me go ahead and play the sound and wait inside of that repeat block,
but notice this little circle around the end.
Let me just repeat an arbitrary number of times now.
I don't have to worry about hard coding three or 10 or anything else.
And now, out of sight, out of mind, don't have to worry about that anymore.
Let's now just whittle down that increasingly complicated program
that we wrote earlier into, really, just two puzzle pieces.
When the green flag is clicked, meow, sure, three times.
I don't have to know or care any more how meow is implemented.
I just need to know that someone did it for me, whether MIT or maybe
myself, minutes ago.
I'll click play again.
[MEOWING THREE TIMES]
Two, and three.
And so now we have an implementation of abstraction.
Taking a somewhat complicated idea, like getting a cat to meow,
not worrying about the so-called implementation details,
and just defining a puzzle piece or function called meow.
Well, now let's take all of this together
and see some of the creations of some of your predecessors in past terms.
Here, for instance, is a sort of story that one of your classmates years ago
made involving a gingerbread tale.
Let me go ahead and full screen this and click Play.
[MUSIC PLAYING]
And you'll see now that we have multiple sprites already, each of which
have different costumes, and I'm being asked a question.
Would you like an apple?
Yes or no.
So I'm no longer being asked my name.
I'm being asked arbitrary questions.
Sure.
Let me go ahead and have an apple.
I type in yes and hit Enter.
Notice the movement.
We've seen movement before.
[CHOMPING SOUNDS]
[MUSIC PLAYING]
OK, unfortunately, that was the wrong decision to make in this story.
So that's OK.
Let's start it again.
Red stop sign.
[MUSIC PLAYING]
Green flag.
Hello dearie, would you like an apple?
No, let's learn from that lesson.
Cupcake sounds much better.
I'll type yes this time.
Notice, again, the motion.
So there's some animation there.
It's touching the other sprite.
That, too, was unfortunate.
Let's try one last time with this art.
And now we have an apple, no.
Learned a lesson.
Cupcake, no.
Learned a lesson.
OK, now let's see what happens with that loop.
[CACKLING]
[SCREAMING]
[CHOMPING SOUNDS]
OK, surprise ending.
But this is all to say that by taking these building blocks of loops,
conditions, and functions, can you start to make things
that are a little more interactive.
In fact, I myself did something years ago-- the very first thing
I myself wrote in Scratch was actually when I was in graduate school
and cross-registered for a class at MIT, the professor for which
was the author of and the originator of Scratch itself.
And let me go ahead and full screen this and propose
how I thought about solving, now, a fairly large problem back in the day.
Drag as much falling trash into the can as you can.
So what's happening now?
A piece of trash is falling on the screen.
You'll see that it's moving from the top to the bottom,
and we've seen animations like that.
But watch this.
I bet using a condition and a forever loop,
we can make it possible to pick this up.
Notice now the trash is following my cursor, just like the cat was.
And notice if touching this other trash can sprite,
maybe we can even get Oscar to pop out of the can.
And he, then, starts counting up my score, thereby using a variable,
and indeed, as more sprites or more trash falls,
I can continue to play a game in this way.
But here, too, even though things are starting to happen more quickly,
there's more on the screen, the song is playing in the background,
it all reduces to basic building blocks.
And I can't emphasize enough.
When I wrote that first program years ago,
I did not implement what you just saw.
I think the very first thing I did was I googled around
and found Sesame Street's street lamp and I put that on the screen.
And that was sort of version one.
It didn't do anything, but it looked like what I want.
Then I added the trash can.
Then I think I programmed one piece of trash or one sprite to fall.
So I changed the cat to a piece of trash and then
I had it animate from top to bottom.
Then version four or five, I then added a forever loop
and a condition that checks if the mouse button is down,
and if so, I have it follow the mouse pointer.
So I took a big problem and broke it down bit by bit
into much smaller steps.
And this was the same approach that CS50's own Andrew Berry took years ago,
one of our teaching fellows.
The very first year I taught CS50, created his very own first Scratch
project that I thought I'd leave us with here today.
This is a program that he called Raining Men.
It might have a familiar tune, and I would
propose that you consider, when watching this,
our final Scratch program today, how it is that Andrew went about programming
everything that you see.
Now Andrew went off into the real world and didn't pursue computer science,
per se.
He's actually now the general manager for the Cleveland Browns,
which is an American football team.
But this, too, speaks to just what kind of foundation you
can form, irrespective of your intended major, your possible major,
considering, after all, that a lot of the ideas we're going to focus on
in this class are ultimately about problem solving,
programming being just one tool for the trade.
And, indeed, even within the world of sports,
are there so many opportunities nowadays for algorithms, for analysis,
for video simulations thereof, and so many of Andrew's worlds
and your worlds will invariably start to collide
as you begin to build up your own toolkit
and your own understanding thereof.
So in conclusion, we'll take a look at this, Andrews program.
In the meantime, this was CS50, and now it's raining men.
[MUSIC - "IT'S RAINING MEN]

COMPUTER: Hi.
Hi.
We're your weather girls.
Uh huh.
And have we got news for you.
You better listen.
Get ready, all you lonely girls, and leave those umbrellas at home.
All right.
(SINGING) Humidity's rising, barometer's getting low.
Oh.
Uh oh.
According to all sources--
What sources now?
The street's the place to go.
'Cause tonight for the first time, at just about half past 10,
for the first time in history it's gonna start raining men!
It's raining men, hallelujah, it's raining men--
[MUSIC PLAYING]
</p>
    </div>
  );
}

export default App;
