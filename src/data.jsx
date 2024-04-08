import reviewerImage1 from './assets/IMG-20240402-WA0018.jpg'; // Import reviewer image

const currentTime = new Date(); // Get current time in local timezone
const gmtPlus1Time = new Date(currentTime.getTime() + (1 * 60 * 60 * 1000)); // Add 1 hour to current time for GMT+1

const review = [
    {
      stars: 4, // Review stars (out of 5)
      reviewerName: "John Doe", // Name of the person reviewing
      reviewerPicture: reviewerImage1,
      location: "New York, NY",
      topic: "Food",
      thumbsUp: 10,
    thumbsDown: 2,
      commentlogo: 100,
      comments: "Great food and atmosphere!",
      timestamp: gmtPlus1Time // Set the timestamp to the GMT+1 time
    },
];

const info = [
  {
    street: "Bonny and Clyde Street, Ajao Estate, Lagos",
    rev: "450 Reviews", 
    leaveareview: "Leave a review",
    people: " (People are raving about the selected location)",
    places: "Schools, Hospitals, Resort Park, Shopping Malls, Airport, Train, Station, Nightlife,Public Wifi,Parking Lot, Security, Public Transport, Bus, Station, Quiet"
  }
]

export default info;
