

// Query string extractor 


link = " amazon.com/login?email=a@mail.com&password=123&remember=1 "


console.log("email is:"+link.slice((link.indexOf("l="))+2,(link.indexOf("&p"))))
console.log("\n"+"password is:"+link.slice((link.indexOf("d="))+2,(link.indexOf("&r"))))
console.log("\n"+"remember is:"+link.slice((link.indexOf("r="))+2))


