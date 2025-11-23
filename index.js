//!Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)


//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
    // tot_temperature_in_fahrenheit,
    // tot_temperature_in_celsius,
    // avg_temperature_in_fahrenheit,
    // avg_temperature_in_celsius
};

// Day 1: 32°F
const day1TempF = 32;
// Day 2: 25°C
const day2TempC = 25;
// Day 3: 70°F
const day3TempF = 70;
// Day 4: 18°C
const day4TempC = 18;
// Day 5: 80°F
const day5TempF = 80;
// Day 6: 15°C
const day6TempC = 15;
// Day 7: 72°F
const day7TempF = 72;
// Day 8: 28°C
const day8TempC = 28;
// Day 9: 68°F
const day9TempF = 68;
// Day 10: 20°C
const day10TempC = 20;
// Day 11: 75°F
const day11TempF = 75;
// Day 12: 23°C
const day12TempC = 23;
// Day 13: 82°F
const day13TempF = 82;
// Day 14: 30°C
const day14TempC = 30;
// Day 15: 65°F
const day15TempF = 65;
// Day 16: 22°C
const day16TempC = 22;
// Day 17: 77°F
const day17TempF = 77;
// Day 18: 26°C
const day18TempC = 26;
// Day 19: 78°F
const day19TempF = 78;
// Day 20: 24°C
const day20TempC = 24;
// Day 21: 73°F
const day21TempF = 73;
// Day 22: 21°C
const day22TempC = 21;
// Day 23: 79°F
const day23TempF = 79;
// Day 24: 27°C
const day24TempC = 27;
// Day 25: 71°F
const day25TempF = 71;
// Day 26: 19°C
const day26TempC = 19;
// Day 27: 74°F
const day27TempF = 74;
// Day 28: 17°C
const day28TempC = 17;
// Day 29: 76°F
const day29TempF = 76;
// Day 30: 29°C
const day30TempC = 29;

//Total temperature calculations
tot_temperature_in_fahrenheit = 0;
tot_temperature_in_celsius = 0;

//Day 1: 32°F
// Accumulate F: Add 32 to tot_temperature_in_fahrenheit
tot_temperature_in_fahrenheit += day1TempF;
// Convert to C and accumulate C: (F - 32) * 5/9
tot_temperature_in_celsius += (day1TempF - 32) * (5 / 9);

//Day 2: 25°C
// Accumulate C: Add 25 to tot_temperature_in_celsius
tot_temperature_in_celsius += day2TempC;
// Convert to F and accumulate F: (C * 9/5) + 32
tot_temperature_in_fahrenheit += (day2TempC *(9 / 5) + 32);

// Day 3: 70°F
// Accumulate F: Add 70 to tot_temperature_in_fahrenheit
tot_temperature_in_fahrenheit += day3TempF;
// Convert to C and accumulate C: (F - 32) * 5/9
tot_temperature_in_celsius += (day3TempF - 32) * (5 / 9);

// Day 4: 18°C
// Accumulate C: Add 18 to tot_temperature_in_celsius
tot_temperature_in_celsius += day4TempC;
// Convert to F and accumulate F: (C * 9/5) + 32
tot_temperature_in_fahrenheit += (day4TempC *(9 / 5) + 32);

// Day 5: 80°F
// Accumulate F: Add 80 to tot_temperature_in_fahrenheit
tot_temperature_in_fahrenheit += day5TempF;
// Convert to C and accumulate C: (F - 32) * 5/9
tot_temperature_in_celsius += (day5TempF - 32) * (5 / 9);

// Day 6: 15°C
// Accumulate C: Add 15 to tot_temperature_in_celsius
tot_temperature_in_celsius += day6TempC;
// Convert to F and accumulate F: (C * 9/5) + 32
tot_temperature_in_fahrenheit += (day6TempC * (9 / 5) + 32);

// Day 7: 72°F
// Accumulate F: Add 72 to tot_temperature_in_fahrenheit
tot_temperature_in_fahrenheit += day7TempF;
// Convert to C and accumulate C: (F - 32) * 5/9
tot_temperature_in_celsius += (day7TempF - 32) * (5 / 9);

// Day 8: 28°C
// Accumulate C: Add 28 to tot_temperature_in_celsius
tot_temperature_in_celsius += day8TempC;
// Convert to F and accumulate F: (C * 9/5) + 32
tot_temperature_in_fahrenheit += (day8TempC * (9 / 5) + 32);

// Day 9: 68°F
// Accumulate F: Add 68 to tot_temperature_in_fahrenheit
tot_temperature_in_fahrenheit += day9TempF;
// Convert to C and accumulate C: (F - 32) * 5/9
tot_temperature_in_celsius += (day9TempF - 32) * (5 / 9);

// Day 10: 20°C
// Accumulate C: Add 20 to tot_temperature_in_celsius
tot_temperature_in_celsius += day10TempC;
// Convert to F and accumulate F: (C * 9/5) + 32
tot_temperature_in_fahrenheit += (day10TempC * (9 / 5) + 32);

// Day 11: 75°F
// Accumulate F: Add 75 to tot_temperature_in_fahrenheit
tot_temperature_in_fahrenheit += day11TempF;
// Convert to C and accumulate C: (F - 32) * 5/9
tot_temperature_in_celsius += (day11TempF - 32) * (5 / 9);

// Day 12: 23°C
// Accumulate C: Add 23 to tot_temperature_in_celsius
tot_temperature_in_celsius += day12TempC;
// Convert to F and accumulate F: (C * 9/5) + 32
tot_temperature_in_fahrenheit += (day12TempC * (9 / 5) + 32);

// Day 13: 82°F
// Accumulate F: Add 82 to tot_temperature_in_fahrenheit
tot_temperature_in_fahrenheit += day13TempF;
// Convert to C and accumulate C: (F - 32) * 5/9
tot_temperature_in_celsius += (day13TempF - 32) * (5 / 9);

// Day 14: 30°C
// Accumulate C: Add 30 to tot_temperature_in_celsius
tot_temperature_in_celsius += day14TempC;
// Convert to F and accumulate F: (C * 9/5) + 32
tot_temperature_in_fahrenheit += (day14TempC * (9 / 5) + 32);

// Day 15: 65°F
// Accumulate F: Add 65 to tot_temperature_in_fahrenheit
tot_temperature_in_fahrenheit += day15TempF;
// Convert to C and accumulate C: (F - 32) * 5/9
tot_temperature_in_celsius += (day15TempF - 32) * (5 / 9);

// Day 16: 22°C
// Accumulate C: Add 22 to tot_temperature_in_celsius
tot_temperature_in_celsius += day16TempC;
// Convert to F and accumulate F: (C * 9/5) + 32
tot_temperature_in_fahrenheit += (day16TempC * (9 / 5) + 32);

// Day 17: 77°F
// Accumulate F: Add 77 to tot_temperature_in_fahrenheit
tot_temperature_in_fahrenheit += day17TempF;
// Convert to C and accumulate C: (F - 32) * 5/9
tot_temperature_in_celsius += (day17TempF - 32) * (5 / 9);

// Day 18: 26°C
// Accumulate C: Add 26 to tot_temperature_in_celsius
tot_temperature_in_celsius += day18TempC;
// Convert to F and accumulate F: (C * 9/5) + 32
tot_temperature_in_fahrenheit += (day18TempC * (9 / 5) + 32);

// Day 19: 78°F
// Accumulate F: Add 78 to tot_temperature_in_fahrenheit
tot_temperature_in_fahrenheit += day19TempF;
// Convert to C and accumulate C: (F - 32) * 5/9
tot_temperature_in_celsius += (day19TempF - 32) * (5 / 9);

// Day 20: 24°C
// Accumulate C: Add 24 to tot_temperature_in_celsius
tot_temperature_in_celsius += day20TempC;
// Convert to F and accumulate F: (C * 9/5) + 32
tot_temperature_in_fahrenheit += (day20TempC * (9 / 5) + 32);

// Day 21: 73°F
// Accumulate F: Add 73 to tot_temperature_in_fahrenheit
tot_temperature_in_fahrenheit += day21TempF;
// Convert to C and accumulate C: (F - 32) * 5/9
tot_temperature_in_celsius += (day21TempF - 32) * (5 / 9);

// Day 22: 21°C
// Accumulate C: Add 21 to tot_temperature_in_celsius
tot_temperature_in_celsius += day22TempC;
// Convert to F and accumulate F: (C * 9/5) + 32
tot_temperature_in_fahrenheit += (day22TempC * (9 / 5) + 32);

// Day 23: 79°F
// Accumulate F: Add 79 to tot_temperature_in_fahrenheit
tot_temperature_in_fahrenheit += day23TempF;
// Convert to C and accumulate C: (F - 32) * 5/9
tot_temperature_in_celsius += (day23TempF - 32) * (5 / 9);

// Day 24: 27°C
// Accumulate C: Add 27 to tot_temperature_in_celsius
tot_temperature_in_celsius += day24TempC;
// Convert to F and accumulate F: (C * 9/5) + 32
tot_temperature_in_fahrenheit += (day24TempC * (9 / 5) + 32);

// Day 25: 71°F
// Accumulate F: Add 71 to tot_temperature_in_fahrenheit
tot_temperature_in_fahrenheit += day25TempF;
// Convert to C and accumulate C: (F - 32) * 5/9
tot_temperature_in_celsius += (day25TempF - 32) * (5 / 9);

// Day 26: 19°C
// Accumulate C: Add 19 to tot_temperature_in_celsius
tot_temperature_in_celsius += day26TempC;
// Convert to F and accumulate F: (C * 9/5) + 32
tot_temperature_in_fahrenheit += (day26TempC * (9 / 5) + 32);

// Day 27: 74°F
// Accumulate F: Add 74 to tot_temperature_in_fahrenheit
tot_temperature_in_fahrenheit += day27TempF;
// Convert to C and accumulate C: (F - 32) * 5/9
tot_temperature_in_celsius += (day27TempF - 32) * (5 / 9);

// Day 28: 17°C
// Accumulate C: Add 17 to tot_temperature_in_celsius
tot_temperature_in_celsius += day28TempC;
// Convert to F and accumulate F: (C * 9/5) + 32
tot_temperature_in_fahrenheit += (day28TempC * (9 / 5) + 32);

// Day 29: 76°F
// Accumulate F: Add 76 to tot_temperature_in_fahrenheit
tot_temperature_in_fahrenheit += day29TempF;
// Convert to C and accumulate C: (F - 32) * 5/9
tot_temperature_in_celsius += (day29TempF - 32) * (5 / 9);

// Day 30: 29°C
// Accumulate C: Add 29 to tot_temperature_in_celsius
tot_temperature_in_celsius += day30TempC;
// Convert to F and accumulate F: (C * 9/5) + 32
tot_temperature_in_fahrenheit += (day30TempC * (9 / 5) + 32);

// Average temperature calculations
const tot_days = 30;
avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / tot_days;
avg_temperature_in_celsius = tot_temperature_in_celsius / tot_days;

// Uncomment the following lines to export the variables
module.exports = {
    tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
    avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius
};