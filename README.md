# Run backend
1. Install with `pip install loguru django djangorestframework psycopg2 djoser djangorestframework_simplejwt django-cors-headres` or use `pip install -r requirements.txt`
2. Create from backend/config/settings-example.py => backend/config/settings.py with yours DB settings 
3. From backend/ run server `python manage.py migrate` and `python manage.py runserver`

# Run frontend
1. Install node.js, npm
2. Install `npm install -g @vue/cli`
3. From frontend/ use `npm run serve` to start development server
 
# Auth methods
1. Use `post` - `/auth/token/login/` - `{username: '', password: ''}` to log in and getting your auth token
2. Use `post` - `/auth/token/logout/` to log out and deactivate token
3. Use `post` - `/auth/users/` - `{username: '', password: '', email: ''}` to create new user and send code on his email
4. Use `post` - `/auth/users/activation/` - `{uid: '', token: ''}` to activate new user (link from his email)

### JWT Auth
1. Use `post` - `/api/token/` - `{username: '', password: ''}` to log in and getting your auth tokens (pair)
2. Use `post` - `/api/token/refresh/` - `{refresh: 'your refresh token'}` to refresh access token
3. Use `post` = `/api/token/verify/` - `{token: 'your access token'}` to verify your current access token