export async function registerUser(data) {
  console.log(data);
  alert("«« Register user »» \n" + JSON.stringify(data, null, 2));
}

export async function signInUser(data) {
  console.log(data);
  alert("«« SignIn user »» \n" + JSON.stringify(data, null, 2));
}

export async function resetPassword(data) {
  console.log(data);
  alert("«« Reset password »» \n" + JSON.stringify(data, null, 2));
}
