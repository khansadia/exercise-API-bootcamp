// Fetch attendee data from the API
fetch('https://majazocom.github.io/Data/attendees.json')
  .then(response => response.json())
  .then(data => {
    // Filter attendees who are attending
    const attendingAttendees = data.filter(attendee => attendee.attending);

    // Render attending attendees to the DOM
    const attendeeList = document.getElementById('attendee-list');
    attendingAttendees.forEach(attendee => {
      const listItem = document.createElement('li');
      listItem.textContent = `${attendee.name} (${attendee.company})`;
      attendeeList.appendChild(listItem);
    });

 // Filter attendees with allergies
    const allergicAttendees = attendingAttendees.filter(attendee => attendee.allergy);

    // Render allergic attendees to the DOM
    const allergicList = document.getElementById('allergic-list');
    allergicAttendees.forEach(attendee => {
      const listItem = document.createElement('li');
      listItem.textContent = `${attendee.name} (${attendee.allergy})`;
      allergicList.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error('Error fetching attendee data:', error);
  });
 