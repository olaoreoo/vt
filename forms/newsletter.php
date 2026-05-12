<?php

$userEmail = $_POST['email'];
if ($userEmail) {
    $data['success_db'] = 'success';
} else {
    $data['success_db'] = 'success';
}
echo json_encode($data);
return;