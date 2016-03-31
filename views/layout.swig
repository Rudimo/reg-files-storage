<!DOCTYPE html>
<html>
<head>
    <title>{{ title }}</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/stylesheets/bootstrap.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="/javascripts/bootstrap.min.js"></script>
</head>
<body>


<div class="container">
    {% block content %}
    {% endblock %}
</div>

</body>
</html>