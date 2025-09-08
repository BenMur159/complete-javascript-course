///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/
test_data = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let forcast = '';
  for (let i = 0; i < arr.length; i++) {
    if (i + 1 === 1) {
      forcast += `... ${arr[i]}°C in ${i + 1} day`;
    } else {
      forcast += `... ${arr[i]}°C in ${i + 1} days`;
    }
  }
  forcast += ' ...';
  return forcast;
};

console.log(printForecast(test_data));

// Coding Challenge #2 With AI

/*
Let's say you're building a time tracking application for freelancers. At some point in building this app, you need a function that receives daily work hours for a certain week, and returns:
1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
5. Whether the week was full-time (worked 35 hours or more)

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]
*/

const weeklyHoursArr = [7.5, 8, 6.5, 0, 8.5, 4, 0];

function trackFreelancerTime(weeklyHoursArr) {
  const freelancerHours = {
    totalHoursWorked: 0,
    dayMostHours: '',
    numDaysWorked: 0,
    freelancerFullTime: false,
  };

  let hoursDayMostHours = 0;
  for (let i = 0; i < weeklyHoursArr.length; i++) {
    freelancerHours.totalHoursWorked += weeklyHoursArr[i];

    if (weeklyHoursArr[i] > 0) {
      freelancerHours.numDaysWorked++;
    }

    if (hoursDayMostHours <= weeklyHoursArr[i]) {
      hoursDayMostHours = weeklyHoursArr[i];
      switch (i) {
        case 0:
          freelancerHours.dayMostHours = 'Mon';
          break;
        case 1:
          freelancerHours.dayMostHours = 'Tue';
          break;
        case 2:
          freelancerHours.dayMostHours = 'Wed';
          break;
        case 3:
          freelancerHours.dayMostHours = 'Thu';
          break;
        case 4:
          freelancerHours.dayMostHours = 'Fri';
          break;
        case 5:
          freelancerHours.dayMostHours = 'Sat';
          break;
        case 6:
          freelancerHours.dayMostHours = 'Sun';
          break;
        default:
          freelancerHours.dayMostHours = 'ERR';
      }
    }
  }
  freelancerHours['avgHoursWorked'] =
    freelancerHours.totalHoursWorked / weeklyHoursArr.length;
  if (freelancerHours.totalHoursWorked >= 35) {
    freelancerHours.freelancerFullTime = true;
  }

  return freelancerHours;
}

console.log(trackFreelancerTime(weeklyHoursArr));
