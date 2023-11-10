// var Question = [{question:"what is your name",answer:"d"},
// {question:"what is your age",answer:"c"},
// {question:"what is your ex",answer:"a"},
// {question:"what is your next",answer:"c"},
// {question:"what is your name of gf",answer:"d"},
// {question:"what is your ex name ",answer:"b"},
// {question:"are you interst ",answer:"a"},
// {question:"hello you",answer:"d"}
// ,{question:"your love",answer:"c"},
// {question:"choice one",answer:"c"}]
// var opt=[{a:"ram",b:"shyam",c:"radhe",d:"chetany"}]

// function start(){
    
//     document.getElementById("start").hidden=true
//     document.getElementById("1").hidden=false
//     document.getElementById("2").hidden=false
//     document.getElementById("3").hidden=false
//     document.getElementById("4").hidden=false
//     document.getElementById("5").hidden=false
//     document.getElementById("6").hidden=false
//     document.getElementById("7").hidden=false
//     document.getElementById("8").hidden=false
//     document.getElementById("lalit").hidden=false
//     document.getElementById("show").innerHTML=Question[0].question
//     document.getElementById("5").innerHTML=opt[0].a
// }
// let count=1
// function lalit(){
//     document.getElementById("show").innerHTML=Question[count].question
//     count=count+1
// }
var arr=[{question:"Write the place value of 2 in the following numbers:",answer:"d"},
{question:" How many months among the following have 31 days?",answer:"c"},
{question:" ______ comes just before 413.",answer:"c"},
{question:"In 289, the place value of 8 is____________.",answer:"a" },
{question:" Three hundred and one can be written as ______",answer:"c"},
{question:"232, 242, ____ , 262. The missing number in the pattern is ____.",answer:"c"},
{question:"10+43+34=",answer:"a"},
{question:"There are 3 sweets in one packet. How many sweets will be there in 9 packets?",answer:"b"},
{question:" ____ is 200 more than 546.",answer:"d"},
{question:" There are 4 apples in each basket. How many apples will be there in 5 baskets?",answer:"b"}]

var arr1=[{a:764 ,b:82 ,c:678 ,d:992 },
    {a:"june" ,b:"july" ,c:"augest" ,d:"september" },
    {a:401 ,b:490 ,c:412 ,d:444 },
    {a:"ons" ,b:"ten" ,c:"hundernd" ,d:"thoujend" },
    {a:31 ,b:310 ,c:301 ,d:3001 },
    {a:222 ,b:225 ,c:252 ,d:243 },
    {a:87 ,b:97 ,c:77,d:197 },
    {a:12 ,b:27 ,c:9 ,d:3 },
    {a:346 ,b:446 ,c:646 ,d:746  },
    {a:5 ,b:20 ,c:9 ,d:10 }]

    function start(){
    
            document.getElementById("start").hidden=true
            document.getElementById("1").hidden=false
            document.getElementById("2").hidden=false
            document.getElementById("3").hidden=false
            document.getElementById("4").hidden=false
            document.getElementById("5").hidden=false
            document.getElementById("6").hidden=false
            document.getElementById("7").hidden=false
            document.getElementById("8").hidden=false
            document.getElementById("lalit").hidden=false
            document.getElementById("show").innerHTML=arr[0].question
            document.getElementById("5").innerHTML=arr1[0].a
            document.getElementById("6").innerHTML=arr1[0].b
            document.getElementById("7").innerHTML=arr1[0].c
            document.getElementById("8").innerHTML=arr1[0].d
        }
        let count=1
        function lalit(){
            document.getElementById("show").innerHTML=arr[count].question
            document.getElementById("5").innerHTML=arr1[count].a
            document.getElementById("6").innerHTML=arr1[count].b
            document.getElementById("7").innerHTML=arr1[count].c
            document.getElementById("8").innerHTML=arr1[count].d
            document.getElementById("1").checked=false
            document.getElementById("2").checked=false
            document.getElementById("3").checked=false
            document.getElementById("4").checked=false
            count=count+1

            if(count==10){
                document.getElementById('lalit').hidden=true
                document.getElementById("submit").hidden=false
            }
            
    }
    let score=0
    function ram(option){
        let obj={option}
        if(option==arr[count-1].answer){
            score=score+1
        }
        console.log(obj)

    }
    function submit(){
        document.getElementById("score").innerHTML="score:="+score
        document.getElementById("submit").hidden=true
        document.getElementById('1').hidden=true
        document.getElementById('2').hidden=true
        document.getElementById('3').hidden=true
        document.getElementById('4').hidden=true
        document.getElementById('5').hidden=true
        document.getElementById('6').hidden=true
        document.getElementById('7').hidden=true
        document.getElementById('8').hidden=true
        document.getElementById('show').hidden=true
        

    }
