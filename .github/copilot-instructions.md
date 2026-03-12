# Copilot Instructions for Pomodoro Timer Project

## Project Overview
This is a simple web-based Pomodoro timer application with a 25-minute countdown timer. The app uses vanilla JavaScript for timer logic, Tailwind CSS for styling, and Material Icons for UI elements.

## Architecture
- **Structure**: Organized into `html/`, `css/`, `js/` folders for separation of concerns
- **HTML**: Single page in `html/index.html` with timer display and control buttons
- **CSS**: Styling in `css/index.css` with background image and custom classes
- **JS**: Timer logic in `js/scripts.js` using `setInterval` for countdown

## Key Patterns
- **Timer Logic**: Parse initial time from input value, convert to total seconds, decrement every 1000ms, format display with leading zero for seconds < 10
- **Styling**: Use Tailwind utility classes for layout (e.g., `flex flex-col justify-center items-center h-screen`), custom CSS for specific elements like `.timer` font-size
- **Assets**: Images stored in `css/` folder (background and icons), referenced with relative paths `../css/`

## Development Workflow
- **No build process**: Edit files directly, refresh browser to test
- **Testing**: Manual testing in browser; timer updates every second
- **Adding Features**: 
  - Extend timer logic in `scripts.js` (e.g., add pause/reset functionality)
  - Add new UI elements in `index.html` with Tailwind classes
  - Style in `index.css` for custom properties

## Conventions
- **File Paths**: Use relative paths like `../css/index.css` and `../js/scripts.js`
- **CDN Dependencies**: Load Tailwind and Material Icons from CDN in `<head>`
- **Event Handling**: Use `addEventListener` for button clicks, disable buttons during timer
- **Time Formatting**: Always display as MM:SS with leading zero for single-digit seconds

## Examples
- **Adding a reset button**: In `index.html`, add `<button id="reset" class="controls">Reset</button>`; in `scripts.js`, add event listener to clear interval and reset timer value
- **Changing timer duration**: Modify initial value in HTML input, update logic to handle different starting times
- **Styling new elements**: Use Tailwind for positioning/layout, custom CSS for fonts/colors matching existing `.timer` and `.controls` classes</content>
<parameter name="filePath">/home/ygornn/Documents/Pomodoro project/.github/copilot-instructions.md