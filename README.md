# Setup
1. install with pip loguru, django, djangorestframework, psycopg2, djoser, djangorestframework_simplejwt or use `pip install -r requirements.txt`
2. from backend/ run server `python manage.py migrate` and `python manage.py runserver`
 
 # Auth methods
1. Use `post` - `/auth/token/login/` - `{username: '', password: ''}` for log in and getting your auth token
2. Use `post` - `/auth/token/logout/` for out and deactivate token
3. Use `post` - `/auth/users/` - `{username: '', password: '', email: ''}` for create new user and send code on his email
4. Use `post` - `/auth/users/activation/` - `{uid: '', token: ''}` for activate new user (link from his email)
