echo " BUILD START"
python3.11 -m  install -r requirements.txt
python3.11 manage.py collectstatic --noinput --clear
echo " BUILD END"
