<?php
$sql_select = 'SELECT * FROM user_data ORDER BY RAND() LIMIT 1';
$result = mysqli_query($conn, $sql_select);
$users_data = mysqli_fetch_all($result, MYSQLI_ASSOC);

?>