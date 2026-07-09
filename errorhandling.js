const apiResponse = '{"name":"John",}';

try{

    const data = JSON.parse(apiResponse);
    console.log(data)
}
catch{
    console.log("Invalid JSON received");
}