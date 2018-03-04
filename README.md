# Parent-Communication-Portal

Audience: Parents of high school dance team

Purpose: One stop shop where parents can:
1.	View calendar of meetings, performances, events
2.	View videos of performances
3.	View parent contact info
4.	View dance team members
5.	View meeting notes (NEXT PHASE)
6.	Post announcements (NEXT PHASE)

It is not intended to be a public website.

Login: Currently there is no login process. Anyone who goes to the URL is given access to view and update. In the next phase, parents will be given sign on username and password by administrator for view access only. Administrator will have separate username and password and only the administrator can update parent and team member info.

To run this locally you need to install the following packages:
* express
* sequelize
* mySQL2
* body-parser
* path

To customize for another dance team:
* Make images folder the current folder
* Make stylesheet the current file in css/styles.css 
* Need to set database name in config.json
* Set calendar embed code in calendar.html
* Set video Playlist embed code in videos.html

Specific current and future functionality:

Dancer table and parent table relationship
Current: 1 dancer can have more than 1 parent
Future: 1 dancer can have more than 1 parent AND 1 parent can have more than 1 dancer

