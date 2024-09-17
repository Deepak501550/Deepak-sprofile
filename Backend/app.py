from flask import Flask, request, jsonify

app = Flask(__name__)

# Example of a simple profile storage
profile = {}

@app.route('/api/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message')
    
    # Simple conversation logic
    if 'name' not in profile:
        profile['name'] = user_message
        reply = f"Nice to meet you, {profile['name']}! What is your occupation?"
    elif 'occupation' not in profile:
        profile['occupation'] = user_message
        reply = f"Great! You're a {profile['occupation']}. What are your key skills?"
    elif 'skills' not in profile:
        profile['skills'] = user_message
        reply = "Thank you for sharing! Would you like to generate your profile now?"
    else:
        reply = f"Profile generated: Name: {profile['name']}, Occupation: {profile['occupation']}, Skills: {profile['skills']}"

    return jsonify({'reply': reply})

if __name__ == '__main__':
    app.run(debug=True)
