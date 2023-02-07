# Motorq-Assignement

How To Run this Project
Go to Project Directory cd MotorqAssignment
Create a Virtual Environment python -m venv env
Activate Virtual Environment  .env/bin/activate
Install Requirements Package pip install -r requirements.txt
Migrate Database python manage.py migrate
Create Super User python manage.py createsuperuser
Finally Run The Project python manage.py runserver

Description :
This Project has 2 access modules,one for admin and other for participants.Admin has all the rights to modify,delete and create the Events and participants can only view the events in the map and register it.The confirmation of the registration is only done by the admin and deletion of the event registration also must be from the admin.

Project Flow
1. P can register on the Event Management Portal (EMP).
2. EMP will have multiple events across various time slots.
a. Overlapping events are possible.
3. A should be able to CRUD an event.
4. Events page should be visible publicly.
5. P can register for any event(s).
a. Registering for overlapping events should not be allowed.
6. An event (say e) should have a fixed number of seats (say s), so if s number of P 
have registered for event, e, any more P should not be allowed to register for the 
same event,
a. However, if any previously registered P, de-registers from an event, such that 
all seats, s, are not booked, another P can now register for the same event.
7. Registering for an event generates a unique code, specific to the P and the event.
8. A can allow the P in the event by entering the unique code.
a. Once the unique code is entered, it cannot be used again, and if done so, 
display appropriate messages.
9. Search functionality
a. for the P to filter events
10. Location of events to be visible to the P in a map view
