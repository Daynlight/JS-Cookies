//Data
var Cookies = [];

//Functions
function ReLoadCookies(){
    Cookies = [];
    var Data = decodeURIComponent(document.cookie).split(";");

    Data.forEach(element => {
        var Temp = element.split("=");
        Cookies[Temp[0].replaceAll(' ','')] = Temp[1];
    });
}
function LoadCookies(){ReLoadCookies()}

function CreateCookie(Name, Data, LifeTimeInMiliSeconds){
    var LifeDate = new Date();
    LifeDate.setTime(LifeDate.getTime() + LifeTimeInMiliSeconds);
    var NewCookie = `${Name}=${Data}; expires=${LifeDate.toUTCString() }; path=/`;
    
    Cookies[Name] = Data;
    document.cookie = NewCookie;
}

function DeleteCookie(Name){
    var LifeDate = new Date();
    LifeDate.setTime(LifeDate.getTime() * 0);
    var DeletedCookie = `${Name}=""; expires=${LifeDate.toUTCString()}; path=/`;
    
    Cookies[Name] = undefined;
    document.cookie = DeletedCookie
    console.log(Cookies);
}

//Export
export {Cookies, CreateCookie, LoadCookies, ReLoadCookies, DeleteCookie};