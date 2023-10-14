export function getUserDetails(){
    let user = JSON.parse(localStorage.getItem('toDoAppUser'));
    return user;
}