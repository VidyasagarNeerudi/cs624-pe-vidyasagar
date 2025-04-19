Input
Users can type in their preferred course using a TextInput field, which the software uses to accept input.  useState hook stores this input in the component's state, hence enabling dynamic updates as the user inputs.

Process
The application updates the state variable holding the user's favorite course, hence processing this input upon entering a preferred course.  Predefined in arrays are the core courses, depth of study courses, and capstone courses.  The program runs the map function over these arrays to show every course in a scrollable layout.  Even if it surpasses the screen size, the ScrollView component guarantees that all material is accessible.

Output
Rendered on the screen, the output shows the capstone course, depth courses, and list of core courses. Dynamically shown underneath the input area is also the user's preferred course, therefore offering instant feedback depending on user engagement. The layout of the app is designed for simplicity and clarity.