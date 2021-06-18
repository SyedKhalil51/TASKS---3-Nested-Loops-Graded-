//Pose you’re given an array [ [1, 2], [3, 4], [5, 6] ]. Print all the members of this two-dimensional array using for loop and while nested loops.

var ary = [ [1, 2], [3, 4], [5, 6] ];

//By Using Nested For Loop
document.write("<br>");
document.write("Multidimensional Array Using For Loop");
document.write("<br>");
for(var a =0; a<ary.length; a++) //Outer Array Loop
{
    for(var b =0; b<ary.length; b++) //Inner Array Loop
    {
        document.write(ary[a][b] + "<br>");
    }
}

document.write("<br>");
document.write("Multidimensional Array Using While Loop");
document.write("<br>");

//By Using Nested While Loop

var m = 0;
while(m<ary.length)
{
    var n = 0;
    while(n<ary.length)
    {
        document.write(ary[m][n] +" <br>");
        n++;
    }
    document.write("<br>");
    m++;
}

//Suppose you’re given an array of animals [[‘cat’, ‘rabbit’], [‘pigeon’, ‘parrot’], [‘goldfish’, ‘whale’]].  Now, when you encounter ‘car or ‘rabbit’ inside a nested loop, print ‘pet animals’ in the console. Also, if you encounter ‘pigeon’ or ‘parrot’, print ‘pet birds’. Also, when you encounter ‘goldfish’ or ‘whale’, print ‘fish’


var animals = [["cat", "rabbit"],["pigeon","parrot"],["goldfish","whale"]]  ;

for(var x = 0; x<animals.length; x++)
{
    for(var y = 0; y<animals.length; y++)
    {
        function animals()
        {
            var value = document.getElementById("animals").value;
            if(value == "cat" || value == "rabbit")
            {
                console.log("Pet Animals");
            }
            else if(value == "pigeon" || value == "parrot")
            {
                console.log("Pet Birds");
            }
            else if(value == "goldfish" || value == "whale")
            {
                console.log("Fish");
            }
        }
    }
}