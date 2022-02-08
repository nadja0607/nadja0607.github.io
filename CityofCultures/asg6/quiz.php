<HTML>
<head>
	<link href="../main.css" type="text/css" rel="stylesheet">
</head>
<body>  
  
<?php
// process form and get values from the form
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$answers = array('Question 1'   => 'Hyper Text Markup Language', 
                    'Question 2'   => 'h1',
                    'Question 3'  => 'True',
                    'Question 4'  => 'True',
);
$answersLength = count($answers);
$ans1 = $_POST['html1'];
$ans2 = $_POST['html2'];
$ans3 = $_POST['html3'];
$ans4 = $_POST['html4'];
$score = 0;

if ($ans1 == "Hyper Text Markup Language") {          
    $score = $score + 1;      
}
if ($ans2 == "h1") {          
    $score = $score + 1;      
} 
if ($ans3 == "True") {          
    $score = $score + 1;      
}
if ($ans4 == "True") {          
    $score = $score + 1;      
} 
?>

<div class="container">  
<h1 style="color:white;"> 
<?php
print("Dear $fname $lname, here are your results:");
echo "<br>";
echo "<br>";
print("1. What does HTML stand for?");
echo "<br>";
echo "<br>";
print("Your answer: $ans1");
echo "<br>";
if ($ans1 == "Hyper Text Markup Language") {          
    print("This answer is true.");      
}
else {
    print("This answer is false.");
}
echo "<br>";
echo "<br>";
print("2. Choose the correct HTML element for the largest heading:");
echo "<br>";
echo "<br>";
print("Your answer: $ans2");
echo "<br>";
if ($ans2 == "h1") {          
    print("This answer is true.");      
}
else {
    print("This answer is false.");
}
echo "<br>";
echo "<br>";
print("3. Inline elements are normally displayed without starting a new line.");
echo "<br>";
echo "<br>";
print("Your answer: $ans3");
echo "<br>";
if ($ans3 == "True") {          
    print("This answer is true.");      
}
else {
    print("This answer is false.");
}
echo "<br>";
echo "<br>";
print("4. An iframe is used to display a web page within a web page.");
echo "<br>";
echo "<br>";
print("Your answer: $ans4");
echo "<br>";
if ($ans4 == "True") {          
    print("This answer is true.");      
}
else {
    print("This answer is false.");
}
echo "<br>";
echo "<br>";
echo "<br>";
print("You answered $score questions right.");
echo "<br>";
$result = ($score / 4) * 100;
print("Your score: $result %");
echo "<br>";

?>
</h1>
<h1>
<?php
echo "<br>";
echo "<br>";
print("Right answers:");
echo "<br>";
foreach ($answers as $key => $value){
    print ("<li>$key: $value ");
    }
print ("</ul>");
?>
</h1>

</body>
</html>

