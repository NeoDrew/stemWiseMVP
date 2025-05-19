from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    app.config.from_object('config')
    
    db.init_app(app)

    with app.app_context():
        from . import models
        db.create_all()  # Create tables
        from . import routes  # Import routes

    return app
