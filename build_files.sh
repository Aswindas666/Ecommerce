echo " BUILD START"
pip3.11 -m pip install -r requirements.txt
pip3.11 manage.py collectstatic --noinput --clear
echo " BUILD END"