
0.3.0 / 2012-03-22
==================

  * Build production file;
  * bugfix: Use friendly month on routes;
  * Centralize the calendar on active day;
  * Reset button redirects to !/clear and then !/index;
  * Added the changelog file;
  * Normalized the month to JS value:
  * Merge branch 'feature/refactoring_today_route' into develop
  * views/index redirecting to new !/today route;
  * Router added !/today;
  * Utils#isSameMonth;
  * Merge branch 'release/0.2' into develop

0.2.0 / 2012-03-19
==================

 * Updated the production.js file;
 * Doesn't serve the appcache manifest on development;
 * Using the NODE_ENV to set the main require module;
 * Build file renamed to /javascripts/production.js;
 * Utils#isValidHour now accepts 07:00 and 7:00;
 * Basic application cache manifest;
 * Back to the dev build;
 * Merge branch `release/0.1` into develop

0.1.0 / 2012-03-12
==================

 * Reference the build file on require tag;
 * Build the app as a single file;
 * Created the build file;
 * Added requirejs as dependencies:
 * Using relative paths to template files;
 * Show the right month name;
 * Bad typo in package.json
 * Fix the cursor on day selection;
 * Show the error message on month selection;
 * Generic CSS error class;
 * Validation the options input;
 * Removed the Go button for selecting the month;
 * Adding coffee-script as dependency;
 * Force node 0.6.x and npm 1.1.x;
 * Calculate the min/reg/max on entrance change and update the view;
 * Small AMD issue;
 * Added the calculator module from overtime;
 * Save the entrance or exit on blur event;
 * Added the validation for entrance and exit as valid hour;
 * isSameDay(), isDate() and isValidHour();
 * Make a real Date object, 'cause localStorage fuck it up!
 * Now input the entrance and exit hour;
 * Reset button: clear the locationStorage;
 * Save the day model on view;
 * Refactored !/index route;
 * Use isEmpty() instead lenght on collections;
 * Button layout for select the time;
 * Force the Day.date to be a Date object;
 * Using Collection.create instead of add to save the models;
 * Link to reset localStorage;
 * Better default values;
 * Let the days container have fluid width;
 * Changing the day clicking on days list;
 * Layout and events for changing the active day;
 * User the day as hour for debug;
 * Make today darker;
 * Filter today to show on main view;
 * Showing the month name on footer;
 * Rendering main view using Collection/Model:
 * Utils functions module;
 * Fix wrong directory name and remove old jade template;
 * Redirection to !/year/month working;
 * Model Options with better defaults;
 * Jade views changes and removed debug bar;
 * Added text! plugin and updated require loader;
 * tab -> spaces;
 * Saving and retrieving the selected month on localStorage;
 * Added the Go button on month selection screen;
 * Dummy /api/:method route:
 * Added Backbone.localStorage plugin;
 * New screen for month selection:
 * Basic AMD structure;
 * More ignored files;
 * Require.js + Backbone + jQuery + Underscore;
 * MVC structure;
 * iframe view only show portrait for now;
 * Basic node app and layout;
 * favicon and iphone images;
 * gitignore and heroku procfile;
 * Initial commit
