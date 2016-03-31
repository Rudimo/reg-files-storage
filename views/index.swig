{% extends 'layout.swig' %}


{% block content %}

    <form action="/" enctype="multipart/form-data" method="POST">
        <div class="form-group">
            <label>affilate ID</label>
            <input name="affilate" type="text" class="form-control">
        </div>

        <div class="form-group">
            <label for="exampleInputFile">file *.reg</label>
            <input type="file" name="upload">
        </div>
        <button type="submit" class="btn btn-default">Добавить</button>
    </form>

{% endblock %}