# react-notes

Extra credit:

* authentication
* z-index adjustment (most recently-dragged note is on top)

## What I did

I followed the method that the React documentation discusses and was linked in the assignment spec ([Thinking in React](https://reactjs.org/docs/thinking-in-react.html)) to design my application's data flow. The most important aspect of this planning was defining a minimal representation of the application's state, which was mostly located in the top-level `App` component. Next I wrote placeholder components that became the skeleton of my application. Finally, I implemented the data flow I had planned in the beginning.


## What didn't work

During planning, I initially thought that I'd want to have a `NotesList` component to render all of the notes and manage their positioning. Perhaps with a more complicated ordering/reordering scheme I would want to go back to this design.