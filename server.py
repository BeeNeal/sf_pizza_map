from flask import (Flask, jsonify, render_template, redirect, request,
                   flash, session)

app = Flask(__name__)

app.secret_key = "ABC"


@app.route('/')
def index():
    """Pizza Map"""

    return render_template("pizza_map.html")


if __name__ == "__main__":

    app.run(host="0.0.0.0")