from flask import Blueprint, render_template, request, flash, redirect, url_for, session
from app.forms import LoginForm, RegisterForm, ForgotForm, EnquiryForm
from functools import wraps

main = Blueprint('main', __name__)

def login_required(test):
    @wraps(test)
    def wrap(*args, **kwargs):
        if 'logged_in' in session:
            return test(*args, **kwargs)
        flash('You need to login first.')
        return redirect(url_for('main.login'))
    return wrap

@main.route('/')
def home():
    return render_template('pages/placeholder.home.html')

@main.route('/about')
def about():
    return render_template('pages/placeholder.about.html')

@main.route('/login')
def login():
    form = LoginForm(request.form)
    return render_template('forms/login.html', form=form)

@main.route('/register')
def register():
    form = RegisterForm(request.form)
    return render_template('forms/register.html', form=form)

@main.route('/forgot')
def forgot():
    form = ForgotForm(request.form)
    return render_template('forms/forgot.html', form=form)

@main.route('/enquiry', methods=['GET', 'POST'])
def enquiry():
    form = EnquiryForm()
    if request.method == 'POST' and form.validate_on_submit():
        return redirect(url_for('main.home'))
    return render_template('forms/enquiry.html', form=form)

@main.app_errorhandler(404)
def not_found_error(error):
    return render_template('errors/404.html'), 404

@main.app_errorhandler(500)
def internal_error(error):
    return render_template('errors/500.html'), 500
