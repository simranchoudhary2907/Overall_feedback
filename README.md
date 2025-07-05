# Overall Feedback Form

A modern, interactive feedback form designed for mentor-mentee evaluation systems. This web application provides a comprehensive platform for collecting structured feedback with real-time validation and user-friendly interface.

## 🌟 Features

### 📝 Form Components
- **Mentor Information**: First and last name fields
- **Evaluation Criteria**: 7-point rating system for mentor assessment
- **Emoji Rating**: Visual feedback system with 5 emoji options
- **Comments Section**: Open-ended feedback with character counter
- **Mentee Information**: First and last name fields

### ✨ Interactive Features
- **Real-time Validation**: Instant feedback on form completion
- **Visual Feedback**: Highlighted selections and active states
- **Character Counter**: 500-character limit with visual indicator
- **Error Handling**: Clear error messages for missing fields
- **Success Confirmation**: User-friendly submission confirmation
- **Data Persistence**: Local storage for feedback history

### 🎨 User Experience
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean, professional appearance
- **Accessibility**: Keyboard navigation and screen reader friendly
- **Loading States**: Visual feedback during form submission

## 📁 Project Structure

```
Overall_feedback/
├── index.html          # Main HTML file with form structure
├── style.css           # CSS styling and responsive design
├── script.js           # JavaScript functionality and validation
├── settings.json       # Configuration settings
└── README.md           # This file
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software installation required

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/simranchoudhary2907/Overall_feedback.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd Overall_feedback
   ```

3. **Open the application:**
   - Double-click `index.html` to open in your default browser
   - Or drag `index.html` into your browser window
   - Or use a local server for development

### Using a Local Server (Optional)
For development purposes, you can use a simple HTTP server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have it installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 📋 How to Use

### 1. Fill Out the Form
- **Mentor Name**: Enter the first and last name of the mentor being evaluated
- **Evaluation Section**: Rate each criterion using the radio buttons:
  - Strongly Agree
  - Agree
  - Neutral
  - Disagree
  - Strongly Disagree

### 2. Provide Feedback
- **Emoji Rating**: Click on an emoji to express your overall satisfaction
- **Comments**: Add detailed feedback (up to 500 characters)
- **Mentee Name**: Enter your first and last name

### 3. Submit
- Click the "Submit Feedback" button
- The form will validate all required fields
- If validation passes, you'll see a success message
- If there are errors, they will be displayed clearly

## 🔧 Technical Details

### Technologies Used
- **HTML5**: Semantic markup and form structure
- **CSS3**: Modern styling with flexbox and responsive design
- **Vanilla JavaScript**: No frameworks, pure ES6+ JavaScript
- **Local Storage**: Client-side data persistence

### Browser Compatibility
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Form Validation Rules
- **Mentor Name**: Both first and last name required
- **Mentee Name**: Both first and last name required
- **Evaluation**: All 7 criteria must be answered
- **Emoji Rating**: Must select one emoji
- **Comments**: Optional, but limited to 500 characters

### Data Structure
The form collects data in the following structure:
```javascript
{
  mentor: {
    firstName: "string",
    lastName: "string"
  },
  mentee: {
    firstName: "string",
    lastName: "string"
  },
  evaluation: {
    "My mentor has been readily available and reachable": "Strongly Agree",
    // ... other criteria
  },
  emojiRating: "😊",
  comments: "string",
  timestamp: "2024-01-01T00:00:00.000Z"
}
```

## 🛠️ Customization

### Adding New Evaluation Criteria
1. Open `index.html`
2. Add a new row in the evaluation table
3. Update the `criteriaLabels` array in `script.js`
4. Add corresponding CSS styling if needed

### Modifying Styling
- Edit `style.css` to change colors, fonts, and layout
- The design uses CSS custom properties for easy theming
- Responsive breakpoints are included for mobile optimization

### Extending Functionality
- Add server-side integration in the form submission handler
- Implement data export features
- Add analytics and reporting capabilities
- Integrate with external APIs

## 📊 Data Management

### Local Storage
- Feedback data is automatically saved to browser's localStorage
- Data persists between browser sessions
- Can be accessed via browser developer tools

### Data Export
To export stored feedback data:
```javascript
// In browser console
const feedbackHistory = JSON.parse(localStorage.getItem('feedbackHistory') || '[]');
console.log(JSON.stringify(feedbackHistory, null, 2));
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👥 Authors

- **Simran Choudhary** - *Initial work* - [GitHub Profile](https://github.com/simranchoudhary2907)

## 🙏 Acknowledgments

- Modern web development best practices
- Accessibility guidelines for inclusive design
- User experience principles for intuitive interfaces

## 📞 Support

If you encounter any issues or have questions:
1. Check the browser console for error messages
2. Ensure all files are in the correct directory structure
3. Verify browser compatibility
4. Open an issue on GitHub with detailed information

---

**Version**: 1.0.0  
**Last Updated**: January 2024  
**Status**: Production Ready ✅ 