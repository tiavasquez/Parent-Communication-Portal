# Parent-Communication-Portal

### Audience 
Parents of high school dance team

### Purpose 
One stop shop where parents can:
1.	View calendar of meetings, performances, events
2.	View videos of performances
3.	View parent contact info
4.	View dance team members
5.	View meeting notes (NEXT PHASE)
6.	Post announcements (NEXT PHASE)

### Important
It is not intended to be a public website. It is for team parents.

### Login
Currently there is no login process. Anyone who goes to the URL has access to view and update. In the next phase, parents will be given sign on username and password by administrator for view access only. Administrator will have separate username and password and only the administrator can update parent and team member info.

### To customize for another dance team
* Make images folder the current folder in public/images (dancers images, homepage image)
* Make stylesheet the current file in public/css/styles.css (background color, modal headers color, dancer name color) 
* Need to set database name in config.json
* Set calendar embed code in calendar.html
* Set video Playlist embed code in videos.html

### Constraints
Functionality | Current | Future
--- | --- | ---
Dancer table and parent table relationship | 1 dancer can have more than 1 parent | in addition, 1 parent can have more than 1 dancer
Dancers Display, Parents Display, Manage Dancers, Manage Parents | sorted by id | sorted alphabetically
Delete Dancer | sets dancer record to inactive AND sets parent(s) record to inactive | if no other dancer has the same parent(s), then inactivate the parent(s) record also
Delete Dancer, Delete Parent | no way to reactivate dancers and/or parents that have been “removed” (set to inactive) | ability to reactivate a dancer and parent
Add Parent | select/assign 1 dancer | Allow more than 1 dancer to be selected/assigned
Update Parent | cannot change dancer selection | allow dancer(s) selection to be changed

### To run this locally 
Install the following packages:
* express
* sequelize
* mySQL2
* body-parser
* path
