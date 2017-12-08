let message;
message="anike";

let endmessage=(<string>message).endsWith('e'); //type assesrtion
let bendmessage=(message as string).endsWith("e");

console.log(bendmessage);