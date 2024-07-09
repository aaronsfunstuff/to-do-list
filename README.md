# To-Do List Web Application

This is a simple To-Do List web application built using HTML, CSS, and JavaScript. It allows users to add, edit, delete, and mark tasks as completed. Tasks are saved locally in the browser's storage, so they persist across page reloads.

## Features

- **Add Task**: Users can add new tasks to the list using the input field and "Add Task" button.
- **Edit Task**: Each task has an "Edit" button that allows users to edit the task text.
- **Delete Task**: Tasks can be deleted individually using the "Delete" button.
- **Complete Task**: Tasks can be marked as completed using the "Complete" button, which applies a strikethrough style.
- **Local Storage**: Tasks are saved to local storage, ensuring they are saved and loaded automatically on page refresh.

## How It Works

### Adding a Task

1. **Input Field**: Enter a task in the input field and press "Add Task".
2. **Create Task**: A new task item is added to the list with options to edit, delete, and mark as complete.

### Editing a Task

1. **Edit Button**: Click the "Edit" button next to the task.
2. **Edit Task**: Update the task text in the prompt dialog and press OK.

### Deleting a Task

1. **Delete Button**: Click the "Delete" button next to the task.
2. **Remove Task**: The task is removed from the list and local storage.

### Completing a Task

1. **Complete Button**: Click the "Complete" button next to the task.
2. **Mark as Completed**: The task text is struck through to indicate completion.

### Local Storage

- Tasks are stored in the browser's local storage using JSON format (`localStorage.setItem()` and `localStorage.getItem()`).
- Tasks are loaded from local storage when the page loads (`DOMContentLoaded` event).

