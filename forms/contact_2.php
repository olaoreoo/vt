<?php


try
{

  $cto = 'info@vt.com';
  $cfrom = ($_POST['email']);
  $cname = ($_POST['name']);
  // $cphone = ($_POST['phone']); // if isset
  $csubject = ($_POST['subject']);
  $tbody = ($_POST['message']);
  sendEmail($cto, $cfrom, $cname, $csubject, $tbody);
  
} catch (\Throwable $th)
{
   echo $th->getMessage();
$data['nofity_error'] = $th->getMessage();
$data['success_db']   = 'error';
$data['message_db']   = 'Ooops, error. Check your connection!';
echo json_encode($data);
return;
}




function sendEmail($cto, $cfrom, $cname, $csubject, $tbody)
{
  $receiving_email_address = 'info@vt.com';
  try
  {
    //
    $headers = "From: " . $cfrom . "\r\n";
    $headers .= "Reply-To: " . $cfrom . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
    //

    if ($send = mail($cto, $csubject, $tbody, $headers))
    {
      $data['success_db'] = 'success';
      $data['email_notify'] = 'success';
      $data['message_db'] = 'Message sent!';

      echo json_encode($data);
      return;
    } else
    {
      $data['success_db'] = 'error';
      $data['message_db'] = 'Ooops, there was an error!';

      echo json_encode($data);
      return;
    }
  } catch (\PDOException $ex)
  {
    //  echo $ex->getMessage();
    $data['nofity_error'] = $ex->getMessage();
    $data['success_db'] = 'error';
    $data['message_db'] = 'Ooops, there was an error. Please check your connection!';

    echo json_encode($data);
    return;
  }
}