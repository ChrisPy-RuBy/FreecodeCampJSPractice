
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
// Only change code below this li
    for (i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName !== firstName) {
        console.log("here", firstName)

        return "No such contact"
    }
    else {
        for (j=0; j < contacts[i].length; j++) {
        if (contacts[i][j] == prop) {
            return contacts[i][j]
            console.log(contacts[i][j])
        }
        else {
            return "No such property"
        }
    }
}
}
// Only change code above this line
}

lookUpProfile("Akira", "likes");