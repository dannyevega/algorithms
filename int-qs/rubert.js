
PROBLEM:
--------
Generate all possible 10 digit phone numbers and
corresponding "words". Words are formed by using any of the
letters corresponding to each digit of the phone number.

e.g. The number 2222222222 maps to the word AAAAAAAAAA. It
also maps to the word BBBBBBBBBB, ABCAAAABBCA, etc.

Here's what the keypad looks like:


         1     2     3
              ABC   DEF

         4     5     6
        GHI   JKL   MNO

         7     8     9
        PQRS  TUV   WXYZ

               0


Here's a sample output:

OUTPUT:
...
234 555 7777 ADG JJL PPQS
234 555 7777 BDG KJL PPQS
...
244 666 8888 CGG MMM TUVT
...
888 777 5234 ............
....
....


NOTES:
• Some digits do not have a corresponding letter on the
  phone keypad.  Skip phone numbers with such digits
  (i.e. these should not appear in your output.)
• You must print an exhaustive list.  All printed lines must
  be unique (no duplicates.)
• You do not have to print the spaces between the digits or
  letters as shown in the sample output–that is there to make
  it easy for us to read it.


https://www.apple.com/macbook-air/features/

// 1
doSomething().then(function () {
  return doSomethingElse();
});

// 2
doSomething().then(function () {
  doSomethingElse();
});

// 3
doSomething().then(doSomethingElse());

// 4
doSomething().then(doSomethingElse);
