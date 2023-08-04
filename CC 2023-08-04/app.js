// You will be given an array of events, which are represented by strings. The strings are dates in HH:MM:SS format.

// It is known that all events are recorded in chronological order and two events could not occur in the same second. Define the minimum number of days during which the log is written.

// Example:

// Input -> ["00:00:00", "00:01:11", "02:15:59", "23:59:58", "23:59:59"]
// Output -> 1

// Input -> ["12:12:12"]
// Output -> 1

// Input -> ["12:00:00", "23:59:59", "00:00:00"]
// Output -> 2


function checkLogs(log) {
    let days = 1;
    for (let i = 0; i < log.length - 1; i++) {
        log[i] >= log[i + 1] ? days++ : days;
    }

    return days;
  }