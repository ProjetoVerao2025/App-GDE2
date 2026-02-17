const URL = "http://127.0.0.1:8000";

export async function apiRequest(
    endpoint: string, 
    method: string,
    body?:any,
)
{
//     try {
// const response = await fetch(url);
// if (!response.ok) {
//     throw new Error(`Response status: ${response.status}`);
// }

// const result = await response.json();
// console.log(result);
// } catch (error) {
// console.error(error.message);
// }
const response = await fetch(`${URL}${endpoint}`, {
    method,
    headers: {"Content-Type": "application/json"},
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  return response.json();
}