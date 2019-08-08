import template from 'html-loader!../components/example/markup2.html';
import addStory from '../add-story.js';

// TODO: This template has "require \n" text added for some reason.
addStory('HTL' , 'Hello world', template);
