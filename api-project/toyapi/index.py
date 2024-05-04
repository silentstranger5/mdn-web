import time

from flask import (
    Blueprint, g, current_app, render_template, request, session, url_for
)

from toyapi.db import get_db

bp = Blueprint("index", __name__)

@bp.route("/")
def index():
    now = time.strftime("%a, %d %b %Y %H:%M:%S +0000", time.gmtime())
    path = current_app.instance_path
    return {
        "time": now,
        "path": path
    }