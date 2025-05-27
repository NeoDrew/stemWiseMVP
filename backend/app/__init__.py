from flask import Flask
from flask_cors import CORS
from .routes import main

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'your-secret-key'
    CORS(app)  # Allow cross-origin requests from React

    app.register_blueprint(main, url_prefix='/api')  # All routes start with /api

    return app
