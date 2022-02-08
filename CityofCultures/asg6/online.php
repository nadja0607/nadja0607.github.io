<HTML>
<head>
	<link href="../main.css" type="text/css" rel="stylesheet">
</head>
<body>  
  
<?php
// process form and get values from the form
$name = $_POST['name'];
$email = $_POST['email'];
$magnetPrice = 5;
$mugPrice = 10;
$amount = intval($_POST['num']);
$product = $_POST['product'];
$total = 0;
if ($product == 'Mug') {
        $total = $amount * $mugPrice;}
else if ($product == 'Magnet') {
    $total = $amount * $magnetPrice;}
   
?>

<div class="container">  
<h1> 
<?php

print("Dear $name, thank you for you purchase.");
echo "<br>";
print("Here is your receipt:");
echo "<br>";
print("Name: $name");
echo "<br>";
print("Email: $email");
echo "<br>";
?>
</h1>
<h1 style="color:white;">
<?php
print("You ordered:");
echo "<br>";
print("Product: $product");
echo "<br>";
print("Amount: $amount");
echo "<br>";
print("Total: $total");

?>
</h1>


</body>
</html>

