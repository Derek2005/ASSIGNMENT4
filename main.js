// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS
const storyText =
  'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = [
  'spontaneously combusted',
  'melted into a puddle on the sidewalk',
  'turned into a slug and crawled away',
];

// 3. EVENT LISTENER AND FUNCTION
randomize.addEventListener('click', result);

function result() {
  console.log('Button clicked'); // Debugging log
  let newStory = storyText;

  // Replace placeholders with random values
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  console.log('Random values:', xItem, yItem, zItem); // Debugging log

  newStory = newStory.replaceAll(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);

  // Replace Bob with custom name if provided
  if (customName.value !== '') {
    const name = customName.value;
    console.log('Custom name entered:', name); // Debugging log
    newStory = newStory.replace('Bob', name);
  }

  // Convert units for UK settings
  if (document.getElementById('uk').checked) {
    const weight = `${Math.round(300 / 14)} stone`;
    const temperature = `${Math.round((94 - 32) * (5 / 9))} centigrade`;

    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
    console.log('UK units applied:', weight, temperature); // Debugging log
  }

  // Display the story
  story.textContent = newStory;
  story.style.visibility = 'visible';
  console.log('Final story generated:', newStory); // Debugging log
}
