
export default interface HttpConfig {
	url : string;
	method : "GET" | "POST",
	contentType ?: "application/x-www-form-urlencoded" | "application/json",
	params ?: any
	data ?: any
}