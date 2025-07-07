from flask import Flask, render_template
import json

app = Flask(__name__)

@app.route("/")
def home():

    # Load data from JSON file
    data = load_json_data("experience-projects.json")
    print(data)  # Debugging line to check the loaded data
    return render_template("index.html", data=data)

### Functions
# Load json data for projects, skills, and experience
def load_json_data(filename):
    with open(filename) as file:
        data = json.load(file)
    return data

if __name__ == "__main__":
    app.run(debug=True)
