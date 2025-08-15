interface ApiResponse<T> {
  status: number;
  payload: T;
}

const messageResponse: ApiResponse<string> = {
  status: 200,
  payload: "OK",
};

const userResponse: ApiResponse<{ name: string; age: number }> = {
  status: 200,
  payload: { name: "Abdulaziz", age: 25 },
};

console.log(messageResponse, userResponse);
