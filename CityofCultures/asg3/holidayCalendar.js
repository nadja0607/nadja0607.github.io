// displaying the date selected by user  
function displayHoliday()
{
let userv = document.getElementById("holiday").value; // get date from user
console.log(userv)

// creating date object and setting it to user date
var holidayDate = new Date(userv);
console.log(holidayDate)
// get day in UTC universal Time 
let day = holidayDate.getUTCDate();

// get month in UTC time
let month = holidayDate.getUTCMonth();

let months = new Array();
months[0]="January";
months[1]="February";
months[2]="March";
months[3]="April";
months[4]="May";
months[5]="June";
months[6]="July";
months[7]="August";
months[8]="September";
months[9]="October";
months[10]="November";
months[11]="December";

// get year
let year = holidayDate.getUTCFullYear();

console.log(months[month], day + ",", year);


let holidays = [
    {
      "name": "Halloween",
      "isHoliday": 0,
      "date": new Date('2021-10-31'),
      "image": "images/halloween.png"
    },
    {
        "name": "Labor Day",
        "isHoliday": 1,
        "date": new Date('2021-09-06'),
        "image": "images/laborday.png"
    },
    {
        "name": "Fall Break",
        "isHoliday": 1,
        "date": new Date('2021-10-11'),
        "image": "images/fall.png"
    },
    {
        "name": "Thanksgiving",
        "isHoliday": 1,
        "date": new Date('2021-11-25'),
        "image": "images/thanks.png"
      },
      {
        "name": "Thanksgiving",
        "isHoliday": 1,
        "date": new Date('2021-11-26'),
        "image": "images/thanks.png"
      },
      {
        "name": "Last Day of Fall classes",
        "isHoliday": 0,
        "date": new Date('2021-12-14'),
        "image": "images/last.png"
      },
      {
        "name": "Last Day of Spring classes",
        "isHoliday": 0,
        "date": new Date('2022-05-09'),
        "image": "images/last.png"
      },
      {
        "name": "Last Day of Academic Year 2021/2022",
        "isHoliday": 0,
        "date": new Date('2022-08-17'),
        "image": "images/last.png"
      },
      {
        "name": "Thanksgiving",
        "isHoliday": 1,
        "date": new Date('2021-11-26'),
        "image": "images/thanks.png"
      },
      {
        "name": "Winter Break",
        "isHoliday": 1,
        "date": new Date('2021-12-23'),
        "image": "images/winterbreak.png"
      },
      {
        "name": "Winter Break",
        "isHoliday": 1,
        "date": new Date('2021-12-24'),
        "image": "images/winterbreak.png"
      },
      {
        "name": "Christmas",
        "isHoliday": 1,
        "date": new Date('2021-12-25'),
        "image": "images/christmas.png"
      },
      {
        "name": "Winter Break",
        "isHoliday": 1,
        "date": new Date('2021-12-26'),
        "image": "images/winterbreak.png"
      },
      {
        "name": "Winter Break",
        "isHoliday": 1,
        "date": new Date('2021-12-27'),
        "image": "images/winterbreak.png"
      },
      {
        "name": "Winter Break",
        "isHoliday": 1,
        "date": new Date('2021-12-28'),
        "image": "images/winterbreak.png"
      },
      {
        "name": "Winter Break",
        "isHoliday": 1,
        "date": new Date('2021-12-29'),
        "image": "images/winterbreak.png"
      },
      {
        "name": "Winter Break",
        "isHoliday": 1,
        "date": new Date('2021-12-30'),
        "image": "images/winterbreak.png"
      },
      {
        "name": "Winter Break",
        "isHoliday": 1,
        "date": new Date('2021-12-31'),
        "image": "images/winterbreak.png"
      },
      {
        "name": "Winter Break",
        "isHoliday": 1,
        "date": new Date('2022-01-02'),
        "image": "images/winterbreak.png"
      },
      {
        "name": "New Year",
        "isHoliday": 1,
        "date": new Date('2022-01-01'),
        "image": "images/new.png"
      },
      {
        "name": "Martin Luther King Jr. Birthday",
        "isHoliday": 1,
        "date": new Date('2022-01-17'),
        "image": "images/mlk.png"
      },
      {
        "name": "Presidents' Day",
        "isHoliday": 1,
        "date": new Date('2022-01-17'),
        "image": "images/pres.png"
      },
      {
        "name": "Memorial Day",
        "isHoliday": 1,
        "date": new Date('2022-05-30'),
        "image": "images/mem.png"
      },
      {
        "name": "Independence Day",
        "isHoliday": 1,
        "date": new Date('2022-07-04'),
        "image": "images/ind.png"
      },
      {
        "name": "Juneteenth",
        "isHoliday": 1,
        "date": new Date('2022-06-19'),
        "image": "images/jun.png"
      },
      {
        "name": "Commencement",
        "isHoliday": 0,
        "date": new Date('2022-05-18'),
        "image": "images/com.png"
      },
      {
        "name": "Spring Break",
        "isHoliday": 1,
        "date": new Date('2022-03-14'),
        "image": "images/spring.png"
      },
      {
        "name": "Spring Break",
        "isHoliday": 1,
        "date": new Date('2022-03-15'),
        "image": "images/spring.png"
      },
      {
        "name": "Spring Break",
        "isHoliday": 1,
        "date": new Date('2022-03-16'),
        "image": "images/spring.png"
      },
      {
        "name": "Spring Break",
        "isHoliday": 1,
        "date": new Date('2022-03-17'),
        "image": "images/spring.png"
      },
      {
        "name": "Spring Break",
        "isHoliday": 1,
        "date": new Date('2022-03-18'),
        "image": "images/spring.png"
      },
      {
        "name": "Spring Break",
        "isHoliday": 1,
        "date": new Date('2022-03-19'),
        "image": "images/spring.png"
      },
      {
        "name": "Spring Break",
        "isHoliday": 1,
        "date": new Date('2022-03-20'),
        "image": "images/spring.png"
      }
]

let output;
let chosenHoliday
if(holidays.some(holiday => holiday.date.getTime() === holidayDate.getTime())){
    chosenHoliday = holidays.find(holiday => holiday.date.getTime() === holidayDate.getTime())
    let holidayCheck = chosenHoliday.isHoliday
    if (holidayCheck == 0){
        output =  months[month] + " " + day + ", " + year + " is " + chosenHoliday.name + "!" + " This is not an NYU holiday but have fun and enjoy it!";

        document.getElementById('images').innerHTML = "<img src=" + chosenHoliday.image+ ">";
    }
    else {
        output =  months[month] + " " + day + ", " + year + " is " + chosenHoliday.name + "!" + " This is an NYU holiday!";
        document.getElementById('images').innerHTML = "<img src=" + chosenHoliday.image+ ">";
    }
} else{
    console.log("Object not found.");
    output =  months[month] + " " + day + ", " + year + " is not an NYU holiday!";
    document.getElementById('images').innerHTML = '<img src="images/sad.png ">';
}

document.getElementById("output").innerHTML= output;

}