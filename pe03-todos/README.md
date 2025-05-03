# INPUT
The application accepts user input through a text field where tasks can be entered. Users type their to-do items, which are stored temporarily in the app’s state. Interaction also occurs via on-screen buttons—specifically, the "Add Todo" button and filter tabs ("ALL," "COMPLETED," and "INCOMPLETE")—which guide how the app processes and displays the tasks.

# PROCESS
When a user submits a new task, the app stores it in a to-do array using React's useState. A to-do object contains an ID, description, and completion status. When an item is tapped, it toggles its completed status. A tab-filtering system utilizing tabs displays todos dynamically based on status. All, from adding to toggling, updates state and re-renders the list as a result. The app also logs new additions to the console for debugging or verification.

# OUTPUT
The app shows a list of tasks on the screen. Users can view, filter, and toggle tasks, and any changes are shown immediately in the UI. Done tasks are crossed out.