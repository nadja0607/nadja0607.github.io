<HTML>
<head>
	<link href="../main.css" type="text/css" rel="stylesheet">
</head>
<body>  
    
<?php
// process form and get values from the form
$adj1 = $_POST['adj'];
$adj2 = $_POST['second-adj'];
$noun1 = $_POST['noun'];
$verb1 = $_POST['verb'];
$noun2 = $_POST['second-noun'];
$num = intval($_POST['num']);
$verb2 = $_POST['second-verb'];
$noun3 = $_POST['third-noun'];
?>

<div class="container">
<h1> 

<?php

print("The $adj1 $noun1 $verb1 the $adj2 house.");
print("There she saw a $noun2 $verb2 with $num $noun3.");

?>
</h1>


</body>
</html>

