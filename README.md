## Installation Instructions

1.Clone the repo by clicking the '<> code' button.
2.Copy the HTTPS URL.
3.Open a terminal of your choice.
4.Change the current working directory to the location where you want the cloned directory.
5.Type git clone and then paste the repo HTTPS URL.
6.Press enter to create your local clone.
7.Open the project folder in your IDE.
8.'cd' into the working directory.
9.Run 'npm install' to install all dependencies.
10.Run in development mode using 'npm run dev'.

## Technologies Used

- Next.js
- TypeScript
- SCSS

## Objective

Create a responsive and interactive Next.js component showcasing various sub-teams within an organisation. Your implementation should be dynamic, using TypeScript and SCSS for styles. The interface must allow users to filter and view content specific to each sub-team selected.

## Additional Info

- No additional NPM packages were installed to complete this test.
- The app works correctly against the latest version of Chrome, Firefox and Edge.

## Challenges that I faced

On the whole, constructing this app was a relatively comfortable process for me. Nonetheless, I encountered a few challenges during development. My familiarity with integrating videos into applications was limited, and initially, I considered utilising the HTML video element. However, I quickly realised that the video element is intended for playing video files directly. Recognising this, I switched to using the iframe element. To facilitate this, I needed the embedded video ID, so I used a regular expression to substitute the "/watch" path with the "/embed" path in the URL, ensuring the iframe received the correct source.
