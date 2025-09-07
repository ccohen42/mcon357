import sys
from os.path import abspath, dirname, join

# Add the src directory to the Python path
sys.path.insert(0, abspath(join(dirname(__file__), 'src')))

# Import the app from src directory
from app import app

if __name__ == '__main__':
    app.run(debug=True)