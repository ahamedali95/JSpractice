/*#### Cruise Control ####
# We're writing an algorithm for cruise control, where a car's driver can select
# a speed, and the car will try its best to drive at that speed.
#
# Our prototype keeps track of the desired speed and the actual speed of the car
# every second and produces an array of the speed errors that looks like this:
# speed_errors = [3, 2, 1, 0, 0, -2, -4, -3, -1, 1, 0]
#
# Positive speed_errors mean our car is going too fast, negative errors mean
# it's too slow. If the car is too slow or too fast for three seconds in a row,
# we want to make it more responsive.
#
# Write a function increase_responsiveness? that takes a speed_errors array and
# returns true if three consecutive errors are greater than zero or
# three consecutive errors are less than zero.
#
# test_drive_1 = [-1, -1, 2, 0, 1]
# increase_responsiveness?(test_drive_1) #=> false
#
# test_drive_2 = [0, 1, 2, 1, 0, -1]
# increase_responsiveness?(test_drive_2) #=> true
*/

function isIncreaseResponsiveness(speeds) {
  for(let i = 0; i < speeds.length - 2; i++) {
    if((speeds[i] > 0 && speeds[i+1] > 0 && speeds[i+2] > 0) ||
     ((speeds[i] < 0 && speeds[i+1] < 0 && speeds[i+2] < 0))) return true;
  }

  return false;
}
