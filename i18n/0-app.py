#!/usr/bin/env python3
"""
Basic flask app implementation
"""
from flask import Flask, render_template


app = Flask(__name__)


@app.route('/')
def home():
    """
    Renders the template
    """
    return render_template('0-index.html')


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)
