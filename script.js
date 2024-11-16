body {
    background-image: url('https://i.ibb.co/SRBXwM0/IMG-20241115-WA0160.jpg'); /* Replace with your image URL */
    background-size: cover; /* Ensures the image covers the entire screen */
    background-position: center; /* Centers the image */
    background-repeat: no-repeat; /* Prevents the image from repeating */
    margin: 0; /* Removes default body margins */
    font-family: Arial, sans-serif; /* Sets the font for the page */
}

.container {
    display: flex;
    flex-wrap: wrap; /* Allows wrapping of links on smaller screens */
    justify-content: center; /* Centers the links */
    gap: 20px; /* Adds space between links */
    padding: 20px; /* Adds padding around the container */
}

.box {
    text-decoration: none; /* Removes underline from links */
    color: white; /* Sets link text color to white */
    background-color: rgba(0, 0, 0, 0.6); /* Semi-transparent black background */
    padding: 15px 25px; /* Adds padding inside each box */
    border-radius: 10px; /* Rounds the corners of each box */
    font-size: 18px; /* Sets font size */
    transition: 0.3s; /* Adds smooth transition effect for hover */
}

.box:hover {
    background-color: rgba(255, 255, 255, 0.8); /* Lightens background on hover */
    color: black; /* Changes text color on hover */
}
