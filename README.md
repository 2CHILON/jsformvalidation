# JavaScript Dynamic Form Validation

A lightweight, vanilla JavaScript implementation of a dual-purpose authentication form (Login and Signup) featuring real-time client-side validation and dynamic UI switching.

## Features

- **Dynamic Form Switching**: Toggle between Signup and Login views seamlessly within the same page.
- **Real-time Input Validation**: 
    - **Name**: Ensures only letters and spaces are used.
    - **Email**: Validates standard email formats using Regex.
    - **Password**: Enforces strong passwords (8+ characters, uppercase, lowercase, numbers, and special characters).
    - **Password Confirmation**: Ensures the passwords match before submission.
- **Form Submission Handling**: Prevents submission if validation errors exist and provides visual success feedback.
- **Clean Architecture**: Centralized validation logic for easy maintenance and scalability.
- **Automatic Redirection**: Automatically switches to the Login view after a successful Signup.

## Technical Stack

- **HTML5**: Semantic structure for forms.
- **CSS3**: (Assumed) For layout and error styling.
- **JavaScript (ES6+)**: Used for DOM manipulation, event handling, and Regex-based validation logic.

## How to Use

1. Clone the repository or download the files.
2. Ensure your HTML file includes the necessary IDs used in `script.js` (e.g., `signup-form`, `login-form`, `success-message`).
3. Open your HTML file in any modern web browser.

## Validation Rules

| Field | Requirement |
| :--- | :--- |
| Name | Letters and spaces only. |
| Email | Must follow standard `user@domain.com` format. |
| Password | 8+ characters, at least 1 uppercase, 1 lowercase, 1 number, and 1 special character. |
| Confirm Password | Must be identical to the password field. |

## File Structure

- `script.js`: Contains all the validation logic and UI toggle functions.
- `index.html`: (Required) The entry point for the form.
- `style.css`: (Required) Handles the display/none logic and error styling.
