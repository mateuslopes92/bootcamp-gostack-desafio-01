# bootcamp-gostack-challenge-01

NodeJS Express Application as RocketSeat Challenge from GoStack Bootcamp.

This application is used to store projects and their tasks.

<h3>Routes</h3>
<ul>
<li>POST /projects: Receives id and title fields inside the request body in order to register a new project: { id: "1", title: 'New project', tasks: [] };</li>
</br>
<li>GET /projects: Lists all projects and their tasks.</li>
</br>
<li>PUT /projects/:id: Changes only the project title for specified project id passed as a route parameter.</li>
</br>
<li>DELETE /projects/:id: Deletes the project with the specified id.</li>
</br>
<li>POST /projects/:id/tasks: Receives title field and stores a new task into the project.tasks array, found in the project with the specified id passed as a route parameter; </li>
</br>
</ul>

<h3>Example</h3></br>
<p>Calling POST /projects passing { id: 1, title: 'New project' }, and calling POST /projects/1/tasks passing { title: 'New task' }, the projects array should be like that:</p>
<div>
  <pre>
[ 
  {
    id: "1", 
    title: 'New project', 
    tasks: ['New task'] 
  } 
]
  </pre>
</div>
