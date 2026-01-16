export const usernameRegex =(username)=>{
    const usernameR = /^[A-Za-z][A-Za-z0-9]{3,7}$/
    return usernameR.test(username.trim())
}