import os

from flask import Flask 


def create_app():
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY = "dev",
        DATABASE = os.path.join(app.instance_path, "toyapi.sqlite"),
    )

    app.config.from_pyfile("config.py", silent=True)

    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    from . import db
    db.init_app(app)

    from . import index
    app.register_blueprint(index.bp)
    app.add_url_rule("/", endpoint="index")

    return app