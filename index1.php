<!DOCTYPE html>
<html>
<head>
  <title>Twilio IP Messaging Quickstart</title>
  <link rel="shortcut icon" href="//www.twilio.com/marketing/bundles/marketing/img/favicons/favicon.ico">
  <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="index.css">
</head>
<body>
  <header>
  <a href="https://www.twilio.com/docs/api/ip-messaging/guides/quickstart-js" 
    target="_blank">Read the getting started guide
    <i class="fa fa-fw fa-external-link"></i>
  </a>
  </header>

  <section>
    <input id="name" type="text" value="<?php echo $_GET['name']; ?>"/>
  </section>

  <script src="//media.twiliocdn.com/sdk/rtc/js/ip-messaging/v0.9/twilio-ip-messaging.min.js"></script>
  <script src="//media.twiliocdn.com/sdk/js/common/v0.1/twilio-common.min.js"></script>
  <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
  <script src="index1.js" ></script>
</body>
</html>