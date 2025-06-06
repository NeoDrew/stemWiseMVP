from . import db

class User(db.Model):
    __tablename__ = 'Users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True)
    password = db.Column(db.String(30), nullable=False)

    def __init__(self, name=None, password=None, email=None):
        self.name = name
        self.password = password
        self.email = email
