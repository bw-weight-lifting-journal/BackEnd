# BackEnd

WeightLifting Journal Backend

Usage = Clone/fork > NPM Install


>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

Use following endpoints

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Users
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/api/auth/register >> 

{
	"firstName": "",
	"lastName": "",
	"userName": "",
	"email": "",
	"password": ""
}

/api/auth/login

{
    "userName": "Howdy",
	"password": "12345"
}

>> returns userName and Token

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Exercise Endpoints
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/api/exercises/arms
/api/exercises/shoulders
/api/exercises/back
/api/exercises/chest
/api/exercises/legs
/api/exercises/core

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>