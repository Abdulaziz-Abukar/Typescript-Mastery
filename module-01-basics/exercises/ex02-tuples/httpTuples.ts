type HttpResult = [statusCode: number, message: string];

function formatResult(r: HttpResult): string {
  return `${r[0]} ${r[1]}`;
}

const okResponse: HttpResult = [200, "Ok"];
const createdResponse: HttpResult = [201, "Created"];
const errorResponse: HttpResult = [404, "Not Found"];
const badRequestResponse: HttpResult = [400, "Bad Request"];

console.log(formatResult(createdResponse));
