http://www.randat.com/
https://random.limited/date-time-generator/

query customerByDocument {
customer(filter: {type: DNI, number: "09139150"}) {
id
lastName
firstName
gender
phone
email
document {
type
number
}
}
}

query customerById {
customer(filter: {id: "2f1b862e-57df-417c-a98a-67ebc8ad3aae"}) {
id
lastName
firstName
document {
type
number
}
}
}

query{
customerSearch(filter:{firstName:"Jenna"}){
id
phone
lastName
firstName
}
}