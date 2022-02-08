<HTML>
<head>
	<link href="../main.css" type="text/css" rel="stylesheet">
</head>
<body>  
<div class="container">  
<h1>   
<?php
// process form and get values from the form
$num1 = floatval($_POST['num1']);
$num2 = floatval($_POST['num2']);
if(isset($_POST['operator'])){
    $operator = $_POST['operator'];
    switch ($operator) {
        case 'plus':
            $result = $num1 + $num2;
            print("$num1 + $num2 = $result");
            break;
        case 'minus':
            $result = $num1 - $num2;
            print("$num1 - $num2 = $result");
            break;
        case 'multiply':
            $result = $num1 * $num2;
            print("$num1 * $num2 = $result");
            break;
        case 'divide':
            $result = $num1 / $num2;
            print("$num1 / $num2 = $result");
            break;
    }
}
?>

</h1>


</body>
</html>

