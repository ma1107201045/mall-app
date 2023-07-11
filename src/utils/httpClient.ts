import type HttpConfig from "@/types/httpConfig";
const baseUrl = "http://localhost"
const HttpClient = (httpConfig : HttpConfig) => {
	let token = uni.getStorageSync("token");
	let Authorization = token ? "Bearer " + token : "";
	return new Promise((resolve, reject) => {
		uni.showLoading({
			title: '加载中'
		});
		uni.request({
			header: {
				Authorization,
				"Content-Type": httpConfig.contentType ? httpConfig.contentType : "application/json"
			},
			url: baseUrl + httpConfig.url,
			method: httpConfig.method,
			data: httpConfig.contentType === "application/x-www-form-urlencoded" ? httpConfig.params : httpConfig.data,
			success(response) {
				resolve(response.data);
			},
			fail(err) {
				uni.showToast({
					icon: "none",
					title: '服务响应失败'
				});
				console.error(err);
				reject(err);
			},
			complete() {
				uni.hideLoading();
			}
		});
	});
};

// 全局请求封装
export default HttpClient